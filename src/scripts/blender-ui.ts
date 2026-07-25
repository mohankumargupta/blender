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

  // Mode Select (Dropdown change)
  const modeSelect = document.getElementById('modeSelect') as HTMLSelectElement;
  if (modeSelect) {
    modeSelect.addEventListener('change', () => {
      toast('Mode: ' + modeSelect.value);
    });
  }

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // Check if the user is typing in an input field (like the properties panel)
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return; 
    }

    // TAB - Toggle Edit/Object Mode
    if (e.key === 'Tab') {
      e.preventDefault(); // Prevents the browser from just selecting the next button
      
      if (modeSelect) {
        if (modeSelect.value === 'Object Mode') {
          modeSelect.value = 'Edit Mode';
        } else {
          modeSelect.value = 'Object Mode';
        }
        
        // Trigger the visual toast
        toast('Mode: ' + modeSelect.value);
      }
    }
  });  

});