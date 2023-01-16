/* 
 * This project is licensed to Kodesayap Inc
 * You can contribute to make this project better by contact me.
 * Please contact me via Phone +6282302021799.
 * Your Regards, Tonny Tris Haripurwanto, A.Md.
 */

const { toJson } = require('../helpers/Result')
const UserService = require('../services/UserService')

const findpemilih = async(req, reply) => {
    const {desa} = req.body
    const cari = await UserService.caripemilih(desa)

    return toJson(reply, 200, "Berhasil Cari Desa", cari)
}

module.exports = {
    findpemilih,
}