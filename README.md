## ReqHubNode
ReqHub middleware for NodeJS projects. Distribute your API using the ReqHub platform in just a few lines!
For more information, visit https://reqhub.io.

## Installation
ReqHub is available on npm
```
npm install --save reqhub
```
or with Yarn
```
yarn add reqhub
```

## Distributing an API
To distribute an API for clients to consume with API keys, add the following lines to your `index.js`:

```js
const reqhub = require('reqhub');

const publicKey = 'yourPublicKey';
const privateKey = 'yourPrivateKey';

const reqhubMiddleware = reqhub.middleware.create(publicKey, privateKey);
app.use(reqhubMiddleware);
```

That's it! 🎉

#### Full example:
The [Express hello-world example](https://expressjs.com/en/starter/hello-world.html) modified to work with ReqHub! The only change we made was adding the lines above.

```js
const express = require('express');
const reqhub = require('reqhub');
const app = express();
const port = 3000;

const publicKey = 'yourPublicKey';
const privateKey = 'yourPrivateKey';

const reqhubMiddleware = reqhub.middleware.create(publicKey, privateKey);
app.use(reqhubMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
```

#### Identity
You may want to be able to uniquely identify a client.

#### How it works
Clients consuming your API create a request hash using their own API keys, which the middleware forwards to the platform
along with your request hash. If everything matches up on the platform, the request is allowed to continue.

## Consuming an API
To consume an API, start by configuring a client:
```js
const reqhub = require('reqhub');

const publicKey = 'yourClientPublicKey';
const privateKey = 'yourClientPrivateKey';

const client = reqhub.apiClient.create('yourClientPublicKey', 'yourClientPrivateKey');
```

Then use it to make requests!
```js
(async () => {
  const response = await client.get('https://example-url/endpoint');
  console.log(response);
})();
```

Without async:
```js
client.get('https://example-url/endpoint')
  .then((response) => {
    console.log(response);
  });
```

## Per-endpoint configuration
ReqHub can be configured on a per-endpoint or per-path basis. This is useful if you only want to publish a portion of your API, or if you want to include multiple small APIs in a single server instance to reduce hosting costs.

With a middleware instance like this:
```js
const publicKey = 'yourPublicKey';
const privateKey = 'yourPrivateKey';

const reqhubMiddleware = reqhub.middleware.create(publicKey, privateKey);
```

Simply add it to an endpoint and you're all set!
```js
app.get('/', reqhubMiddleware, (req, res) => {
  res.send('Hello World!');
});
```

You can also add it to a path:
```js
// All endpoints starting with /example will use ReqHub
app.use('/example', reqhubMiddleware);

app.get('/example/test', (req, res) => {
  res.send('Hello World!');
});
```

ReqHub middleware is standard Express middleware. See https://expressjs.com/en/guide/using-middleware.html for more applications.

## Contributing
Go for it! If we're missing something or you're running into a problem, either let us know in an issue or send us a pull request.
We think we're pretty reasonable 😘

## License
MIT, babe -- go nuts! 🎉
