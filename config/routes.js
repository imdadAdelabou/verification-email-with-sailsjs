module.exports.routes = {
    'get /api/inscription': { view: 'pages/inscription' },
    'post /api/inscription': "UsersController.inscription",
};