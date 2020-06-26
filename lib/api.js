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

  async post(url, body) {

    try {
      return await this.instance.post(url, body);
    } catch (err) {
      return err;
    }
  }

  async get(url, params) {
    try{
      return await this.instance.get(url, { params });
    }catch(err){
      return err;
    }
  }

  async put(url, params){
    try{
      return await this.instance.put(url, params);
    }catch(err){
      return err;
    }
  }

  async delete(url, params){
    try{
      return await this.instance.delete(url, params);
    }catch(err){
      return err;
    }
  }
}

module.exports = Api;