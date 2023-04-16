# _Chat GPT API Integration_

This is a simple integration of the [Chat GPT](https://chatgpt.openai.com/) in a NodeJS application.

## Installation

```bash
npm install
```

## Getting API Key and Organization

1. Go to [Chat GPT Platform](https://platform.openai.com/) and create an account.
2. Go to [API Keys](https://platform.openai.com/account/api-keys) and create a new API Key.
3. Go to [Organizations](https://platform.openai.com/account/org-settings) and get the Organization ID.

## Usage

1. Rename the `.env.example` file to `.env` and fill in the `ORGANIZATION`, `API_KEY` and `PORT` variables.
2. Run the application with `npm start`.
3. Open the browser and go to `http://localhost:3000/hello` to see the application running.

## HTTP Requests

| HTTP Method | Endpoint        | Parameters | Body                | Description                                 |
| ----------- | --------------- | ---------- | ------------------- | ------------------------------------------- |
| GET         | `/hello`        | -          | -                   | Returns a simple message.                   |
| POST        | `/send-message` | -          | `{message: string}` | Returns the response from the Chat GPT API. |

## Postman Collection

You can import the `postman_collection.json` file to your Postman application to test the API.
