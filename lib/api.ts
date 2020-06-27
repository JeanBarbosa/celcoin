import axios from 'axios';

 export default class Api {

  private httpClient: any;
  private clientId: any;
  private clientSecret: any; 
  private sandbox: boolean;

  constructor(clientId: any, clientSecret: any, sandbox: boolean = false){

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.sandbox = sandbox;

    const token = `Bearer ${this.getToken(this.clientId, this.clientSecret)}`;

     this.httpClient = axios.create({
      baseURL: this.getBaseUrl(),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
    
  }

  public getToken(clientId: any, clientSecret: any) {

    const credentials:string = `${clientId}:${clientSecret}`;
    const enconde: any = Buffer.from(credentials, "utf8");

    return enconde.toString('base64');
  }

  public getBaseUrl(){
    return "https://sandbox-apicorp.celcoin.com.br/v4";
  }

  public async post(url: string, body: object) {

    try {
      return await this.httpClient.post(url, body);
    } catch (err) {
      return err;
    }
  }

  public async get(url: string, params: object) {
    try{
      return await this.httpClient.get(url, { params });
    }catch(err){
      return err;
    }
  }

  public async put(url: string, params: object){
    try{
      return await this.httpClient.put(url, params);
    }catch(err){
      return err;
    }
  }

  public async delete(url: string, params: object){
    try{
      return await this.httpClient.delete(url, params);
    }catch(err){
      return err;
    }
  }
}
