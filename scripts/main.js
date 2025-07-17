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
};

["header", "statistics", "navbar", "notification-bar"].forEach(loadComponent);
