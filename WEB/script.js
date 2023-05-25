// var name = "Petani Kode";
// var visitorCount = 50322;
// var isActive = true;
// var url = "https://www.petanikode.com";

// alert("Selamat datang di " + name);

// document.write("Nama situs : " + name + "<br>");
// document.write("Jumlah pengunjung : " + visitorCount + "<br>");
// document.write("Status aktif : " + isActive + "<br>");
// document.write("Alamat URL : " + url + "<br>");

// Nomor 1
function cekPerbandingan() {
    var bilangan1 = prompt("Masukkan bilangan ke-1:");
    var bilangan2 = prompt("Masukkan bilangan ke-2:");

    bilangan1 = parseInt(bilangan1);
    bilangan2 = parseInt(bilangan2);

    var hasil = document.getElementById("hasil");

    if (bilangan1 > bilangan2) {
      hasil.innerHTML = "BILANGAN KE-1 LEBIH BESAR DARI BILANGAN KE-2";
    } else if (bilangan1 < bilangan2) {
      hasil.innerHTML = "BILANGAN KE-2 LEBIH BESAR DARI BILANGAN KE-1";
    } else {
      hasil.innerHTML = "KEDUA BILANGAN SAMA BESAR";
    }
  }


