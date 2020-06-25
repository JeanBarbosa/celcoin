const Api = require('./api');

class Topups {

  constructor(clientId, clientSecret, sandbox = false){
    this._instance = new Api(clientId, clientSecret);
  }

  /**
  * Get a list of all providers
  */
  async getProviders(ddd) {

    const url = `transactions/topups/providers`;
    const params = {stateCode: ddd};

    const {data} = await this._instance.get(url, params);

    if(data.status === 0){
      return data.providers;
    }

    return [];
  }

  /**
   * Get values of provider
   * 
   * @param {int} ddd 
   * @param {int} providerId 
   */
  async getProvidersValue(ddd, providerId){

    const url = `/transactions/topups/provider-values`;
    const params = {
      stateCode: ddd,
      providerId
    }

    const { data } = await this._instance.get(url, params);

    if(data.status === 0){
      return data.value;
    }

    return [];
  }

  
}

module.exports = Topups;