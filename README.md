# go2no

Balíček pro nahrání do GitHub repozitáře a spuštění přes GitHub Pages.

## Soubory

- `go2no.html` – hlavní aplikace
- `index.html` – automaticky otevře hlavní aplikaci z kořene GitHub Pages
- `manifest.webmanifest` – manifest pro instalaci na plochu
- `icon-192.png`, `icon-512.png` – ikony aplikace
- `sw.js` – aktuální service worker; po prvním spuštění vyčistí zbytky cache ze starších verzí

## Nahrání na GitHub

1. Nahraj všechny soubory z tohoto balíčku přímo do kořene repozitáře.
2. Při konfliktu potvrď nahrazení souborů stejného názvu.
3. V GitHubu otevři Settings → Pages a ponech zdroj `main` a `/ (root)`.
4. Po publikaci otevři adresu GitHub Pages. `index.html` přesměruje na `go2no.html`.

## Supabase online ukládání

Online synchronizace zůstává beze změny. Po prvním spuštění z GitHub Pages ověř přihlášení heslem. Pro záložní přihlášení e-mailem musí být přesná výsledná adresa `https://.../go2no.html` povolena v Supabase Authentication → URL Configuration → Redirect URLs.
