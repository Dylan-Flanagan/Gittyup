const { Router } = require('express');

module.exports = Router().get('/login', (req, res) => {
  // redirect to github login
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GH_CLIENT_ID}&scope=user&redirect_uri=${process.env.GH_REDIRECT_URI}`
  );
});
