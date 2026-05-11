// 博客布局改造：左侧导航收起功能 & TOC优化
// v=2026040311

(function() {
  'use strict';

  // 等待DOM加载完成
  document.addEventListener('DOMContentLoaded', function() {
    initSidebarToggle();
  });

  // 左侧导航收起/展开功能
  function initSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    // 检查是否已有收起按钮
    if (document.getElementById('sidebar-toggle')) return;

    // 创建收起按钮
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'sidebar-toggle';
    toggleBtn.innerHTML = '◀';
    toggleBtn.title = '收起/展开侧边栏';
    toggleBtn.setAttribute('aria-label', '收起/展开侧边栏');

    // 将按钮添加到sidebar
    sidebar.appendChild(toggleBtn);

    // 点击事件
    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');
      
      // 更新按钮图标
      if (sidebar.classList.contains('collapsed')) {
        toggleBtn.innerHTML = '▶';
        toggleBtn.style.position = 'fixed';
        toggleBtn.style.left = '10px';
        toggleBtn.style.top = 'calc(var(--navbar-height, 3.125rem) + 4rem)';
        toggleBtn.style.zIndex = '1001';
        toggleBtn.style.margin = '0';
      } else {
        toggleBtn.innerHTML = '◀';
        toggleBtn.style.position = '';
        toggleBtn.style.left = '';
        toggleBtn.style.top = '';
        toggleBtn.style.zIndex = '';
        toggleBtn.style.margin = '';
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
      toggleBtn.style.left = '10px';
      toggleBtn.style.top = 'calc(var(--navbar-height, 3.125rem) + 4rem)';
      toggleBtn.style.zIndex = '1001';
      toggleBtn.style.margin = '0';
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
