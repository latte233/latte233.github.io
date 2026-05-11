// 博客布局改造：左侧导航收起功能 & TOC优化
// v=2026051101

(function() {
  'use strict';

  // 等待DOM加载完成
  document.addEventListener('DOMContentLoaded', function() {
    // 使用MutationObserver监听DOM变化，确保toc-wrapper被创建后再移动
    observeTOCAndInit();
  });

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
  // 根本原因：Chirpy 内置 CSS 在 @media (min-width: 850px) 中给 #main-wrapper 设置了
  // margin-left: 260px（sidebar 宽度），sidebar 隐藏后这个 margin 不会自动消失
  // 解决方案：直接将 #main-wrapper 的 margin-left inline style 设为 0 覆盖
  function expandMainContent() {
    var mainWrapper = document.getElementById('main-wrapper');
    if (mainWrapper) {
      mainWrapper.style.marginLeft = '0';
    }
    document.body.classList.add('sidebar-is-collapsed');
  }

  // 问题3：恢复正文区域
  function collapseMainContent() {
    var mainWrapper = document.getElementById('main-wrapper');
    if (mainWrapper) {
      mainWrapper.style.marginLeft = '';
    }
    document.body.classList.remove('sidebar-is-collapsed');
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
