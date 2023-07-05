$(document).ready(function() {
    // Ketika form disubmit
    $('#form-gaji').on('submit', function(e) {
        e.preventDefault();
        // Tampilkan loader
        $('.loader-wrapper').show();
        // Sembunyikan form
        $('.card:first-of-type').hide();
        // Ambil data dari form
        var jamKerja = parseFloat(document.getElementById('jamKerja').value);
        var jamLembur = parseFloat(document.getElementById('jamLembur').value || 0);
        var upahPerjam = parseFloat(document.getElementById('upahPerjam').value);
        var hariKerja = parseFloat(document.getElementById('hariKerja').value);
        // Hitung gaji
        var upahLembur = upahPerjam + 0;
        var gajiLembur = jamLembur * upahLembur * hariKerja;
        var gajiPerbulan = jamKerja * upahPerjam * hariKerja + gajiLembur;
        var pph = gajiPerbulan * 0.1;
        var totalGaji = gajiPerbulan - pph;
        // Tampilkan hasil setelah 10 detik
        setTimeout(function() {
            $('#gajiPerbulan').val(gajiPerbulan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }));
            $('#gajiLembur').val(gajiLembur.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }));
            $('#pph').val(pph.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }));
            $('#totalGaji').val(totalGaji.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }));
            // Sembunyikan loader
            $('.loader-wrapper').hide();
            // Tampilkan card hasil
            $('.card:last-of-type').show();
        }, 1000); // 10 detik
    });

    // Ketika tombol hitung ulang ditekan
    $('.btn-ulang').on('click', function() {
        // Bersihkan form
        $('#form-gaji')[0].reset();
        // Sembunyikan card hasil
        $('.card:last-of-type').hide();
        // Tampilkan form
        $('.card:first-of-type').show();
    });
});