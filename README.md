## ReqHubDotNet
ReqHub middleware for C# projects. Distribute your API using the ReqHub platform in just a few lines!
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
To distribute an API for clients to consume with API keys, add these two lines to your `Startup.cs`:

```js

```
That's it! 🎉

#### Identity
You may want to be able to uniquely identify a client.

#### How it works
Clients consuming your API create a request hash using their own API keys, which the middleware forwards to the platform
along with your request hash. If everything matches up on the platform, the request is allowed to continue.

## Consuming an API
To consume an API,

## Per-endpoint configuration
ReqHub can be configured on a per-endpoint or per-controller basis. This is useful if you only want to publish a portion of your API, or if you want to include multiple small APIs in a single server instance to reduce hosting costs.

## Contributing
Go for it! If we're missing something or you're running into a problem, either let us know in an issue or send us a pull request.
We think we're pretty reasonable 😘

## License
MIT, babe -- go nuts! 🎉
