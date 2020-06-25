const Topups = require('./topups');

class Celcoin {

  constructor(clientId, clientSecret, sandbox = false){
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.sandbox = sandbox;

  }

  get topup() {
    return new Topups(this.clientId, this.clientSecret, this.sandbox);
  }

}

module.exports = Celcoin;