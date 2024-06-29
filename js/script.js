document.addEventListener('DOMContentLoaded',
 function() {
    document.getElementById('btnDaftar').addEventListener('click', 
    function() {
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const alamat = document.getElementById('alamat').value;
        const telepon = document.getElementById('telepon').value;
        const kelas = document.getElementById('kelas').value;
        const prodi = document.getElementById('prodi').value;
        const dataHTML = `
            <h3>Selamat Kamu Sudah Terdaftar:</h3>
            <p>Nama: ${nama}</p>
            <p>Email: ${email}</p>
            <p>Alamat: ${alamat}</p>
            <p>No Telepon: ${telepon}</p>
            <p>Kelas: ${kelas}</p>
            <p>Prodi: ${prodi}</p>
        `;
        document.getElementById('formContainer').style.display = 'none';
        const dataMahasiswaContainer = document.getElementById('dataMahasiswa');
        dataMahasiswaContainer.innerHTML = dataHTML;
        dataMahasiswaContainer.style.display = 'block';
    });
});
