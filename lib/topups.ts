import Api from './api';

/** Response */
export interface IResponse {
  errorCode: number;
  message?: string;
  status: string;
}

/** Providers */
export enum ETypeCategoryProvider {
  'TODOS' = 0,
  'TELEFONES' = 1,
  'GAMES' = 2,
  'TV' = 3,
  'TRANSPORTE' = 4,
  'CONTEÚDOS DIGITAIS' = 5,
}

export enum ETypeTopup {
  'TODOS' = 0,
  'PIN' = 1,
  'ONLINE' = 2,
}

export interface IProvider {
  name: string;
  providerId: number;
  maxValue?: number;
  minValue?: number;
  category?: number;
  RegionaisnameProvider?: Array<any>;
  TipoRecarganameProvider?: number;
}

export interface IProviderDTO {
  stateCode: number;
  type?: ETypeTopup;
  category?: ETypeCategoryProvider;
}

export interface IProviderResponse extends IResponse {
  providers?: IProvider[];
}

/** Find providers */
export interface IFindProvider {
  stateCode: number;
  phoneNumber: string;
}

export interface IFindProvidersResponse extends IResponse {
  nameProvider: string;
  providerId: number;
}

/** Body topup */
export interface IPhone {
  stateCode: number;
  countryCode: number;
  number: string;
}

export interface ITopupData {
  paymentMethod: string;
  pontos: number;
  value: number;
  originalValue: number;
  valueWithDiscount: number;
  valueWithAdditional: number;
}

export interface ITopupDTO {
  externalTerminal?: string;
  topupData: ITopupData;
  cpfCnpj: string;
  signerCode: string;
  providerId: number;
  phone: IPhone;
}

export default class Topups {
  private httpClient: any;

  constructor(clientId: string, clientSecret: string, sandbox = false) {
    this.httpClient = new Api(clientId, clientSecret, sandbox);
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
  async getProviders({
    stateCode,
    type,
    category,
  }: IProviderDTO): Promise<IProviderResponse> {
    const url = `transactions/topups/providers`;
    const params = { stateCode, type, category };

    const { data } = await this.httpClient.get(url, params);

    return data;
  }

  /**
   * Check which carrier the phone number belongs
   * @param {IFindProvider} body
   */
  async findProvider({
    stateCode,
    phoneNumber,
  }: IFindProvider): Promise<IFindProvidersResponse> {
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
  async getProviderValues(stateCode: number, providerId: number) {
    const url = `/transactions/topups/provider-values`;
    const params = {
      stateCode,
      providerId,
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
  async getProviderValuesSingleTicket(
    stateCode: number,
    providerId: number,
    clientID: string,
  ) {
    const url = `/v4/transactions/topups/provider-values-BilheteUnico`;
    const params = {
      stateCode,
      providerId,
      clientIdentification: clientID,
    };

    const { data } = await this.httpClient.get(url, params);

    return data;
  }

  /**
   * Post a topup transaction for Bilhete único
   *
   * @param {object} body
   */
  async newSingleTicket(body: object) {
    const url = `/v4/transactions/topups/BilheteUnico`;
    const { data } = await this.httpClient.post(url, body);

    return data;
  }

  /**
   * Post a topup transaction
   *
   * @param {object} body
   *
   */
  async new({
    externalTerminal,
    topupData,
    cpfCnpj,
    signerCode,
    providerId,
    phone,
  }: ITopupDTO): Promise<any> {
    const url = `/transactions/topups`;

    const { data } = await this.httpClient.post(url, {
      externalTerminal,
      topupData,
      cpfCnpj,
      signerCode,
      providerId,
      phone,
    });

    return data;
  }

  /**
   * Capture a posted topup transaction
   *
   * @param {int} transactionId Transaction ID
   * @param {int} externalNSU Transaction identifier
   * @param {string} externalTerminal Terminal identifier
   */
  async capture(transactionId: string, externalNSU = 0, externalTerminal = '') {
    const url = `/transactions/topups/${transactionId}/capture`;
    const params = {
      externalTerminal,
      externalNSU,
    };

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
  async cancel(transactionId: string, externalNSU = 0, externalTerminal = '') {
    const url = `/transactions/topups/${transactionId}/void`;
    const params = {
      externalTerminal,
      externalNSU,
    };

    const { data } = await this.httpClient.delete(url, params);

    return data;
  }
}
