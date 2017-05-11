// So ugly.. but it has to be to proper embed in code tags.
const snippetData = {
  postRegister: {
    requestBody: `
    {
      "message": "text",
      "otherStuff" {
        "string": 'helloe',
      }
    }
`,
    response: `
    {
      "response": "body",
    }
`
  },
};

const data = [
  {
    header: 'Register',
    request: {
      verb: 'POST',
      route: 'register',
    },
    requestBody: {
      contentType: 'application/json',
      snippet: snippetData.postRegister.requestBody,
    },
    response: {
      contentType: 'application/json',
      statusCode: 200,
      snippet: snippetData.postRegister.response,
    }
  },
];
