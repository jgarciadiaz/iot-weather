const convict = require('convict');

// Define a schema
const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  api: {
    url: {
      doc: 'API URL',
      format: String,
      default: 'http://127.0.0.1:8000',
      env: 'API_URL',
    }
  },
  token: {
    default: '',
    env: 'IOT_TOKEN',
  },
  deviceId: {
    default: '',
    env: 'IOT_DEVICEID',
  },
});

module.exports = config;
