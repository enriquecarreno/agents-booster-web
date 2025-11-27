// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// Configuración para Webflow Apps (requiere Cloudflare adapter)
export default defineConfig({
  site: 'https://agentsbooster.com',
  integrations: [react()],
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  vite: {
    ssr: {
      external: ['node:buffer']
    }
  }
});
