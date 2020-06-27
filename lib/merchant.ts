import Api from './api';

export default class Merchant {

  private httClient: any;

  constructor(clientId: String, clientSecret: String, sandbox = false){
    this.httClient = new Api(clientId, clientSecret);
  }

  /**
   * Retrieve your balance info
   */
  async balance() {

    const url = `/merchant/balance`;
    const { data } = await this.httClient.get(url);

    return data;
  }

}