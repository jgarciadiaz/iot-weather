const Particle = require('particle-api-js');
const particle = new Particle();
const { username, password } = require('../secrets')


async function main (){
  const login = await particle.login({ username, password })
  const { access_token: auth } = login.body
  
  const listDevices = await particle.listDevices({ auth });
  const { body: devices } = listDevices
  
  const { id: deviceId, name } = devices[0]
  console.log({ deviceId, name, auth })
}

main()
