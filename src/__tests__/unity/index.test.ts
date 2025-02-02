import Sdk from '../../index';

describe('validates an email successfully', () => {
  it('should return a valid email', async () => {
    const sdk = new Sdk('your-access-token');
    jest.spyOn(sdk.validator, 'validate').mockResolvedValue({
      email: 'test@gmail.com',
      user: 'test',
      domain: 'gmail.com',
      status: 'valid',
      reason: 'Email is valid',
      disposable: false,
    });
    const response = await sdk.validator.validate('test@example.com');
    expect(response.status).toBe('valid');
  });
});
