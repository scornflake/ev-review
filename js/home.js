const SORTS = {
  fit: { label: "Fit", value: (car) => -fitOf(car) },
  reliability: { label: "Reliability", value: (car) => -reliabilityOf(car) },
  sport: { label: "Sportiness", value: (car) => -sportOf(car) },
  price: { label: "Asking price", value: (car) => car.priceSort },
  week: { label: "Weekly saving", value: (car) => compared(car).weekDelta },
};

function money(n) {
  return nzd(n);
}

function renderHome(sortKey) {
  const list = document.querySelector("#list");
  const wrx = wrxRunning();
  const ranked = [...CARS].sort((a, b) => SORTS[sortKey].value(a) - SORTS[sortKey].value(b) || a.name.localeCompare(b.name));
  list.innerHTML = ranked.map((car, i) => {
    const cmp = compared(car);
    const tone = cmp.weekDelta <= 0 ? "save" : "cost";
    const word = cmp.weekDelta <= 0 ? "less / week" : "more / week";
    return `<a class="row" href="${car.slug}.html">
      <span class="idx">${String(i + 1).padStart(2, "0")}</span>
      <span class="thumb"><img src="assets/${car.id}.jpg" alt="${car.name} ${car.variant}"></span>
      <span>
        <h2>${car.name}</h2>
        <p class="variant">${car.variant} · ${car.year}</p>
        <p class="meta"><span>${car.priceLabel}</span><span>${car.zero}</span><span>${car.boot}</span></p>
      </span>
      <span class="delta ${tone}"><b>${money(cmp.weekDelta)}</b><span>${word}</span></span>
    </a>`;
  }).join("");

  document.querySelector("#wrx-week").textContent = money(wrx.weekly);
  document.querySelector("#wrx-three").textContent = money(wrx.three);
}

document.querySelectorAll(".sortbar button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".sortbar button").forEach((other) => {
      other.setAttribute("aria-pressed", other === button ? "true" : "false");
    });
    renderHome(button.dataset.sort);
  });
});

renderHome("fit");
