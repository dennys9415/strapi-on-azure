module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4f414d8f30e9af68669f7225251337a'),
  },
});
