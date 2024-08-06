# Safari iframe localStorage

This is an attempt to reproduce a Safari iframe localStorage synchronization issue from Safari 9.

## Steps

First, make sure you've checked out the changes in the PR, built the SDK, and ran `yarn link` in both `packages/firebase` and `packages/auth`.

1. Install dependencies and link: `yarn && cd iframe-app && yarn && yarn link firebase @firebase/auth && cd -`
1. Copy your firebase config to `iframe-app/.env` (or hard code it, if that's easier).
```
# Sample .env
REACT_APP_API_KEY=xx
REACT_APP_AUTH_DOMAIN=xx
REACT_APP_DATABASE_URL=xx
REACT_APP_PROJECT_ID=xx
REACT_APP_STORAGE_BUCKET=xx
REACT_APP_MESSAGING_SENDER_ID=xx
REACT_APP_APP_ID=1:xx
```
1. Start the top-level app: `HOST=127.0.0.1 yarn start`
1. Start the iframe-app: `cd iframe-app && HOST=localhost yarn start`
1. Open the top-level app in two tabs in Safari
1. In one of the tabs, sign in with a popup by clicking the button
1. Once signed in, observe that localStorage in the iframe in both tabs are in sync. If this is not the case, **please** reach out to dlarocque@google.com and share what you've observed.