// Global interactions for Blender UI (Toasts, Tool active states)

let toastTimer: number;
export function toast(msg: string) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.remove('show'), 1500);
}

document.addEventListener('DOMContentLoaded', () => {
  // Tools Activity
  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const tool = (btn as HTMLElement).dataset.tool;
      const stat = document.getElementById('statTool');
      if (stat && tool) stat.textContent = tool;
      toast('Tool: ' + tool);
    });
  });

  // Top Menu
  document.querySelectorAll('.topbar-menu button').forEach(btn => {
    btn.addEventListener('click', () => {
      toast((btn as HTMLElement).dataset.menu || 'Menu');
    });
  });
});