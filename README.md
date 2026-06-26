# go2no v86 — obrázky v assets a offline cache

## Co se změnilo

- `go2no.html` už neobsahuje 214 vložených obrázků v base64. Statické mapy, fotografie etap, ikony a podklady jsou v `assets/v86/`.
- Service worker po prvním otevření stáhne celý statický obsah do cache telefonu. Po úspěšné instalaci lze aplikaci používat offline ve stejném rozsahu jako načtený statický obsah.
- Sedm problematických fotografií TOP60 bylo nahrazeno uživatelskými snímky: Sverd i fjell, Vinnufossen, Sala Silvergruva, Falu Gruva, LKAB Kiruna, Punkaharju a Saimaa.
- Ostatních 53 fotografií TOP60 zatím zůstává na jejich současných vzdálených zdrojích. Jejich lokální archivace vyžaduje dodání nebo stažení konkrétních licenčně ověřených souborů; aplikace pro ně zachovává dosavadní funkčnost.
- Export HTML zůstává samostatný: při exportu se použité mapy a lokální grafické podklady automaticky vloží zpět do vytvářené zálohy.

## Co nahrát

Nahraj **celý obsah tohoto adresáře** do kořene repozitáře, včetně podsložky `assets`. Nejde o ZIP k rozbalení na GitHubu: obsah složky je nutné nahrát tak, aby v repozitáři vznikla cesta `assets/v86/...`.

Kořen repozitáře po nahrání obsahuje zejména:

- `go2no.html`
- `index.html`
- `manifest.webmanifest`
- `icon-192.png`, `icon-512.png`
- `sw.js`
- `assets/v86/...`

## Po nasazení

1. Otevři GitHub Pages aplikaci online.
2. Nech ji jednou plně doběhnout; service worker při tom uloží statický obsah do cache.
3. Pro kontrolu pak aplikaci zavři a otevři znovu. Mapy a vložené fotografie etap musí zůstat k dispozici i bez signálu.

Nastavení GitHub Pages, Supabase, IndexedDB, deníku a přihlášení se nemění.
