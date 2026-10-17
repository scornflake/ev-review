from pathlib import Path

old = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,560;1,9..144,450;1,9..144,560&family=IBM+Plex+Mono:wght@400;500&family=Literata:opsz,wght@7..72,400;7..72,560&display=swap"
new = "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Syne:wght@600;700;800&display=swap"
root = Path(__file__).resolve().parents[1]
for path in root.glob("*.html"):
    text = path.read_text(encoding="utf-8")
    if old not in text:
        print("skip", path.name)
        continue
    path.write_text(text.replace(old, new), encoding="utf-8")
    print("updated", path.name)
