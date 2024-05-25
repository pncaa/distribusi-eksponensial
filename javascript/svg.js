
//membuat garis pada x1 dan x2, dan membuat arsir area
function garis1(tipe) {
    // Ambil nilai dari input m1 dan m2
    let x = parseFloat(document.getElementById('m1').value);
    let y = parseFloat(document.getElementById('m2').value);
    let x1, p1, p2;
    let x2 = 746.5;


    // Validasi input
    if (!validateInput(x, y)) {
        return;
    }

    // Tentukan nilai x1 berdasarkan kondisi x
    if (x <= 5) {
        x1 = 176.5;
        p1 = 'M141 125.5V457H176L175.158 194C161.158 173.031 149.355 150.158 141 125.5Z';
        p2 = 'M745.576 457H367H176.5V195.226C258.777 300.666 294.143 311.296 367 346.5C522.5 399 587.5 403.5 745.576 409V457Z';
    } else {
        x1 = 366.5;
        p1 = 'M365.5 345.585C306 324.5 182 246.5 141 125.5V457H365.5V345.585Z';
        p2 = 'M367 457V346.5C522.5 399 587.5 403.5 745.576 409V457H367Z';
    }

    // Ambil elemen SVG
    let svg = document.getElementById('svg');

    if (tipe === 1) {
        // Buat garis pertama
        let line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line1.setAttribute('x1', x1);
        line1.setAttribute('y1', '90');
        line1.setAttribute('x2', x1);
        line1.setAttribute('y2', '460');
        line1.setAttribute('stroke', 'red');
        line1.setAttribute('stroke-width', '1');
        line1.setAttribute('stroke-dasharray', '2 4');
        svg.appendChild(line1);

        // Arsir x1
        let arsirx1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        arsirx1.setAttribute('d', p1);
        arsirx1.setAttribute('fill', '#F10707');
        arsirx1.setAttribute('fill-opacity', '0.2');
        svg.appendChild(arsirx1); // Append the path to the SVG
    } else if (tipe === 2) {
        // Buat garis kedua
        let line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.setAttribute('x1', x2);
        line2.setAttribute('y1', '90');
        line2.setAttribute('x2', x2);
        line2.setAttribute('y2', '460');
        line2.setAttribute('stroke', 'blue');
        line2.setAttribute('stroke-width', '1');
        line2.setAttribute('stroke-dasharray', '2 4');
        svg.appendChild(line2);

        // Arsir x2
        let arsirx2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        arsirx2.setAttribute('d', 'M908 409C844.747 409.805 809.385 409.814 746.5 409V457H908V409Z');
        arsirx2.setAttribute('fill', '#2914A8');
        arsirx2.setAttribute('fill-opacity', '0.2');
        svg.appendChild(arsirx2); // Append the path to the SVG
    } else if (tipe === 3) {
        // Buat garis pertama
        let line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line1.setAttribute('x1', x1);
        line1.setAttribute('y1', '90');
        line1.setAttribute('x2', x1);
        line1.setAttribute('y2', '460');
        line1.setAttribute('stroke', 'red');
        line1.setAttribute('stroke-width', '1');
        line1.setAttribute('stroke-dasharray', '2 4');
        svg.appendChild(line1);

        // Buat garis kedua
        let line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.setAttribute('x1', x2);
        line2.setAttribute('y1', '90');
        line2.setAttribute('x2', x2);
        line2.setAttribute('y2', '460');
        line2.setAttribute('stroke', 'blue');
        line2.setAttribute('stroke-width', '1');
        line2.setAttribute('stroke-dasharray', '2 4');
        svg.appendChild(line2);

        // Arsir selisih x1 dan x2
        let arsirSelisih = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        arsirSelisih.setAttribute('d', p2);
        arsirSelisih.setAttribute('fill', '#D9D9D9');

        svg.appendChild(arsirSelisih); // Append the path to the SVG
    }
}


//untuk menzmpilkan bentuk grafik
function path() {
    let x = parseFloat(document.getElementById('m1').value);
    let y = parseFloat(document.getElementById('m2').value);
    if (!validateInput(x, y)) {
        return; // Jika input tidak valid, hentikan eksekusi fungsi angka
    }
    let svg = document.getElementById('svg');
    //garis lengkung
    const lengkung = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    lengkung.setAttribute('d', 'M140 118C254.149 432.841 688.714 407.514 908 407.514');
    lengkung.setAttribute('stroke', '#00D1FF');
    lengkung.setAttribute('stroke-width', '3');
    svg.appendChild(lengkung);

    // Garis pertama
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '139.5');
    line1.setAttribute('y1', '90');
    line1.setAttribute('x2', '139.5');
    line1.setAttribute('y2', '460');
    line1.setAttribute('stroke', 'black');
    line1.setAttribute('stroke-width', '3');
    svg.appendChild(line1);

    // Garis kedua
    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '139');
    line2.setAttribute('y1', '458.5');
    line2.setAttribute('x2', '909');
    line2.setAttribute('y2', '458.5');
    line2.setAttribute('stroke', 'black');
    line2.setAttribute('stroke-width', '3');
    svg.appendChild(line2);

    // Garis-garis lainnya
    for (i = 119.5; i <= 289.5; i += 170) {
        const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        newLine.setAttribute('x1', '130');
        newLine.setAttribute('y1', i);
        newLine.setAttribute('x2', '138');
        newLine.setAttribute('y2', i);
        newLine.setAttribute('stroke', 'black');
        svg.appendChild(newLine);
    }

    for (i = 176.5; i <= 898.5; i += 38) {
        const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        newLine.setAttribute('x1', i);
        newLine.setAttribute('y1', '460');
        newLine.setAttribute('x2', i);
        newLine.setAttribute('y2', '468');
        newLine.setAttribute('stroke', 'black');
        svg.appendChild(newLine);
        console.log(i)
    }
}

//menambahkan angka yang ada dibawah grafik
function angka() {
    let x = parseFloat(document.getElementById('m1').value);
    let y = parseFloat(document.getElementById('m2').value);
    if (!validateInput(x, y)) {
        return; // Jika input tidak valid, hentikan eksekusi fungsi angka
    }

    let urutan = [];
    let baca = 0

    // Mengisi nilai lebih dari 5
    if (x >= 1 && x <= 5) {
        let range = (y - x) / 15;
        for (i = 0; i <= 19; i++) {
            let q = x + i * range
            urutan.push(q.toFixed(0));
        }
    } else {
        let range = (y - x) / 10;
        let xy = x - range * 5
        if (xy <= 0) {
            for (i = 1; i <= 5; i++) {
                urutan.push(i);
            }
        } else {
            for (i = 0; i < 5; i++) {
                let q = xy + i * range
                urutan.push(q.toFixed(0));
            }
        }

        for (i = 0; i <= 19; i++) {
            let q = x + i * range
            urutan.push(q.toFixed(0));
        }
    }

    for (i = 170; i <= 892; i += 38) {
        const newText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        newText.setAttribute('x', i);
        newText.setAttribute('y', '490');
        newText.setAttribute('font-family', 'Inter');
        newText.setAttribute('font-size', '18');
        newText.setAttribute('font-style', 'normal');
        newText.setAttribute('fill', 'black');
        newText.textContent = `${urutan[baca]}`;
        svg.appendChild(newText);
        baca++;
    }


}
