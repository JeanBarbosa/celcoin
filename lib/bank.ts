import Api from './api';

export default class Bank {

  public httpClient: any;

  constructor(clientId: string, clientSecret: string, sandbox = false) {
    this.httpClient = new Api(clientId, clientSecret, sandbox);
  }

  async all() {
    const url = `/transactions/banks`;
    const {data} = await this.httpClient.get(url);

    return data;
  }

}
