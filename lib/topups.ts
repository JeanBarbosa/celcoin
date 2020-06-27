import Api from './api';

export default class Topups {

  private httpClient: any;

  constructor(clientId: String, clientSecret: String, sandbox = false){
    this.httpClient = new Api(clientId, clientSecret);
  }

 /**
  * Get a list of providers
  * 
  * @param {int} stateCode DDD
  * @param {int} type Topup Types can be informed as: 
  *  0 for ALL
  * 1 for PIN
  * 2 for ONLINE
  * @param {int} category Topup Categories can be informed as:
  * 0 for ALL 
  * 1 for PHONES 
  * 2 for GAMES
  * 3 for TV
  * 4 for TRANSPORT
  * 5 for DIGITAL CONTENT
  */
  async getProviders(stateCode: Number, type = Number, category = Number) {

    const url = `transactions/topups/providers`;
    const params = {stateCode, type, category };

    const { data } = await this.httpClient.get(url, params);

    return data;
  }

  /**
   * Check which carrier the phone number belongs
   * 
   * @param {int} stateCode DDD
   * @param {string} phoneNumber phone number
   */
  async findProvider(stateCode: Number, phoneNumber: String) {

    const url = `transactions/topups/find-providers`;
    const params = { stateCode, phoneNumber };

    const { data } = await this.httpClient.get(url, params);

    return data;
  }

  /**
   * Retrieve a list of Providers and its values through a given
   * StateCode and ProviderId
   * 
   * @param {*} stateCode DDD
   * @param {*} providerId Service Code
   */
  async getProviderValues(stateCode: Number, providerId: Number){

    const url = `/transactions/topups/provider-values`;
    const params = {
      stateCode,
      providerId
    };

    const { data } = await this.httpClient.get(url, params);

    return data;
  }

  /**
   * Check the values ​​available for Bilhete Único by state code,
   * providerId and clientIdentification
   * 
   * @param {int} stateCode DDD
   * @param {int} providerId Service Code
   * @param {string} clientIdentification Unique ticket number
   */
  async getProviderValuesSingleTicket(stateCode: Number, providerId: Number, clientID: String){
    
    const url = `/v4/transactions/topups/provider-values-BilheteUnico`;
    const params = {
      stateCode,
      providerId,
      clientIdentification: clientID
    };

    const { data } = await this.httpClient.get(url, params);

    return data;
  }

  /**
   * Post a topup transaction for Bilhete único
   * 
   * @param {object} body 
   */
  async newSingleTicket(body: object){
    
    const url = `/v4/transactions/topups/BilheteUnico`;
    const {data} = await this.httpClient.post(url, body);

    return data;
  }

  /**
   * Post a topup transaction
   * 
   * @param {object} body 
   * 
   */
  async new(body: object){
    const url = `/transactions/topups`;

    const {data} = await this.httpClient.post(url, body);

    return data;
  }
  
  /**
   * Capture a posted topup transaction
   * 
   * @param {int} transactionId Transaction ID
   * @param {int} externalNSU Transaction identifier
   * @param {string} externalTerminal Terminal identifier
   */
  async capture(transactionId: string, externalNSU = 0, externalTerminal = ''){
    
    const url = `/transactions/topups/${transactionId}/capture`;
    const params = {
      externalTerminal,
      externalNSU
    }

    const { data } = await this.httpClient.put(url, params);

    return data;
  }

  /**
   * Void a posted topup transaction
   * 
   * @param {int} transactionId 
   * @param {int} externalNSU 
   * @param {string} externalTerminal 
   */
  async cancel(transactionId: String, externalNSU = 0, externalTerminal = ''){

    const url = `/transactions/topups/${transactionId}/void`;
    const params = {
      externalTerminal,
      externalNSU
    }

    const { data } = await this.httpClient.delete(url, params);

    return data;
  }

}