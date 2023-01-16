const { default: fastify } = require('fastify')
const TestController = require('../controllers/TestController')

async function routes(fastify, options) {
    fastify.post('/caripemilih', TestController.findpemilih)
}

module.exports = routes;