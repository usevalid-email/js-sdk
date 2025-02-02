import HttpClientService from './services/HttpClientService';
import { TValidationResponse } from './types/TValidationResponse';
import Sdk from './Sdk';

class EmailValidator {
  protected logs: boolean;

  protected api: HttpClientService;

  public constructor(api: HttpClientService, logs = false) {
    this.api = api;
    this.logs = logs;
  }

  public async validate(email: string): Promise<TValidationResponse> {
    const response = await this.api.post<TValidationResponse>('/verify/v1', { email }, {});
    if (response.status === 401) {
      throw new Error('Unauthorized');
    }
    if (response.status === 403) {
      throw new Error('Forbidden');
    }
    if (response.status === 429) {
      throw new Error(
        `You have exceeded the quota for Requests on your current plan. Upgrade your plan at ${Sdk.DEFAULT_CTA_URL}`,
      );
    }
    return response.data;
  }
}

export default EmailValidator;
