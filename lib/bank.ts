import Api from './api';

export default class Bank {

  public httpClient: any;

  constructor(clientId: string, clientSecret: string, sandbox = false) {
    this.httpClient = new Api(clientId, clientSecret, sandbox);
  }

  /**
   * Get a list of banks
   */
  async all() {
    const url = `/transactions/banks`;
    const {data} = await this.httpClient.get(url);

    return data;
  }

  /**
   * Get a list of all pending transactions
   */
  async pendecy() {
    const url = `/transactions/pendency`;
    const {data} = await this.httpClient.get(url);

    return data;
  }
}
