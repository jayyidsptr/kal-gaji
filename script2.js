// const loaderWrapper = document.querySelector('.loader-wrapper');
// // const tabelHasilGaji = document.querySelectorAll('.hasil-gaji');

// //     function hitungGaji() {
// //         // ambil nilai input dari form
// //         const nama = document.getElementById('nama').value;
// //         const jamKerja = parseFloat(document.getElementById('jamKerja').value);
// //         const jamLembur = parseFloat(document.getElementById('jamLembur').value || 0);
// //         const upahPerjam = parseFloat(document.getElementById('upahPerjam').value);
// //         const hariKerja = parseFloat(document.getElementById('hariKerja').value);

// //         // hitung nilai gaji
// //         const upahLembur = upahPerjam + 0;
// //         const gajiLembur = jamLembur * upahLembur * hariKerja;
// //         const gajiTotal = jamKerja * upahPerjam * hariKerja + gajiLembur;
// //         const pph = gajiTotal * 0.1;
// //         const gajiBersih = gajiTotal - pph;

// //         // tampilkan hasil perhitungan pada elemen input yang sesuai
// //         document.getElementById('gajiPerbulan').value = gajiTotal.toLocaleString('id-ID', {
// //             style: 'currency',
// //             currency: 'IDR'
// //         });
// //         document.getElementById('gajiLembur').value = gajiLembur.toLocaleString('id-ID', {
// //             style: 'currency',
// //             currency: 'IDR'
// //         });
// //         document.getElementById('pph').value = pph.toLocaleString('id-ID', {
// //             style: 'currency',
// //             currency: 'IDR'
// //         });
// //         document.getElementById('gajiBersih').value = gajiBersih.toLocaleString('id-ID', {
// //             style: 'currency',
// //             currency: 'IDR'
// //         });

// //         // tampilkan kembali elemen tabel hasil gaji
// //         tabelHasilGaji.forEach(function(e) {
// //             e.style.display = 'block';
// //         });

// //         // sembunyikan div loader-wrapper
// //         loaderWrapper.style.display = 'none';
// //     }

// //     const formGaji = document.getElementById('form-gaji');
// //     formGaji.addEventListener('submit', function(event) {
// //         // sembunyikan elemen lain yang tidak diperlukan
// //         // tampilkan div loader-wrapper
// //         event.preventDefault();
// //         loaderWrapper.style.display = 'flex';
// //         tabelHasilGaji.forEach(function(e) {
// //             e.style.display = 'none';
// //         });

// //         // panggil fungsi hitungGaji setelah 1 detik
// //         setTimeout(hitungGaji, 1000);
// //     });