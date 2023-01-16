/* 
 * This project is licensed to Kodesayap Inc
 * You can contribute to make this project better by contact me.
 * Please contact me via Phone +6282302021799.
 * Your Regards, Tonny Tris Haripurwanto, A.Md.
 */

require('dotenv').config()
const app = require('./app')

// app.listen({port: process.env.SERVER_PORT })
app.listen(5500, '0.0.0.0', function (err, address) {
})