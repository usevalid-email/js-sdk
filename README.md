# usevalid.email

Validate Your Emails with Confidence

# Getting started

## Installation

You can install the package via npm:

```bash
npm install @usevalid-email/js-sdk
```

Or yarn:

```bash
yarn add @usevalid-email/js-sdk
```

Or Bun.js:

```bash
bun add @usevalid-email/js-sdk
```

## Usage

```javascript
// using Sdk
import Sdk from '@usevalid-email/js-sdk';

const sdk = new Sdk('your-api-key');
const validator = sdk.validator();

const email = 'test@gmail.com';

validator.validate(email).then((response) => {
  console.log(response);
});
```

or

```javascript
// using useValidEmail
import { useValidEmail } from '@usevalid-email/js-sdk';

const validator = useValidEmail('your-api-key');

const email = 'test@gmail.com';

validator.validate(email).then((response) => {
  console.log(response);
});
```

## Testing

```bash
npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

- [All Contributors](https://github.com/usevalid-email/js-sdk/graphs/contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
