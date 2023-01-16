/* 
 * This project is licensed to Kodesayap Inc
 * You can contribute to make this project better by contact me.
 * Please contact me via Phone +6282302021799.
 * Your Regards, Tonny Tris Haripurwanto, A.Md.
 */
const fastify = require('fastify')({ logger: true })
const test = require('./routes/test')
var cors = require('@fastify/cors')
// fastify.get('/', async(req, reply) => {
//     return { 'message': 'SIPP - Data ' };
// });

// fastify.register(require('fastify-cors'), { 
//     'origin': '*', //true
//     'methods': 'POST' //'GET, POST'
// })
fastify.register(test, { prefix: '/api/' })
fastify.register(cors, {
    // origin: 'http://localhost:8080'
    // origin: 'http://103.161.108.40'
    origin: 'http://103.161.108.4'
    // origin: 'https://integrator.bondowosokab.go.id'
})
// fastify.register(require('fastify-cors'), {
//     'origin': '*', //true
//     'methods': 'POST' //'GET, POST'
// })



module.exports = fastify