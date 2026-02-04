# Saphir Invest SA – Site web

Site vitrine **Next.js 15** (App Router) en **export statique** pour Saphir Invest SA, société de gestion de patrimoine basée à Lausanne.

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

Les fichiers statiques sont générés dans le dossier `out/`. Ce dossier peut être déployé sur n'importe quel hébergeur statique (Netlify, Vercel, GitHub Pages, hébergement classique, etc.).

## Structure du projet

```
site/
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Accueil FR
│   ├── en/page.tsx        # Accueil EN
│   ├── valeurs/           # Approche et valeurs
│   ├── equipe/            # Équipe
│   ├── nous-contacter/    # Contact
│   ├── mentions-legales/  # Mentions légales (FR)
│   ├── impressum/         # Impressum (EN)
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── Header.tsx         # Navigation + menu
│   ├── Footer.tsx         # Pied de page
│   ├── CookieBanner.tsx   # Bannière cookies
│   ├── Typewriter.tsx     # Animations de texte
│   └── AnimatedQuote.tsx  # Citations animées
├── lib/
│   └── site.ts            # Configuration du site
└── public/                # Assets statiques
    ├── Tableau/           # Images de fond (peintures)
    ├── Portrait/          # Photos de l'équipe
    ├── logo/              # Logos Saphir Invest
    ├── Certifications/    # Logos certifications
    ├── Banque depoositaire/ # Logos banques
    └── icon/              # Favicon et icônes
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil français |
| `/en/` | Accueil anglais |
| `/valeurs/` | Approche, valeurs, charte, banques dépositaires |
| `/equipe/` | Équipe, distinctions, affiliations |
| `/nous-contacter/` | Contact avec carte |
| `/mentions-legales/` | Mentions légales (FR) |
| `/impressum/` | Impressum (EN) |

## Technologies

- **Next.js 15** (App Router, export statique)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 3.4**

## Polices

- **Montserrat** – Texte courant
- **Raleway** – Titres
- **Syne** – Citations

## Scripts disponibles

```bash
npm run dev        # Développement (Webpack)
npm run dev:turbo  # Développement (Turbopack, plus rapide)
npm run build      # Build production
npm run start      # Serveur de production
npm run lint       # Vérification ESLint
npm run clean      # Nettoyer le cache .next
```

## Dépannage

### Erreur `__webpack_modules__[moduleId] is not a function`

1. **Toujours lancer depuis le dossier `site/`** :
   ```bash
   cd site
   npm run dev
   ```

2. **Nettoyer le cache** :
   ```bash
   npm run clean
   npm run dev
   ```

3. **Utiliser Turbopack** :
   ```bash
   npm run dev:turbo
   ```

4. **Réinstaller les dépendances** :
   ```bash
   Remove-Item -Recurse -Force .next, node_modules -ErrorAction SilentlyContinue
   npm install
   npm run dev
   ```
