// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: isGitHubPages ? 'https://thomasrehault-ux.github.io' : 'https://neuroasis.fr',
  base: isGitHubPages ? '/site-neuroasis-neurofeedback' : undefined,
  trailingSlash: 'always',
  compressHTML: true,
});
