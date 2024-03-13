import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'app1',
  exposes: {
    './Routes': 'apps/app1/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
