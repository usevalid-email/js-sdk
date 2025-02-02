import Sdk from './Sdk';

export const useValidEmail = async (token: string) => {
  const sdk = new Sdk(token);
  return sdk.emailValidator;
};

export default Sdk;
