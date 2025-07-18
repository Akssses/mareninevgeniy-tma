const loadComponent = async (name) => {
  const res = await fetch(`../components/${name}/${name}.html`);
  const html = await res.text();
  document.querySelector(`[data-component="${name}"]`).innerHTML = html;

  // Подключение CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `../components/${name}/${name}.css`;
  document.head.appendChild(link);

  // Подключение JS
  const script = document.createElement("script");
  script.src = `../components/${name}/${name}.js`;
  document.body.appendChild(script);

  // После загрузки navbar вызываем подсветку активной кнопки
  if (name === "navbar") {
    highlightActiveNavbarItem();
  }
};

["header", "statistics", "navbar", "notification-bar"].forEach(loadComponent);

// 🔥 Подсветка активной кнопки в navbar
const highlightActiveNavbarItem = () => {
  const currentFile = window.location.pathname.split("/").pop(); // например: index.html

  const links = document.querySelectorAll(".navbar-container .link");
  links.forEach((link) => {
    const hrefFile = link.getAttribute("href").split("/").pop();
    if (hrefFile === currentFile) {
      link.classList.add("link-active");
    } else {
      link.classList.remove("link-active");
    }
  });
};
