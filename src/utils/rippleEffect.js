export function createRipple(e) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();

  const ripple = document.createElement('span');
  ripple.className = 'ripple-effect';

  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

export function attachRipple(selector = '.btn') {
  document.querySelectorAll(selector).forEach((btn) => {
    btn.removeEventListener('click', createRipple);
    btn.addEventListener('click', createRipple);
  });
}
