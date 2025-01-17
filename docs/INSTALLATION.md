# Installation

```
yarn
```

## Functions

```
cd functions
yarn
```

### Environment

Before being able to start the functions emulator, some configs are required.
Create a `.env` file, by duplicating `.env.example`.

| Key             | Description                            |
| --------------- | -------------------------------------- |
| `DAILY_API_KEY` | [Daily](https://www.daily.co/) API key |

## Client

Instructions on how to setup a React Native development environment can be found here: https://reactnative.dev/docs/environment-setup.

Make sure to follow the instructions for React Native CLI.

```
cd client
yarn
```

### Environment

Before being able to start the client, some configs are required.
Create a `.env` file, by duplicating `.env.example`.

| Key                                                               | Description                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENVIRONMENT`                                                     | Client environment, e.g. `dev`, `staging` or `production`                                                                                                                                                                                                                             |
| `SENTRY_DSN`                                                      | _Not needed for local development_. [Sentry DSN string](https://docs.sentry.io/product/sentry-basics/dsn-explainer/)                                                                                                                                                                  |
| `IOS_CODE_PUSH_DEPLOYMENT_KEY` `ANDROID_CODE_PUSH_DEPLOYMENT_KEY` | _Not needed for local development_. Follow the instructions at [app center](https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/react-native#2-create-your-app-in-the-app-center-portal-to-obtain-the-app-secret) for setting up a project and getting the deployment key. |
| `API_ENDPOINT`                                                    | API end points. e.g. `http://localhost:5001/demo-29k-cupcake/europe-west1/api`                                                                                                                                                                                                        |

### Sentry

Create a `client/sentry.properties` from the [Sentry example template](https://github.com/getsentry/examples/blob/master/react-native/sentry.properties). You may use the empty values for local development.

### iOS

```
cd client/ios
pod install
```
