//untuk menggunakan mathjax
MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
};

//function perhitungan semua rumus dan menampilkan pada web
function rumus(tipe) {
    let x = document.getElementById('m1').value;
    let y = document.getElementById('m2').value;
    let z = document.getElementById('mean').value;

    x = parseFloat(x);
    y = parseFloat(y);
    z = parseFloat(z);
    if (!validateInput(x, y)) {
        return; // Jika input tidak valid, hentikan eksekusi fungsi angka
    }

    let mu = 1 / z //lambda
    let pdfX = mu * Math.pow(Math.E, -mu * x); // PDF untuk x1
    let pdfY = mu * Math.pow(Math.E, -mu * y); // PDF untuk x2
    //rumus cdf
    let hasil1 = 1 - Math.pow(Math.E, -mu * x); //cdf untuk x1
    let hasil2 = Math.pow(Math.E, -mu * y); //cdf untuk x2
    let hasil3 = Math.pow(Math.E, -mu * x) - Math.pow(Math.E, -mu * y); //cdf untuk selisih x1 dan x2

    // Konversi hasil ke persentase
    let hasil1Persen = (hasil1 * 100).toFixed(1) + '%';
    let hasil2Persen = (hasil2 * 100).toFixed(1) + '%';
    let hasil3Persen = (hasil3 * 100).toFixed(1) + '%';

    //menampilkan jawaban dalam tampilan
    let div = document.getElementById('bc');
    div.innerHTML = ""; // Clear previous results

    //menampilkan rate parameter
    let rateParameter = document.createElement('h4');
    rateParameter.innerHTML = ` \\( \\mu \\) = ${z} <br> \\( \\lambda \\) = \\( \\frac{1}{\\mu} \\) = ${mu.toFixed(3)} <br>`;
    div.appendChild(rateParameter);
    MathJax.typeset();

    //if else agar munculnya tidak bersamaan
    if (tipe === 1) {

        //deskripsi sedikit
        let deskripsiX1 = document.createElement('h3')
        deskripsiX1.innerHTML = `PDF dan CDF inputan x<sub>1</sub> <br>`
        div.appendChild(deskripsiX1)

        //menampilkan pdf x1
        let tampilanPdfX1 = document.createElement('h4')
        tampilanPdfX1.innerHTML = `<br><strong>PDF </strong> <br> 
                                f(x)=\\( \\lambda \\)e<sup>-\\( \\lambda \\)x</sup> = 
                                ${mu.toFixed(3)} x 2,71828<sup>${mu.toFixed(3)}.${x}</sup> = ${pdfX.toFixed(3)}`
        div.appendChild(tampilanPdfX1);
        MathJax.typeset();

        //menampilkan cdf x1
        let h3Baru1 = document.createElement('h4');
        h3Baru1.innerHTML = `<br><strong>CDF <br>P(X ≤ x<sub>1</sub>)</strong> <br>
                             1 - e<sup>-\\(\\lambda\\)x</sup> = ${hasil1.toFixed(3)} = ${hasil1Persen}`;
        div.appendChild(h3Baru1);
        MathJax.typeset();

    } else if (tipe === 2) {

        //deskripsi sedikit
        let deskripsiX2 = document.createElement('h3')
        deskripsiX2.innerHTML = `PDF dan CDF inputan x<sub>2</sub> <br>`
        div.appendChild(deskripsiX2)

        //menampilkan pdf x2
        let tampilanPdfX2 = document.createElement('h4')
        tampilanPdfX2.innerHTML = `<br><strong>PDF x1</strong> <br> 
                                f(x)=\\( \\lambda \\)e<sup>-\\( \\lambda \\)x</sup> = 
                                ${mu.toFixed(3)} x 2,71828<sup>${mu.toFixed(3)}.${y}</sup> = ${pdfY.toFixed(3)}`
        div.appendChild(tampilanPdfX2);
        MathJax.typeset();

        //menampilkan cdf x2
        let h3Baru2 = document.createElement('h4');
        h3Baru2.innerHTML = `<br><strong>CDF <br>P(X > x<sub>2</sub>)</strong> <br>
                             e<sup>-\\(\\lambda\\)x</sup> = ${hasil2.toFixed(3)} =  ${hasil2Persen}`;
        div.appendChild(h3Baru2);
        MathJax.typeset();

    } else if (tipe === 3) {

        //deskripsi sedikit
        let deskripsiX1X2 = document.createElement('h3')
        deskripsiX1X2.innerHTML = `Selisih CDF inputan x<sub>1</sub> dan x<sub>2</sub> <br>`
        div.appendChild(deskripsiX1X2)

        //menampilkan selisih cdf x1 dan x2
        let h3Baru3 = document.createElement('h4');
        h3Baru3.innerHTML = `<br><strong>CDF SELISIH <br>P(x<sub>1</sub> X < x<sub>2</sub>)</strong> <br> 
                        e<sup>-\\(\\lambda\\)x</sup> - e<sup>-\\(\\lambda\\)x</sup> = ${hasil3.toFixed(3)} =  ${hasil3Persen}`;
        div.appendChild(h3Baru3);
        MathJax.typeset();

    }

    //deskripsi simbol
    let deskripsiSimbol = document.createElement('h3')
    deskripsiSimbol.innerHTML = `<br><br>\\(\\mu\\) = Inputan \\(\\mu\\) <br>
                                \\(\\lambda\\) = \\( \\frac{1}{\\mu} \\) <br>
                                x<sub>1</sub> = Inputan x1 <br>
                                x<sub>2</sub > = inputan x2`
    div.appendChild(deskripsiSimbol)
    MathJax.typeset();

}

