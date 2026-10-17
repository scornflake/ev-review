from pathlib import Path

slugs = {
    "model3": "model-3",
    "mg4": "mg4-xpower",
    "seal": "seal-performance",
    "ev6": "ev6-gt",
    "ioniq6": "ioniq-6",
    "polestar": "polestar-2",
    "i4": "i4-m50",
    "mache": "mach-e-gt",
    "ioniq5": "ioniq-5",
    "n": "ioniq-5-n",
}

tpl = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Second owner</title>
  <link rel="icon" href="assets/mark.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/site.css">
</head>
<body data-car="{id}">
  <main id="app"></main>
  <script src="js/catalog.js"></script>
  <script src="js/car.js"></script>
</body>
</html>
"""

root = Path(__file__).resolve().parents[1]
for car_id, slug in slugs.items():
    path = root / f"{slug}.html"
    path.write_text(tpl.format(id=car_id), encoding="utf-8")
    print(path.name)
