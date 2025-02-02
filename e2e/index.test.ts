import dotenv from 'dotenv';
import Sdk from '../src';

dotenv.config();

describe('validates an email successfully', () => {
  it('should return a valid email', async () => {
    const token = process.env.USE_VALID_EMAIL_ACCESS_TOKEN;
    expect(token).toBeDefined();

    const sdk = new Sdk(token!);
    const valid_email = 'noreply@github.com';

    const response = await sdk.validator.validate(valid_email);

    expect(response.status).toBe('valid');
    expect(response.reason).toBe('Email is invalid');
    expect(response.domain).toBe('github.com');
    expect(response.user).toBe('noreply');
    expect(response.email).toBe(valid_email);
    expect(response.disposable).toBe(false);
  }, 10000);
});
