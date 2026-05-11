// 博客布局改造：左侧导航收起功能 & TOC优化
// v=2026040315

(function() {
  'use strict';

  // 等待DOM加载完成
  document.addEventListener('DOMContentLoaded', function() {
    reorderPanelWrapper(); // 问题1：将TOC移到面板最上方
    initSidebarToggle();   // 问题2&3：修复收起按钮和正文宽度
  });

  // 问题1：将TOC移到panel-wrapper最前面
  function reorderPanelWrapper() {
    const panelWrapper = document.getElementById('panel-wrapper');
    if (!panelWrapper) return;

    const toc = document.getElementById('toc');
    if (!toc) return;

    // 检查TOC是否已在最前面
    if (panelWrapper.firstChild === toc) return;

    // 找到panel-wrapper中的所有子元素，按类别分组
    const children = Array.from(panelWrapper.children);
    let tocElement = null;
    let recentUpdate = null;
    let tags = null;

    children.forEach(function(child) {
      if (child.id === 'toc') {
        tocElement = child;
      } else if (child.id && child.id.includes('related') || 
                 (child.querySelector && child.querySelector('.section-title') && 
                  child.querySelector('.section-title').textContent.includes('最近'))) {
        recentUpdate = child;
      } else if (child.classList.contains('panel') && !tocElement) {
        // 检查是否是TOC面板
        const tocTitle = child.querySelector('.panel-title, .toc-title, .section-title');
        if (tocTitle && tocTitle.textContent.includes('目录')) {
          tocElement = child;
        }
      }
    });

    // 如果找到了TOC，将其移到最前面
    if (tocElement) {
      panelWrapper.insertBefore(tocElement, panelWrapper.firstChild);
    }
  }

  // 问题2&3：左侧导航收起/展开功能 + 正文宽度调整
  function initSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    // 检查是否已有收起按钮
    if (document.getElementById('sidebar-toggle')) return;

    // 获取正文区域
    const mainContent = document.getElementById('core-wrapper') || 
                        document.querySelector('.col-lg-8, .col-12.col-lg-8, #content');

    // 创建收起按钮 - 放在main-wrapper中，不在sidebar内
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'sidebar-toggle';
    toggleBtn.innerHTML = '◀';
    toggleBtn.title = '收起/展开侧边栏';
    toggleBtn.setAttribute('aria-label', '收起/展开侧边栏');

    // 将按钮添加到main-wrapper的开头（sidebar之前）
    const mainWrapper = document.getElementById('main-wrapper');
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
        toggleBtn.innerHTML = '▶';
        toggleBtn.style.position = 'fixed';
        toggleBtn.style.left = '8px';
        toggleBtn.style.top = '50%';
        toggleBtn.style.transform = 'translateY(-50%)';
        toggleBtn.style.zIndex = '1001';
        
        // 问题3：展开正文区域
        expandMainContent();
      } else {
        toggleBtn.innerHTML = '◀';
        toggleBtn.style.position = '';
        toggleBtn.style.left = '';
        toggleBtn.style.top = '';
        toggleBtn.style.transform = '';
        toggleBtn.style.zIndex = '';
        
        // 问题3：恢复正文区域
        collapseMainContent();
      }

      // 保存状态到localStorage
      localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
    });

    // 恢复之前的状态
    const savedState = localStorage.getItem('sidebar-collapsed');
    if (savedState === 'true') {
      sidebar.classList.add('collapsed');
      toggleBtn.innerHTML = '▶';
      toggleBtn.style.position = 'fixed';
      toggleBtn.style.left = '8px';
      toggleBtn.style.top = '50%';
      toggleBtn.style.transform = 'translateY(-50%)';
      toggleBtn.style.zIndex = '1001';
      
      expandMainContent();
    }
  }

  // 问题3：展开正文区域
  function expandMainContent() {
    // 找到主内容区域并扩展
    const coreWrapper = document.getElementById('core-wrapper');
    if (coreWrapper) {
      coreWrapper.classList.remove('col-lg-8', 'col-xl-9');
      coreWrapper.classList.add('col-lg-10', 'col-xl-11');
      coreWrapper.style.flex = '1 1 auto';
      coreWrapper.style.maxWidth = '100%';
    }

    // 隐藏右侧面板（当sidebar收起时，给正文更多空间）
    const panelWrapper = document.getElementById('panel-wrapper');
    if (panelWrapper) {
      panelWrapper.classList.add('sidebar-collapsed');
    }
  }

  // 问题3：恢复正文区域
  function collapseMainContent() {
    const coreWrapper = document.getElementById('core-wrapper');
    if (coreWrapper) {
      coreWrapper.classList.add('col-lg-8', 'col-xl-9');
      coreWrapper.classList.remove('col-lg-10', 'col-xl-11');
      coreWrapper.style.flex = '';
      coreWrapper.style.maxWidth = '';
    }

    // 显示右侧面板
    const panelWrapper = document.getElementById('panel-wrapper');
    if (panelWrapper) {
      panelWrapper.classList.remove('sidebar-collapsed');
    }
  }

  // TOC滚动高亮优化
  function initTOCHighlight() {
    const tocLinks = document.querySelectorAll('#toc .toc-nav a');
    if (tocLinks.length === 0) return;

    const headings = Array.from(document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3'));
    
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
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
