// 博客布局改造：左侧导航收起功能 & TOC优化
// v=2026040316

(function() {
  'use strict';

  // 等待DOM加载完成
  document.addEventListener('DOMContentLoaded', function() {
    // 问题1：将TOC移到panel-wrapper最前面
    reorderPanelWrapper();
    // 问题2&3：修复收起按钮和正文宽度
    initSidebarToggle();
  });

  // 问题1：将TOC移到panel-wrapper最前面
  function reorderPanelWrapper() {
    var panelWrapper = document.getElementById('panel-wrapper');
    if (!panelWrapper) return;

    // 找到所有子元素
    var children = Array.prototype.slice.call(panelWrapper.children);
    var tocElement = null;
    var tocIndex = -1;

    // 查找TOC元素 - Chirpy主题中TOC可能是一个单独的div#toc或包含在panel中
    children.forEach(function(child, index) {
      // 检查是否是直接的toc元素
      if (child.id === 'toc') {
        tocElement = child;
        tocIndex = index;
      }
      // 检查是否是panel结构中的toc
      else if (child.classList && child.classList.contains('panel')) {
        var tocTitle = child.querySelector('.panel-title, .toc-title, [class*="toc"]');
        if (tocTitle && tocTitle.textContent.indexOf('目录') !== -1) {
          tocElement = child;
          tocIndex = index;
        }
      }
    });

    // 如果找到了TOC且不在最前面，则移到最前面
    if (tocElement && tocIndex > 0) {
      panelWrapper.insertBefore(tocElement, panelWrapper.firstChild);
    }

    // 同时确保CSS order生效
    var tocEl = document.getElementById('toc');
    if (tocEl) {
      tocEl.style.order = '-1';
    }
  }

  // 问题2&3：左侧导航收起/展开功能 + 正文宽度调整
  function initSidebarToggle() {
    var sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    // 检查是否已有收起按钮
    if (document.getElementById('sidebar-toggle')) return;

    // 获取正文区域
    var coreWrapper = document.getElementById('core-wrapper');

    // 创建收起按钮 - 放在main-wrapper中，不在sidebar内
    var toggleBtn = document.createElement('button');
    toggleBtn.id = 'sidebar-toggle';
    toggleBtn.innerHTML = '&#9664;'; // ◀ 左箭头
    toggleBtn.title = '收起/展开侧边栏';
    toggleBtn.setAttribute('aria-label', '收起/展开侧边栏');

    // 将按钮添加到main-wrapper的开头（sidebar之前）
    var mainWrapper = document.getElementById('main-wrapper');
    if (mainWrapper) {
      mainWrapper.insertBefore(toggleBtn, mainWrapper.firstChild);
    } else {
      document.body.appendChild(toggleBtn);
    }

    // 点击事件
    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');
      
      // 更新按钮图标和位置
      if (sidebar.classList.contains('collapsed')) {
        toggleBtn.innerHTML = '&#9654;'; // ▶ 右箭头
        toggleBtn.style.position = 'fixed';
        toggleBtn.style.left = '0';
        toggleBtn.style.top = '50%';
        toggleBtn.style.transform = 'translateY(-50%)';
        toggleBtn.style.zIndex = '1001';
        toggleBtn.style.borderRadius = '0 8px 8px 0';
        
        // 问题3：展开正文区域
        expandMainContent();
      } else {
        toggleBtn.innerHTML = '&#9664;'; // ◀ 左箭头
        toggleBtn.style.position = '';
        toggleBtn.style.left = '';
        toggleBtn.style.top = '';
        toggleBtn.style.transform = '';
        toggleBtn.style.zIndex = '';
        toggleBtn.style.borderRadius = '';
        
        // 问题3：恢复正文区域
        collapseMainContent();
      }

      // 保存状态到localStorage
      localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
    });

    // 恢复之前的状态
    var savedState = localStorage.getItem('sidebar-collapsed');
    if (savedState === 'true') {
      sidebar.classList.add('collapsed');
      toggleBtn.innerHTML = '&#9654;'; // ▶ 右箭头
      toggleBtn.style.position = 'fixed';
      toggleBtn.style.left = '0';
      toggleBtn.style.top = '50%';
      toggleBtn.style.transform = 'translateY(-50%)';
      toggleBtn.style.zIndex = '1001';
      toggleBtn.style.borderRadius = '0 8px 8px 0';
      
      expandMainContent();
    }
  }

  // 问题3：展开正文区域
  function expandMainContent() {
    // 找到主内容区域并扩展
    var coreWrapper = document.getElementById('core-wrapper');
    if (coreWrapper) {
      // 移除原有的col类
      coreWrapper.classList.remove('col-lg-8', 'col-xl-9');
      // 添加更宽的类
      coreWrapper.classList.add('col-lg-10', 'col-xl-11');
      coreWrapper.style.flex = '1 1 auto';
      coreWrapper.style.maxWidth = '100%';
    }

    // 隐藏或缩小右侧面板（当sidebar收起时，给正文更多空间）
    var panelWrapper = document.getElementById('panel-wrapper');
    if (panelWrapper) {
      panelWrapper.classList.add('sidebar-collapsed');
    }
  }

  // 问题3：恢复正文区域
  function collapseMainContent() {
    var coreWrapper = document.getElementById('core-wrapper');
    if (coreWrapper) {
      coreWrapper.classList.add('col-lg-8', 'col-xl-9');
      coreWrapper.classList.remove('col-lg-10', 'col-xl-11');
      coreWrapper.style.flex = '';
      coreWrapper.style.maxWidth = '';
    }

    // 显示右侧面板
    var panelWrapper = document.getElementById('panel-wrapper');
    if (panelWrapper) {
      panelWrapper.classList.remove('sidebar-collapsed');
    }
  }

  // TOC滚动高亮优化
  function initTOCHighlight() {
    var tocLinks = document.querySelectorAll('#toc .toc-nav a, .toc-link');
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
