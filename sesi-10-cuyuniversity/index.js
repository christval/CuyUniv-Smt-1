const myName = "christval"
const myAddress = "jalan ayam..."


const mahasiswa = [
{
nama: "christval",
alamat: "perum a no.123",
usia: 24,
semester: 1
},
{
    nama: "deaafrizal",
    alamat: "perum b no.456",
    usia: 24,
    semester: 8 
}
]

function getDetailData() {
    mahasiswa.map(function (result, i) {
        console.table(result)
    })
    // console.log(`data yang anda cari adalah: ${mahasiswa}`)
}

