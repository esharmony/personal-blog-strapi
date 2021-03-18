'use strict';
const slugify = require('slugify');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.Title) {
                data.Slug = slugify(data.Title);
            }
        },
        beforeUpdate: async (params, data) => {
            if (data.Title) {
                data.Slug = slugify(data.Title);
            }
        },
    },
};
