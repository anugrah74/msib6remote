let frm = document.getElementById('online');
let jabatan = ["Manager", "Asisten Manager", "Staff"];
let Pilihjabatan = `<option value=""> --- Pilihan Jabatan ---</option>`;

for (let p in jabatan) {
    Pilihjabatan += `<option value="${jabatan[p]}">${jabatan[p]}</option>`;
}
let statusOptions = ["Menikah", "Belum Menikah"];
let PilihStatus = `<option value=""> --- Pilihan Status ---</option>`;
for (let p in statusOptions) {
    PilihStatus += `<option value="${statusOptions[p]}">${statusOptions[p]}</option>`;
}

frm.jabatan.innerHTML = Pilihjabatan;
frm.status.innerHTML = PilihStatus;

function jalan() {
    let nama = frm.nama.value;
    let jabatanVal = frm.jabatan.value;
    let status = frm.status.value;

    let gajipokok, tunjangan_jabatan, bpjs, tunjangan_keluarga, totalgaji;

    // Hitung gaji pokok berdasarkan jabatan
    if (jabatanVal === "Manager") {
        gajipokok = 15000000; 
    } else if (jabatanVal === "Asisten Manager") {
        gajipokok = 10000000; 
    } else if (jabatanVal === "Staff") {
        gajipokok = 5000000; 
    }

    tunjangan_jabatan = 0.15 * gajipokok;
    bpjs = 0.10 * gajipokok;

    if(status === "Menikah"){
        tunjangan_keluarga = 0.20 * gajipokok;
    } else if (status === "Belum Menikah"){
        tunjangan_keluarga = 0;
    }

    // Periksa status apakah "Menikah" atau tidak
    

    totalgaji = gajipokok + tunjangan_jabatan - bpjs + tunjangan_keluarga;
    
    let tabel = document.getElementById('tabelPegawai');
    let newRow = tabel.insertRow();
    
    // Tambahkan sel untuk setiap data pegawai
    let cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
        newRow.insertCell(5),
        newRow.insertCell(6),
        newRow.insertCell(7),
    ];

    // Isi setiap sel dengan data pegawai
    cells[0].textContent = nama;
    cells[1].textContent = jabatanVal;
    cells[2].textContent = status;
    cells[3].textContent = gajipokok;
    cells[4].textContent = tunjangan_jabatan;
    cells[5].textContent = bpjs;
    cells[6].textContent = tunjangan_keluarga;
    cells[7].textContent = totalgaji;

}
