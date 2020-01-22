## Netlify Identity - Persisting user data

This is an example of how to update user_metadata and app_metadata for users on Netlify Identity. Note that all data in app_metadata and user_metadata is available to read from the client.

## user_metadata

You can update user_metadata from both the UI and from inside of a netlify function. Since it can be updated from the client, it is not secure and users can update their own info if they know the code for it. it's safe to store info in here that you don't mind the user changing. The method used to update the user_metadata in the frontend JS is:

```
netlifyIdentity.gotrue.currentUser().update({
            data: {
                you: "are awesome"
            }
        }).then(user => console.log(user))
```

This actually uses the gotrue library directly to update the user. Gotrue-js is the library that the netlify-identity-widget is built on. You can find more information on it at https://github.com/netlify/gotrue-js

## app_metadata

You can only update the app_metadata fromw within a netlify function. This is for security purposes. Put info here that you don't want users to have the ability to change.

In the example provided, I use a event-triggered function called `identity-signup.js` that returns a JSON object that contains the user info that I want it to include. This is enough for event triggered functions. It's possible to make the same changes to users from non-event triggered functions by using the identity API endpoint passed in via the context object to the function, but that method is not used here.

## Demo

https://identity-example-update-user.netlify.com/

Thank you and I hope this helps!
