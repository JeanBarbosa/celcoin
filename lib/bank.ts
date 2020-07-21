import Api from './api';

export interface OccurrencyDTO {
  startDate: string;
  endDate: string;
}

export default class Bank {

  public httpClient: any;

  constructor(clientId: string, clientSecret: string, sandbox = false) {
    this.httpClient = new Api(clientId, clientSecret, sandbox);
  }

  /**
   * Get a list of banks
   */
  async all(): Promise<any> {
    const url = `/transactions/banks`;
    const {data} = await this.httpClient.get(url);

    return data;
  }

  /**
   * Get a list of all pending transactions
   */
  async pendecy(): Promise<any> {
    const url = `/transactions/pendency`;
    const {data} = await this.httpClient.get(url);

    return data;
  }

  /**
   * Get a list of occurrences
   *
   * @param {OccurrencyDTO}
   */
  async occurrency({ startDate, endDate } : OccurrencyDTO): Promise<any> {
    const url = `/transactions/occurrency?DataInicio=${startDate}&DataFim=${endDate}`;

    const { data } = await this.httpClient.get(url);

    return data;
  }

}
