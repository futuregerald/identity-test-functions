exports.handler = function(event, context, callback) {
  const responseBody = {
    app_metadata: {
      roles: ['test', 'user', 'member'],
      my_user_info: "this is user info that the user can't change from the UI",
    },
    user_metadata: { webhook_test: 'this was added by testing-webhook.js' },
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  });
};
