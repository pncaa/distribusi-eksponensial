//untuk menjalankan beberapa fungsi
function klik(tipe) {
    clear();
    let x = tipe
    rumus(x);
    garis1(x);
    path();
    angka();
}

//untuk memvalidasi inputan yang masuk
function validateInput(x, y) {
    if (isNaN(x) || isNaN(y) || x < 1 || x > 100 || y < 1 || y > 100) {
        alert("Please enter values between 1 and 100");

        return false;
    }
    if (isNaN(x) || isNaN(y) || y <= x) {
        alert("INPUTAN PERTAMA TIDAK BOLEH LEBIH BESAR ATAU SAMA");
        return false;

    }
    return true;
}

//untuk menghapus tampilan yang sudah ada agar tidak menumpuk
function clear() {
    let svg = document.getElementById('svg');
    let texts = svg.querySelectorAll('text');
    let lines = svg.querySelectorAll('line');
    let paths = svg.querySelectorAll('path');

    texts.forEach(text => svg.removeChild(text));
    lines.forEach(line => svg.removeChild(line));
    paths.forEach(path => svg.removeChild(path));
}





