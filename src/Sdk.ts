import HttpClientService from './services/HttpClientService';
import EmailValidator from './EmailValidator';

export class Sdk {
  public static DEFAULT_BASE_URI = 'https://usevalid-email.p.rapidapi.com';
  public static DEFAULT_CTA_URL = 'https://usevalid.email/pricing';

  protected logs: boolean;

  protected api: HttpClientService;
  public validator: EmailValidator;

  public constructor(accessToken: string, logs = false, baseURL = Sdk.DEFAULT_BASE_URI) {
    this.logs = logs;

    const options = {
      baseURL: baseURL,
      headers: {
        'X-RapidAPI-Key': accessToken,
        'X-RapidAPI-Host': new URL(baseURL).host,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    this.api = new HttpClientService(options, logs);
    this.validator = new EmailValidator(this.api, logs);
  }

  public static create(accessToken: string, logs = false, baseURL = Sdk.DEFAULT_BASE_URI): Sdk {
    return new Sdk(accessToken, logs, baseURL);
  }

  public static getAccessToken(): string {
    return process.env.USE_VALID_EMAIL_ACCESS_TOKEN || '';
  }
}

export default Sdk;
