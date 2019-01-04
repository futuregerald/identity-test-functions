exports.handler = function(event, context, callback) {
  const responseBody = {
    app_metadata: {
      roles: ['test', 'user', 'member'],
      my_user_info: "this is user info that the user can't change from the UI",
    },
    user_metadata: { custom_data_from_function: 'this is pretty awesome' },
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  });
};
