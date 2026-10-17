import json
import os
import urllib.parse
import urllib.request

OUT = os.path.join(os.path.dirname(__file__), "..", "assets")
os.makedirs(OUT, exist_ok=True)

FILES = {
    "model3": "File:2024 Tesla Model 3 Highland Performance AWD.jpg",
    "mg4": "File:MG4 EV XPower Automesse Ludwigsburg 2023 1X7A0027.jpg",
    "seal": "File:BYD Seal IAA 2023 1X7A0371.jpg",
    "ev6": "File:Kia EV6 GT IMG 8171.jpg",
    "ioniq6": "File:Hyundai Ioniq 6 1X7A7083.jpg",
    "polestar": "File:Polestar 2 1X7A0419.jpg",
    "i4": "File:2022 BMW i4 M50 (35166).jpg",
    "mache": "File:2022 Ford Mustang Mach-E GT electric SUV.jpg",
    "ioniq5": "File:Hyundai Ioniq 5 IAA 2021 1X7A0189.jpg",
    "n": "File:Hyundai Ioniq 5 N IMG 0053.jpg",
}

UA = "ev-review-local/1.0 (personal research site)"


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as response:
        return response.read()


credits = {}
for key, title in FILES.items():
    api = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(
        {
            "action": "query",
            "format": "json",
            "titles": title,
            "prop": "imageinfo",
            "iiprop": "url|extmetadata",
            "iiurlwidth": "1600",
        }
    )
    data = json.loads(get(api))
    page = next(iter(data["query"]["pages"].values()))
    info = page["imageinfo"][0]
    meta = info.get("extmetadata") or {}

    def val(name):
        return (meta.get(name) or {}).get("value", "")

    thumb = info.get("thumburl") or info["url"]
    blob = get(thumb)
    dest = os.path.join(OUT, key + ".jpg")
    with open(dest, "wb") as handle:
        handle.write(blob)
    credits[key] = {
        "title": title.replace("File:", ""),
        "license": val("LicenseShortName"),
        "artist": val("Artist"),
        "page": "https://commons.wikimedia.org/wiki/" + urllib.parse.quote(title.replace(" ", "_")),
        "bytes": len(blob),
    }
    print(key, len(blob), val("LicenseShortName"))

with open(os.path.join(OUT, "credits.json"), "w", encoding="utf-8") as handle:
    json.dump(credits, handle, indent=2)
