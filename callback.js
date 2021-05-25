let ikan = { barang: "ikan", jumlah: 2, harga: 20000, durasi: 3 };
let bawang = { barang: "bawang", jumlah: 5, harga: 500000, durasi: 2 };
let kepiting = { barang: "kepiting", jumlah: 1, harga: 25000, durasi: 2 };

function belanja(uang, barang, callback) {
  console.log("sisa uang ", uang);
  console.log("mulai belanja ", barang.barang);
  let belanjaan = barang.jumlah * barang.harga;
  let sisa = uang - belanjaan;
  if (sisa <= 0) {
    console.log("uang tidak cukup");
    return;
  }
  setTimeout(() => {
    console.log(`menunggu ${barang.durasi}detik `);
    callback(sisa);
  }, barang.durasi * 1000);
}

console.log("berangkat ke pasar");
belanja(300000, ikan, (e) =>
  belanja(e, bawang, (e) => belanja(e, kepiting, () => null))
);
console.log("datang ke rumah");
