import Topups from './topups';
import Merchant from './merchant';

export default class Celcoin {
  public clientId: string;

  public clientSecret: string;

  public sandbox: boolean;

  constructor(clientId: string, clientSecret: string, sandbox = false) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.sandbox = sandbox;
  }

  public get topup() {
    return new Topups(this.clientId, this.clientSecret, this.sandbox);
  }

  public get merchant() {
    return new Merchant(this.clientId, this.clientSecret, this.sandbox);
  }
}
