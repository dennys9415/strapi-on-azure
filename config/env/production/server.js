// path: ./config/env/production/server.js

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://strapi-on-azure-dennys.azurewebsites.net",
  admin: {
    url: "https://proud-ground-0eb09500f.azurestaticapps.net",
    serveAdminPanel: false,
  },
});
