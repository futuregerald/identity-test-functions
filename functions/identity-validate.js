exports.handler = function(event, context, callback) {
  const responseBody = {
    user_metadata: { webhook_test: 'this was added by identity-validate.js' },
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  });
};
