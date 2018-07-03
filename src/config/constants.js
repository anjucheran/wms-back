const devConfig = {
  DB: 'wms-dev',
  JWT_SECRET: 'thisisasecret',
};

const testConfig = {
  DB: 'wms-test',
};

const prodConfig = {
  DB: 'wms-prod',
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
