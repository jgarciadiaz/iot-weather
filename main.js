var Particle = require('particle-api-js');
var particle = new Particle();

const { username, password } = require('./secrets')

async function main (){
  const login = await particle.login({username, password})
  const { access_token: auth } = login.body
  
  const listDevices = await particle.listDevices({ auth });
  const { body: devices } = listDevices
  
  const { id: deviceId, name } = devices[0]
  console.log({deviceId, name, auth})


  const claimDevice = await particle.claimDevice({ deviceId, auth })
  console.log({claimDevice})

  const callFunction = await particle.callFunction({ deviceId, name, argument: 'D0:HIGH', auth });
  console.log({callFunction}) 
}

main()
