import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'app2',
  exposes: {
    './Routes': 'apps/app2/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
