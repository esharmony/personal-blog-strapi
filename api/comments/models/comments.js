"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = ({ env }) => ({
  lifecycles: {
    beforeCreate: async (data) => {
      await strapi.plugins["email"].services.email.send({
        to: env('MY_EMAIL'),
        subject: "comment sent",
        text: `A comment from the blog has been sent: ${data.CommentIdentity} from ${data.Name}`,
      });
    },
  },
});
