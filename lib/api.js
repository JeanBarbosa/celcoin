const axios = require('axios');

class Api {
  constructor(clientId, clientSecret, sandbox = false){

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.sandbox = sandbox;

    const token = `Bearer ${this.getToken(this.clientId, this.clientSecret)}`;

     this.instance = axios.create({
      baseURL: this.getBaseUrl(),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
    
  }

  getToken(clientId, clientSecret){
    const credentials = `${clientId}:${clientSecret}`;
    let enconde = new Buffer.from(credentials, "utf8");

    return enconde.toString('base64');
  }

  getBaseUrl(){
    return "https://sandbox-apicorp.celcoin.com.br/v4";
  }

  async post(uri, body) {

    try {
      const response = await this.instance.post(uri, body);
      return response;
    } catch (err) {
      return err;
    }
  }

  async get(uri, params) {
    try{
      const response = await this.instance.get(uri, {params});
      return response;
    }catch(err){
      return err;
    }
  }

}

module.exports = Api;