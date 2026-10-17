const car = byId(document.body.dataset.car);
if (!car) {
  document.querySelector("#app").textContent = "This car is not in the shortlist.";
} else {
  const cmp = compared(car);
  const weekTone = cmp.weekDelta <= 0 ? "save" : "cost";
  const threeTone = cmp.threeDelta <= 0 ? "save" : "cost";
  const weekWord = cmp.weekDelta <= 0 ? "less than the WRX" : "more than the WRX";
  const threeWord = cmp.threeDelta <= 0 ? "less than the WRX" : "more than the WRX";
  const sport = sportOf(car);
  const rel = reliabilityOf(car);
  const fit = fitOf(car);

  document.title = `${car.name} — Second owner`;

  const links = car.links.map((link) =>
    `<li><span class="kind">${link.kind}</span><a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a></li>`
  ).join("");

  document.querySelector("#app").innerHTML = `
    <header class="wrap site-nav">
      <a href="index.html">Second owner</a>
      <a href="index.html#list">All ten</a>
    </header>
    <figure class="hero">
      <img src="assets/${car.id}.jpg" alt="${car.name} ${car.variant}">
      <figcaption>Photo: <a href="${car.photoPage}" target="_blank" rel="noopener noreferrer">${car.photo}</a>, CC BY-SA 4.0</figcaption>
    </figure>
    <div class="wrap titleblock">
      <div>
        <p class="kicker">${car.variant} · ${car.year}</p>
        <h1>${car.name}</h1>
        <p class="variant">${car.verdict}</p>
      </div>
      <p class="ask">Asking, 17 Oct 2026<strong>${car.priceLabel}</strong></p>
    </div>
    <section class="compare" aria-label="Running cost compared to the WRX">
      <div class="wrap compare-inner">
        <article>
          <h2>Weekly running cost compared to WRX</h2>
          <div class="trio">
            <div><b>${nzd(cmp.ev.weekly)}</b><span>this car</span></div>
            <div><b>${nzd(cmp.wrx.weekly)}</b><span>WRX</span></div>
            <div><b class="${weekTone}">${nzd(cmp.weekDelta)}</b><span>${weekWord}</span></div>
          </div>
        </article>
        <article>
          <h2>Three year running cost compared to WRX</h2>
          <div class="trio">
            <div><b>${nzd(cmp.ev.three)}</b><span>this car</span></div>
            <div><b>${nzd(cmp.wrx.three)}</b><span>WRX</span></div>
            <div><b class="${threeTone}">${nzd(cmp.threeDelta)}</b><span>${threeWord}</span></div>
          </div>
        </article>
      </div>
    </section>
    <div class="wrap split">
      <section>
        <h2>Overview</h2>
        <p>${car.overview}</p>
        <p class="fine">12,000 km a year for three years. Home charging at 23.64 c/kWh on the Mercury anytime rate. The WRX is BP 98 at $3.959 a litre and 10 L/100 km, plus a $1,051 set of Toyo CR1s lasting an assumed 30,000 km. Road user charges are $7.60 per 100 km on the electric car and already inside the pump price on the WRX. Insurance, depreciation and fast charging are outside both totals.</p>
      </section>
      <aside>
        <ul class="scores">
          <li><b>${fit.toFixed(1)}</b><span>fit / 10</span></li>
          <li><b>${rel.toFixed(0)}</b><span>reliability / 10</span></li>
          <li><b>${sport.toFixed(1)}</b><span>sportiness / 10</span></li>
        </ul>
        <table class="ledger">
          <thead><tr><th></th><th>This car</th><th>WRX</th></tr></thead>
          <tbody>
            <tr><td>Energy</td><td>${nzd(cmp.ev.fuel)}</td><td>${nzd(cmp.wrx.fuel)}</td></tr>
            <tr><td>Road user charges</td><td>${nzd(cmp.ev.ruc)}</td><td>${nzd(cmp.wrx.ruc)}</td></tr>
            <tr><td>Tyres</td><td>${nzd(cmp.ev.tyres)}</td><td>${nzd(cmp.wrx.tyres)}</td></tr>
            <tr><td>Three years</td><td>${nzd(cmp.ev.three)}</td><td>${nzd(cmp.wrx.three)}</td></tr>
          </tbody>
        </table>
      </aside>
    </div>
    <div class="wrap verdict">
      <section class="good">
        <h2>Good</h2>
        <ul>${car.good.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="bad">
        <h2>Bad</h2>
        <ul>${car.bad.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    </div>
    <section class="wrap refs">
      <h2>Reviews and references</h2>
      <ul>${links}</ul>
    </section>
  `;
}
