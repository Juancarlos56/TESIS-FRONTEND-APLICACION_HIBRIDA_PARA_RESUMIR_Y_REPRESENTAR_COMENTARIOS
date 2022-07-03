import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'tesis-frontend-aplicacion-hibrida-para-resumir-y-representar-comentarios',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '973370360772-vo9uf5gemmvbakbpduvljfkfupevtf4m.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
