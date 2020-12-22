const superagent = require('superagent');
const request = superagent.agent();

interface AuthenticateOptions {
  username: string
  password: string
}

function authenticate(options: AuthenticateOptions) {

}

async function instructor() {
  const res = await request.get('https://api.onepeloton.com/api/instructor');
  return res;
}

console.log('poopy');