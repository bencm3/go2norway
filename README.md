# go2no v98 – jedna PWA, rodinný náhled přepínaný v Nastavení

Tento balíček obsahuje pouze **jednu** instalovatelnou aplikaci `go2no`. Rodinný náhled není druhá aplikace ani druhá ikona. Je to režim uložený pouze na konkrétním telefonu.

## Nahrání na GitHub

Nahraj všechny soubory z této složky přímo do kořene repozitáře `go2norway` a nahraď jimi stávající soubory. Nezakládej podsložku a nenahrávej ZIP jako soubor.

Základní adresa aplikace:

`https://bencm3.github.io/go2norway/go2no.html`

## Nastavení rodinného telefonu

1. Otevři běžnou adresu aplikace v Chromu a dej **Instalovat aplikaci**.
2. Otevři instalovanou aplikaci → ozubené kolečko **Nastavení** → **Online synchronizace**.
3. Zapni přepínač **Rodinný náhled na tomto zařízení** a potvrď.
4. Aplikace se znovu otevře už jako rodinný náhled.

Rodinný režim na tom telefonu:

- blokuje úpravy, živý deník, akční piktogramy i veškeré exporty;
- automaticky stáhne aktuální online stav při otevření, po návratu do aplikace a každou minutu;
- zobrazuje pouze jemný neaktivní vodotisk `Rodinný náhled · jen k prohlížení`;
- nezabírá místo v rozvržení a **nejde na něj klepnout**.

## Návrat do plné verze

Jediná cesta je v **Nastavení → Online synchronizace**: klepni na zapnutý přepínač rodinného náhledu. Přepínač se sám nevypne, ale přímo pod ním otevře pole pro e-mail a heslo účtu go2no. Po úspěšném ověření se zařízení vrátí do plné verze.

Vodotisk žádný dialog ani heslo nikdy neotevírá.

## Volitelná rychlá aktivace rodinného režimu

Při úplně prvním otevření můžeš použít adresu:

`https://bencm3.github.io/go2norway/go2no.html?view=family`

Ta pouze nastaví stejný lokální rodinný režim. Není nutná; hlavní a doporučený způsob je přepínač v Nastavení.

## Důležité

Přihlášení uvnitř aplikace patří k účtu Supabase, kde leží online stav, nikoli ke GitHubu. GitHub pouze hostuje soubory aplikace.
