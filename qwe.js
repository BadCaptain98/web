
function hitung(){
    var vharga= parseInt (document.formbarang.harga.value);
    var vjumlah= parseInt (document.formbarang.jumlah.value);

    var vtotalharga=vharga*vjumlah;
    document.formbarang.totalharga.value=vtotalharga;

    var vdiskon= parseInt (document.formbarang.diskon.value);

    var vtotalbayar = vtotalharga-vdiskon;
    document.formbarang.totalbayar.value=vtotalbayar;

    var vbonus;
    var vtotalbayar= parseInt (document.formbarang.totalbayar.value);

    if (vtotalbayar >= 100000){
        vbonus="payung";
    }else {
        vbonus="tidak ada";
    }
    document.formbarang.bonus.value=vbonus;
}