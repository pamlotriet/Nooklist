import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pamelalotriet.nooklist',
  appName: 'nooklist',
  webDir: 'dist/nooklist/browser',
  server: {
    allowNavigation: ['*'],
    cleartext: true,
  },
};

export default config;
