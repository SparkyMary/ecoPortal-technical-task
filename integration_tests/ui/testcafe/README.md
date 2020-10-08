# UI tests

## Development

### `npm install`

Installs the dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test:develop`

Go to integration_tests/ui/testcafe and run `npm run test:develop`
Preferably to use node version 12

Runs Testcafe tests in interactive mode, will stop on fails automatically

## Known issues

### 222 Unknown in mocked responses

If your RequestMock returns 222 "unknown" status, it is a CORS issue.

Add `{'access-control-allow-origin': '*'}` header to your mocked response.

More info https://github.com/DevExpress/testcafe/issues/2614
