# Saphir Invest SA – Site web

Site vitrine **Next.js 15** (App Router) en **export statique** pour Saphir Invest SA, gestion de patrimoine.

## Démarrage en local

```bash
cd site
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build et export statique

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier `out/`. Ce dossier peut être déployé sur n’importe quel hébergeur statique (Netlify, Vercel, GitHub Pages, hébergement classique, etc.).

## Structure

- **`app/`** – Pages et layout (App Router)
- **`components/`** – Header, Footer
- **`lib/site.ts`** – Données du site (coordonnées, navigation, footer)

## Pages

- `/` – Accueil (hero, approche, équipe, contact)
- `/valeurs/` – Approche et valeurs, charte, banques dépositaires
- `/equipe/` – Équipe, distinctions, affiliations
- `/nous-contacter/` – Contact, carte, coordonnées
- `/mentions-legales/` – Mentions légales (FR)
- `/impressum/` – Impressum (EN)

## Technologies

- **Next.js 15** (App Router, export statique)
- **TypeScript**
- **Tailwind CSS**
- **Montserrat** (Google Fonts)

Les images et la carte utilisent les URLs du site d’origine (saphir-invest.ch). Pour un déploiement autonome, vous pouvez les remplacer par des assets locaux dans `public/`.

## En cas d’erreur `__webpack_modules__[moduleId] is not a function`

1. **Toujours lancer le projet depuis le dossier `site/`** (évite les conflits de lockfile en racine) :
   ```bash
   cd site
   npm run dev
   ```

2. **Nettoyer le cache puis relancer** :
   ```bash
   cd site
   npm run clean
   npm run dev
   ```

3. **Utiliser Turbopack au lieu de Webpack** (souvent plus stable en dev) :
   ```bash
   npm run dev:turbo
   ```

4. **Réinstaller les dépendances** si le problème continue :
   ```bash
   cd site
   Remove-Item -Recurse -Force .next, node_modules -ErrorAction SilentlyContinue
   npm install
   npm run dev
   ```
