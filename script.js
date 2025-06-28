// ===== Initialize AOS =====
AOS.init();

// ===== Theme Toggle =====
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    if (theme === 'light') {
      document.body.classList.remove('bg-dark');
      document.body.classList.add('bg-light', 'text-dark');
    } else {
      document.body.classList.add('bg-dark');
      document.body.classList.remove('bg-light', 'text-dark');
    }
  });
});

// ===== Text Size Toggle =====
document.querySelectorAll('.text-size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const size = btn.dataset.size;
    let fontSize;
    switch(size) {
      case 'small': fontSize = '14px'; break;
      case 'medium': fontSize = '16px'; break;
      case 'large': fontSize = '18px'; break;
    }
    document.body.style.fontSize = fontSize;
  });
});

// ===== Back to Top Button =====
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Bubble Background Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const bubbleContainers = document.querySelectorAll(".bubbles");
  bubbleContainers.forEach(container => {
    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = Math.random() * 100 + "%";
      bubble.style.animationDuration = 3 + Math.random() * 5 + "s";
      container.appendChild(bubble);
    }
  });
});
