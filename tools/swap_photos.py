import json
import os
import urllib.parse
import urllib.request

OUT = os.path.join(os.path.dirname(__file__), "..", "assets")
UA = "ev-review-local/1.0 (personal research site)"


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as response:
        return response.read()


def search(query):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(
        {
            "action": "query",
            "format": "json",
            "generator": "search",
            "gsrsearch": query,
            "gsrnamespace": "6",
            "gsrlimit": "8",
            "prop": "imageinfo",
            "iiprop": "url|mime|size",
        }
    )
    data = json.loads(get(url))
    pages = (data.get("query") or {}).get("pages") or {}
    for page in pages.values():
        print(page.get("title"))


print("--- N ---")
search('intitle:"Ioniq 5 N"')
