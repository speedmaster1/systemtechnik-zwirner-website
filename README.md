# Systemtechnik Zwirner – Website

Premium-Firmenwebsite auf Basis von Next.js App Router, TypeScript, Tailwind CSS und Motion.

## Entwicklung

```bash
npm run dev
```

## Production Build

```bash
npm run typecheck
npm run lint
npm run build
```

## Struktur

- `app/` – Seiten, SEO-Metadaten, Sitemap und Robots
- `components/` – modulare Website-Abschnitte und UI-Komponenten
- `app/config.ts` – zentrale Kontakt-, Leistungs- und Projektdaten
- `content/site.json` – sämtliche redaktionell änderbaren Website-Inhalte
- `.pages.yml` – Konfiguration für die kostenlose Pages-CMS-Oberfläche
- `public/uploads/` – über das CMS hochgeladene Bilder
- `public/logo.png` – unverändertes Original-Firmenlogo (`puplic.png`)

## Inhalte ohne Programmierung ändern

Die Website ist für [Pages CMS](https://pagescms.org/) vorbereitet. Nach dem Hochladen des Projekts in ein eigenes GitHub-Repository:

1. Bei `app.pagescms.org` mit GitHub anmelden.
2. Die Pages-CMS-GitHub-App ausschließlich für dieses Repository freigeben.
3. Das Repository öffnen und Texte, Leistungen, Projekte, Kontaktdaten oder Bilder bearbeiten.
4. Speichern. Cloudflare Pages baut und veröffentlicht die Änderung automatisch.

Alle Inhalte bleiben im eigenen Repository inklusive vollständiger Versionshistorie. Das CMS ist austauschbar; die Website funktioniert auch ohne den CMS-Anbieter und kann von jedem Entwickler direkt bearbeitet werden.

## Vor Veröffentlichung

- Kontaktangaben in `app/config.ts` ergänzen.
- Platzhalter in `app/impressum/page.tsx` ersetzen und rechtlich prüfen.
- `app/datenschutz/page.tsx` an Hosting, Formular und tatsächlich genutzte Dienste anpassen und rechtlich prüfen.
- Kontaktformular serverseitig anbinden; derzeit werden keine Daten übertragen.

Die Website lädt keine Tracker, Werbung oder externen Google Fonts und benötigt in diesem Stand keinen Cookie-Banner.
