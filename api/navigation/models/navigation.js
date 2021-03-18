'use strict';
const slugify = require('slugify');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.Item) {
                data.Slug = slugify(data.Item);
            }
        },
        beforeUpdate: async (params, data) => {
            if (data.Item) {
                data.Slug = slugify(data.Item);
            }
        },
    },
};
