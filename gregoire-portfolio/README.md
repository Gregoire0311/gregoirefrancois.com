# Portfolio Grégoire FRANÇOIS

Site vitrine one-page moderne pour Grégoire FRANÇOIS, Freelance Web & Application Developer.

## 🚀 Technologies

- **Next.js 14** avec App Router
- **TypeScript** strict
- **Tailwind CSS** pour le styling
- **shadcn/ui** pour les composants
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start
```

## 🛠️ Configuration

### Variables d'environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### Personnalisation

1. **Informations personnelles** : Modifiez `src/content/site.ts`
2. **Projets** : Modifiez `src/content/projects.ts`
3. **Images** : Remplacez les images dans `public/projects/`
4. **Logo** : Remplacez `public/logo.svg`

### Placeholders à remplacer

Dans `src/content/site.ts` :
- `email: "gregoire@example.com"` → Votre vraie adresse email
- `github: "https://github.com/..."` → Votre profil GitHub
- `linkedin: "https://www.linkedin.com/in/..."` → Votre profil LinkedIn
- `url: "https://gregoirefrancois.dev"` → Votre domaine

## 📁 Structure du projet

```
src/
├── app/                    # App Router Next.js 14
│   ├── layout.tsx         # Layout principal avec SEO
│   ├── page.tsx           # Page d'accueil
│   ├── about/             # Page À propos
│   ├── contact/           # Page Contact
│   ├── api/               # API routes
│   ├── sitemap.ts         # Sitemap automatique
│   └── robots.ts          # Robots.txt
├── components/
│   ├── ui/                # Composants shadcn/ui
│   └── sections/          # Sections du site
├── content/               # Contenu du site
│   ├── site.ts           # Configuration générale
│   └── projects.ts       # Projets
└── lib/
    └── seo.ts            # Configuration SEO
```

## 🎨 Fonctionnalités

### ✅ Implémentées

- [x] Design responsive mobile-first
- [x] Mode sombre/clair automatique
- [x] Navigation fluide avec ancres
- [x] SEO optimisé (meta tags, OpenGraph, JSON-LD)
- [x] Sitemap.xml et robots.txt automatiques
- [x] Formulaire de contact (mailto:)
- [x] Composants réutilisables
- [x] TypeScript strict
- [x] Accessibilité (ARIA)
- [x] Images optimisées (next/image)

### 🔄 À venir

- [ ] Système de contact backend
- [ ] Animations Framer Motion
- [ ] Blog/Articles
- [ ] Témoignages clients
- [ ] Analytics intégrés

## 🚀 Déploiement sur Vercel

1. **Connecter le repository** :
   ```bash
   # Push vers GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Déployer sur Vercel** :
   - Aller sur [vercel.com](https://vercel.com)
   - Connecter votre compte GitHub
   - Importer le repository
   - Configurer les variables d'environnement
   - Déployer !

3. **Configuration Vercel** :
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

## 📊 Performance

Le site est optimisé pour :
- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** : Optimisé
- **SEO** : Meta tags complets, Schema.org JSON-LD
- **Accessibilité** : ARIA labels, navigation clavier

## 🎯 Sections du site

1. **Header** : Navigation fixe avec logo et menu
2. **Hero** : Titre principal avec CTA et quick facts
3. **Projects** : Grille de 3 projets avec détails en Sheet
4. **Skills** : Compétences organisées par domaine
5. **Services** : 4 services avec livrables
6. **Process** : 4 étapes du processus de travail
7. **About** : Présentation personnelle
8. **Contact** : Formulaire + contact direct
9. **Footer** : Liens et mentions légales

## 🔧 Développement

### Scripts disponibles

```bash
npm run dev          # Développement
npm run build        # Build production
npm run start        # Serveur production
npm run lint         # ESLint
npm run type-check   # Vérification TypeScript
```

### Ajout de composants shadcn/ui

```bash
npx shadcn@latest add [component-name]
```

### Structure des composants

Chaque section est un composant réutilisable dans `src/components/sections/` :
- Props typées avec TypeScript
- Styling avec Tailwind CSS
- Accessibilité intégrée
- Responsive design

## 📝 Notes importantes

- **Placeholders** : Certains projets sont marqués "Training/Demo"
- **Revenus** : Mentionné comme phase de démarrage (0€)
- **Honnêteté** : Portfolio transparent sur le statut freelance
- **Évolutif** : Structure prête pour ajout de fonctionnalités

## 🤝 Support

Pour toute question ou personnalisation :
- Email : gregoire@example.com (à remplacer)
- GitHub : [Votre profil] (à remplacer)
- LinkedIn : [Votre profil] (à remplacer)

---

**Développé avec ❤️ par Grégoire FRANÇOIS**