const Topups = require('./topups');
const Merchant = require('./merchant');

class Celcoin {

  constructor(clientId, clientSecret, sandbox = false){
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.sandbox = sandbox;

  }

  get topup() {
    return new Topups(this.clientId, this.clientSecret, this.sandbox);
  }

  get merchant() {
    return new Merchant(this.clientId, this.clientSecret, this.sandbox);
  }
}

module.exports = Celcoin;