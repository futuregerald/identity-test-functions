exports.handler = function(event, context, callback) {
  const responseBody = {
    user_metadata: { webhook_test: 'this was added by identity-validate.js' },
  };

  callback(null, {
    statusCode: 401,
    body: JSON.stringify(responseBody),
  });
};
