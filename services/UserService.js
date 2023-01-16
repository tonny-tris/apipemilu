/* 
 * This project is licensed to Kodesayap Inc
 * You can contribute to make this project better by contact me.
 * Please contact me via Phone +6282302021799.
 * Your Regards, Tonny Tris Haripurwanto, A.Md.
 */

const puppeteer = require('puppeteer');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const caripemilih = async(desa) => {
    const cari = await prisma.pemilih.findMany({
        // skip: 800000,
        // take: 10000,
        where: {
            id_desa: desa
        },
        select: {
            id_pemilih: true,
            // propinsi: true,
            // kabupaten: true,
            // id_kecamatan: true,
            // id_desa: true,
            no_kk: true,
            nik: true,
            nama_pemilih: true,
            // tmptlahir_pemilih: true,
            // tgllahir_pemilih: true,
            // jk: true,
            // status: true,
            alamat: true,
            // rt: true,
            // rw: true,
            // tps: true,
            // no_urut: true,
            // foto_pemilih: true,
            status: true
        }
    })
    return cari
}

module.exports = {
    caripemilih,
}
