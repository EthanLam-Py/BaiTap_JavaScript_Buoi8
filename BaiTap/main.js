var daySoNguyen = [];
var daySoNguyenDuong = [];
var daySoNguyenAm = [];
var daySoThuc = [];

// Thêm Số
document.getElementById('themSo').addEventListener('click', themSo);
function themSo(){
    var inputInt = document.getElementById('inputInt').value;
    inputInt = parseInt(inputInt);

    daySoNguyen.push(inputInt);
    
    if(inputInt >= 0) {
        daySoNguyenDuong.push(inputInt);
    }else{
        daySoNguyenAm.push(inputInt);
    }

    var inMang_span = document.getElementById('inMang_span');
    inMang_span.innerHTML = daySoNguyen;

    var inMang_span = document.getElementById('inMang');
    inMang.style.display = 'block';
}

//tongSoDuong
document.getElementById('tongSoDuong').addEventListener('click', tongSoDuong);
function tongSoDuong(){

    var sumSoDuong = 0;
    for (var i = 0; i < daySoNguyenDuong.length; i++){
        sumSoDuong += daySoNguyenDuong[i];
    }

    var tongSoDuong__resultspan = document.getElementById('tongSoDuong__resultspan');
    tongSoDuong__resultspan.innerHTML = sumSoDuong;
}

//demSoDuong
document.getElementById('demSoDuong').addEventListener('click', demSoDuong);
function demSoDuong(){

    var SLSoDuong = daySoNguyenDuong.length;

    var demSoDuong__resultspan = document.getElementById('demSoDuong__resultspan');

    demSoDuong__resultspan.innerHTML = SLSoDuong;
}

//timMin
document.getElementById('timMin').addEventListener('click', timMin);
function timMin(){

    var timMin = Math.min.apply(null, daySoNguyen);

    var timMin__resultspan = document.getElementById('timMin__resultspan');

    timMin__resultspan.innerHTML = timMin;
    
}

//timDuongMin
document.getElementById('timDuongMin').addEventListener('click', timDuongMin);
function timDuongMin(){

    var timDuongMin = Math.min.apply(null, daySoNguyenDuong);

    var timDuongMin__resultspan = document.getElementById('timDuongMin__resultspan');

    timDuongMin__resultspan.innerHTML = timDuongMin;
    
}

//timChanCuoi
document.getElementById('timChanCuoi').addEventListener('click', timChanCuoi);
function timChanCuoi(){

    var timChanCuoi = 0;
    var listSoChan = [];

    for(var i=0; i < daySoNguyen.length; i++ ){
        if(daySoNguyen[i] % 2 === 0){
            listSoChan.push(daySoNguyen[i]);
        }
        else{
            continue;
        }
    }

    if(listSoChan.length > 0){
        timChanCuoi = listSoChan.slice(-1)[0];
    }else{
        timChanCuoi = -1;
    }

    var timChanCuoi__resultspan = document.getElementById('timChanCuoi__resultspan');

    timChanCuoi__resultspan.innerHTML = timChanCuoi;
    
}


//xepTangDan
document.getElementById('XepTangDan').addEventListener('click', XepTangDan);
function XepTangDan(){

    var XepTangDan = daySoNguyen.sort();

    var XepTangDan__resultspan = document.getElementById('XepTangDan__resultspan');

    XepTangDan__resultspan.innerHTML = XepTangDan;
    
}

//FirstSoNT
document.getElementById('FirstSoNT').addEventListener('click', FirstSoNT);
function FirstSoNT() {

    var FirstSoNT = -1;

    for(var x of daySoNguyen) {
        if(kiem_tra_snt(x)){
            FirstSoNT = x;
            break;
        }
        else{
            continue;
        }
    }

    var FirstSoNT__resultspan = document.getElementById('FirstSoNT__resultspan');

    FirstSoNT__resultspan.innerHTML = FirstSoNT;
}

function kiem_tra_snt(n)
{
    var flag = true;
 
    if (n <= 2){
        flag = false;
    }
    else{
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    return flag
}


//DemSoDuongAm
document.getElementById('DemSoDuongAm').addEventListener('click', DemSoDuongAm);
function DemSoDuongAm(){
    var SLSoDuong = daySoNguyenDuong.length;
    var SLSoAm = daySoNguyenAm.length;

    var soSanh = '';

    if(SLSoDuong > SLSoAm){
        var diff = SLSoDuong - SLSoAm;
        soSanh = 'số dương nhiều hơn ' + String(diff) + ' số'
    }
    else if (SLSoDuong < SLSoAm){
        var diff = SLSoAm - SLSoDuong;
        soSanh = 'số âm nhiều hơn ' + String(diff) + ' số'
    }
    else{
        soSanh = 'lượng số dương & âm bằng nhau'
    }

    var DemSLSoDuong__resultspan = document.getElementById('DemSLSoDuong__resultspan');
    DemSLSoDuong__resultspan.innerHTML = SLSoDuong;

    var DemSLSoAm__resultspan = document.getElementById('DemSLSoAm__resultspan');
    DemSLSoAm__resultspan.innerHTML = SLSoAm;

    var soSanh__resultspan = document.getElementById('soSanh__resultspan');
    soSanh__resultspan.innerHTML = soSanh;
}

//DoiCho2GT
document.getElementById('DoiCho2GT').addEventListener('click', DoiCho2GT);
function DoiCho2GT(){
    var index1 = document.getElementById('index1').value;
    index1 = parseInt(index1);
    index1 -= 1;

    var index2 = document.getElementById('index2').value;
    index2 = parseInt(index2);
    index2 -= 1;

    var daySoMoi = [...daySoNguyen];

    [daySoMoi[index1], daySoMoi[index2]] = [daySoMoi[index2], daySoMoi[index1]];

    var DoiCho2GT__resultspan = document.getElementById('DoiCho2GT__resultspan');
    DoiCho2GT__resultspan.innerHTML = daySoMoi;

}

//'ThemMangTimInt
// Thêm Số Thực
document.getElementById('them').addEventListener('click', them);
function them(){
    var input = document.getElementById('input').value;
    input = parseFloat(input);

    daySoThuc.push(input);
    
    var inMangMoi_span = document.getElementById('inMangMoi_span');
    inMangMoi_span.innerHTML = daySoNguyen.concat(daySoThuc);

    var inMangMoi_span = document.getElementById('inMangMoi');
    inMangMoi.style.display = 'block';
}
//ThemMangTimInt
document.getElementById('ThemMangTimInt').addEventListener('click', ThemMangTimInt);
function ThemMangTimInt(){
    var mangMoi = daySoNguyen.concat(daySoThuc);
    console.log(mangMoi);
    var i = 0;
    for(var x in mangMoi){
        if(isInt(x)){
            i += 1;
        }else{
            continue;
        }
    }

    var ThemMangTimInt__resultspan = document.getElementById('ThemMangTimInt__resultspan');
    ThemMangTimInt__resultspan.innerHTML = i;

    var inMangMoi_span = document.getElementById('inMangMoi_span');
    inMangMoi_span.innerHTML = mangMoi;
}

function isInt(n){
    if(n%1 ===0){
        return true
    }
    else{
        return false
    }
}

