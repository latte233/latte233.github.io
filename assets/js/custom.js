// 博客布局改造：左侧导航收起功能 & TOC优化
// v=2026051106

(function() {
  'use strict';

  // defer 脚本执行时 DOM 已完整，直接初始化
  // （DOMContentLoaded 可能已触发，也可能还没，两种情况都处理）
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      observeTOCAndInit();
      addThemeBtn();
    });
  } else {
    observeTOCAndInit();
    addThemeBtn();
  }

  // 使用MutationObserver监听TOC元素出现
  function observeTOCAndInit() {
    var panelWrapper = document.getElementById('panel-wrapper');
    var tocWrapper = document.getElementById('toc-wrapper');
    
    if (tocWrapper) {
      // TOC已经存在，直接移动
      reorderTOC();
      initSidebarToggle();
      return;
    }
    
    if (panelWrapper) {
      // 监听panel-wrapper的子元素变化
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1 && (node.id === 'toc-wrapper' || node.querySelector('#toc-wrapper'))) {
              var toc = document.getElementById('toc-wrapper');
              if (toc) {
                reorderTOC();
                initSidebarToggle();
                observer.disconnect();
              }
            }
          });
        });
        
        // 兜底：检查是否已经有toc-wrapper
        var toc = document.getElementById('toc-wrapper');
        if (toc) {
          reorderTOC();
          initSidebarToggle();
          observer.disconnect();
        }
      });
      
      observer.observe(panelWrapper, { childList: true, subtree: true });
      
      // 兜底：1秒后强制执行
      setTimeout(function() {
        reorderTOC();
        initSidebarToggle();
        observer.disconnect();
      }, 1000);
    } else {
      // panel-wrapper不存在，延迟检查
      setTimeout(observeTOCAndInit, 500);
    }
  }

  // 问题1：将TOC移到panel-wrapper最前面
  function reorderTOC() {
    // 找到panel-wrapper
    var panelWrapper = document.getElementById('panel-wrapper');
    if (!panelWrapper) return;

    // 找到toc-wrapper（文章内容面板）
    var tocWrapper = document.getElementById('toc-wrapper');
    if (!tocWrapper) return;

    // 如果toc-wrapper已经在第一个位置，直接返回
    if (panelWrapper.firstChild === tocWrapper) return;

    // 找到panel-wrapper中的所有子元素
    var children = Array.prototype.slice.call(panelWrapper.children);
    var tocIndex = children.indexOf(tocWrapper);

    // 如果找到了toc-wrapper且不在最前面，则移动它到最前面
    if (tocIndex > 0) {
      panelWrapper.insertBefore(tocWrapper, panelWrapper.firstChild);
    }
  }

  // 问题2&3：左侧导航收起/展开功能 + 正文宽度调整
  function initSidebarToggle() {
    var sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    // 检查是否已有收起按钮
    if (document.getElementById('sidebar-toggle')) return;

    // 找到main元素（主内容区）
    var mainEl = document.querySelector('main') || document.querySelector('.col-lg-11');
    
    // 创建收起按钮 - 放在body层面fixed定位
    var toggleBtn = document.createElement('button');
    toggleBtn.id = 'sidebar-toggle';
    toggleBtn.innerHTML = '&#9664;'; // ◀ 左箭头（展开状态）
    toggleBtn.title = '收起/展开侧边栏';
    toggleBtn.setAttribute('aria-label', '收起/展开侧边栏');

    // 将按钮添加到body
    document.body.appendChild(toggleBtn);

    // 设置初始位置（在sidebar左边缘）
    positionToggleButton(toggleBtn, sidebar, false);

    // 点击事件
    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');
      
      var isCollapsed = sidebar.classList.contains('collapsed');
      
      if (isCollapsed) {
        // 收起状态 - 显示右箭头
        toggleBtn.innerHTML = '&#9654;';
        toggleBtn.style.left = '0';
        // 问题3：展开正文区域
        expandMainContent();
      } else {
        // 展开状态 - 显示左箭头
        toggleBtn.innerHTML = '&#9664;';
        toggleBtn.style.left = '';
        // 问题3：恢复正文区域
        collapseMainContent();
      }

      positionToggleButton(toggleBtn, sidebar, !isCollapsed);

      // 保存状态到localStorage
      localStorage.setItem('sidebar-collapsed', isCollapsed);
    });

    // 恢复之前的状态
    var savedState = localStorage.getItem('sidebar-collapsed');
    if (savedState === 'true') {
      sidebar.classList.add('collapsed');
      toggleBtn.innerHTML = '&#9654;';
      toggleBtn.style.left = '0';
      expandMainContent();
      positionToggleButton(toggleBtn, sidebar, false);
    }

    // 监听窗口大小变化，重新定位按钮
    window.addEventListener('resize', function() {
      positionToggleButton(toggleBtn, sidebar, !sidebar.classList.contains('collapsed'));
    });
  }

  // 定位收起按钮
  function positionToggleButton(btn, sidebar, isExpanded) {
    btn.style.position = 'fixed';
    btn.style.top = '50%';
    btn.style.transform = 'translateY(-50%)';
    btn.style.zIndex = '1001';

    if (sidebar.classList.contains('collapsed')) {
      // 收起状态：按钮贴在屏幕左边缘（right edge of 0-width sidebar）
      btn.style.left = '0';
      btn.style.borderRadius = '0 8px 8px 0';
    } else {
      // 展开状态：按钮贴在 sidebar 右边缘
      // Chirpy sidebar 是 fixed 定位，宽度从 CSS 变量或实际宽度取
      var sidebarWidth = sidebar.offsetWidth || 260;
      btn.style.left = sidebarWidth + 'px';
      btn.style.borderRadius = '0 8px 8px 0';
    }
  }

  // 问题3：展开正文区域（sidebar收起时）
  // 层级关系：#main-wrapper（margin-left:260px）> .container（max-width阶梯）> .row > main（col-xl-9）+ panel（col-xl-3）
  // 需要同时清除三层限制：① main-wrapper margin-left ② container max-width ③ main 的 col-xl-9 占位
  function expandMainContent() {
    var mainWrapper = document.getElementById('main-wrapper');
    if (!mainWrapper) return;

    // ① 清除 main-wrapper 的 margin-left
    mainWrapper.style.marginLeft = '0';

    // ② 覆盖 Bootstrap .container 的阶梯式 max-width
    var container = mainWrapper.querySelector('.container');
    if (container) {
      container.style.maxWidth = '100%';
      container.style.paddingLeft = '2rem';
      container.style.paddingRight = '2rem';
    }

    // ③ 让 main 占满全行（去掉 col-xl-9/col-lg-11，改为 col-12）
    var mainEl = mainWrapper.querySelector('main');
    if (mainEl) {
      mainEl.dataset.origClass = mainEl.className;
      mainEl.classList.remove('col-xl-9', 'col-lg-11', 'col-lg-9');
      mainEl.classList.add('col-12');
    }

    // ④ 隐藏右侧 panel（已经没有内容，但占着 col-xl-3 的宽度）
    var panel = document.getElementById('panel-wrapper');
    if (panel) panel.style.display = 'none';

    document.body.classList.add('sidebar-is-collapsed');
  }

  // 问题3：恢复正文区域
  function collapseMainContent() {
    var mainWrapper = document.getElementById('main-wrapper');
    if (!mainWrapper) return;

    mainWrapper.style.marginLeft = '';

    var container = mainWrapper.querySelector('.container');
    if (container) {
      container.style.maxWidth = '';
      container.style.paddingLeft = '';
      container.style.paddingRight = '';
    }

    // 恢复 main 的原始 class
    var mainEl = mainWrapper.querySelector('main');
    if (mainEl && mainEl.dataset.origClass) {
      mainEl.className = mainEl.dataset.origClass;
      delete mainEl.dataset.origClass;
    }

    // 恢复 panel 显示
    var panel = document.getElementById('panel-wrapper');
    if (panel) panel.style.display = '';

    document.body.classList.remove('sidebar-is-collapsed');
  }

  // 主题切换按钮：插入到 topbar 右侧
  function addThemeBtn() {
    if (document.getElementById('topbar-theme-btn')) return;
    var topbar = document.getElementById('topbar');
    if (!topbar) return;

    function isDark() {
      return document.documentElement.getAttribute('data-mode') === 'dark'
        || (!document.documentElement.hasAttribute('data-mode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    var btn = document.createElement('button');
    btn.id = 'topbar-theme-btn';
    btn.title = '切换主题';
    btn.type = 'button';

    function updateIcon() {
      btn.innerHTML = isDark() ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
    updateIcon();

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (typeof Theme !== 'undefined' && Theme.flip) {
        Theme.flip();
      }
      setTimeout(updateIcon, 80);
    });

    new MutationObserver(function() { updateIcon(); }).observe(
      document.documentElement,
      { attributes: true, attributeFilter: ['data-mode'] }
    );

    topbar.appendChild(btn);
  }

  // TOC滚动高亮优化
  function initTOCHighlight() {
    var tocLinks = document.querySelectorAll('#toc .toc-nav a, .toc-link, #toc a');
    if (tocLinks.length === 0) return;

    var headings = Array.from(document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3'));
    
    if (headings.length === 0) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          tocLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-80px 0px -80% 0px',
      threshold: 0
    });

    headings.forEach(function(heading) {
      if (heading.id) {
        observer.observe(heading);
      }
    });
  }
})();
