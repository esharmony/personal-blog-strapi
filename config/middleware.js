module.exports = {
  //...
  settings: {
    cors: {
      origin: [
        "http://localhost",
        "http://localhost:3000",
        "https://www.sabbaticaldev.co.uk",
        "https://sabbaticaldev.co.uk",
        "https://sabattical-strapi.onrender.com",
        "http://localhost:1337",
      ],
    },
    gzip: {
      enabled: true,
      options: {
        br: false,
      },
    },
  },
};
