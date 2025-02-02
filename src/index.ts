import Sdk from './Sdk';

export const useValidEmail = (token: string) => {
  const sdk = new Sdk(token);
  return sdk.validator;
};

export default Sdk;
