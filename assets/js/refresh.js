/* 强制刷新按钮 - Chirpy 主题适配 */
(function() {
  function addRefreshButton() {
    var navbar = document.querySelector('.navbar-nav') || document.querySelector('#navbar .links');
    if (!navbar) return;
    
    // 检查是否已存在
    if (document.querySelector('.refresh-btn')) return;
    
    var btn = document.createElement('li');
    btn.className = 'refresh-btn';
    btn.innerHTML = '<a href="javascript:void(0)" title="刷新页面"><i class="fas fa-sync-alt"></i></a>';
    btn.style.cssText = 'margin-left:auto;';
    btn.onclick = function() {
      location.reload();
    };
    navbar.appendChild(btn);
  }
  
  // 等待 DOM 加载完成后添加
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(addRefreshButton, 800);
    });
  } else {
    setTimeout(addRefreshButton, 800);
  }
})();

/* 主题切换按钮 - 插入到 topbar 右侧，sidebar 收起后仍可见 */
(function() {
  function addThemeBtn() {
    if (document.getElementById('topbar-theme-btn')) return;

    var topbar = document.getElementById('topbar');
    if (!topbar) return;

    // 读取当前主题
    function isDark() {
      return document.documentElement.getAttribute('data-mode') === 'dark'
        || document.documentElement.classList.contains('dark')
        || document.body.classList.contains('dark');
    }

    // 创建按钮
    var btn = document.createElement('button');
    btn.id = 'topbar-theme-btn';
    btn.title = '切换主题';

    function updateIcon() {
      btn.innerHTML = isDark()
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    }
    updateIcon();

    // 点击时触发 Chirpy 原生 #mode-toggle 的 click 事件
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var original = document.getElementById('mode-toggle');
      if (original) {
        original.click();
      } else {
        // 降级：手动切换
        var html = document.documentElement;
        var cur = html.getAttribute('data-mode');
        html.setAttribute('data-mode', cur === 'dark' ? 'light' : 'dark');
      }
      setTimeout(updateIcon, 100);
    });

    // 插入到 topbar 最右侧
    topbar.appendChild(btn);

    // 监听 data-mode 属性变化，同步更新图标
    var observer = new MutationObserver(updateIcon);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode', 'class'] });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(addThemeBtn, 300);
    });
  } else {
    setTimeout(addThemeBtn, 300);
  }
})();
