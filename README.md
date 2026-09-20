# NeurOasis · Neurofeedback à Nantes et Clisson

Site vitrine construit avec Astro. La production est prévue sur Cloudflare Pages à
l'adresse `https://neuroasis.fr`.

## Déploiement

Cloudflare Pages est relié au dépôt GitHub et publie automatiquement la branche `main`.

- Framework preset : **Astro**
- Build command : `npm run build`
- Build output directory : `dist`
- Production branch : `main`

Pendant la transition vers le domaine public, l'ancien workflow GitHub Pages reste actif.
Il utilise automatiquement le sous-chemin du dépôt afin que l'adresse de prévisualisation
continue de fonctionner jusqu'au basculement final.

## Développement local

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Vérifications après déploiement

- `https://neuroasis.fr/`
- `https://neuroasis.fr/robots.txt`
- `https://neuroasis.fr/sitemap.xml`
- `https://neuroasis.fr/une-url-inexistante`
