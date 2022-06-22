window.addEventListener('load', (event) => {
    //Cap nhat vao bang khi form load
    loadfull();
    loadb();
    loadcb();
    var a=document.getElementById('time2');
});
function kiemtragio(){
    var a=document.getElementById('time1');
    if(a.value<0){
        a.value=0;
    }
    else if(a.value>24){
        a.value=24;
    }
}
function kiemtraphut(){
    var a=document.getElementById('time2');
    if(a.value<0){
        a.value=0;
    }
    else if(a.value>60){
        a.value=59;
    } 
}
function loadb(){
    let listCa=localStorage.getItem("list-ca") ? JSON.parse(localStorage.getItem("list-ca")):[] ;
    let html=``;
    listCa.map((value,index)=>{
            html+=`
            <tr>
                <td>${value.maca}</td>
                <td>${value.maph}</td>
            </tr>
            `;
    });
        document.getElementById('tb1').innerHTML=`
        <thead>
            <tr>
                <th scope="col">Ca</th>
                <th scope="col">Mã phim</th>
            </tr>
        </thead>
        <tbody>
                ${html}
        </tbody>
        `;
}

function edit(){
    var maca1=document.getElementById('time1').value;
    var maca2=document.getElementById('time2').value; 
    var select=document.getElementById('name2');
    var name2=select.options[select.selectedIndex].value;
    if(maca1=="" ||maca2==""){
        alert("Phải nhập đủ thông tin");
    }
    else{
        if(maca1<10){
        maca1="0"+maca1;
    }
    if(maca2<10 || Number(maca)=='0'){
        maca2="0"+maca2;
    }
    var maca=maca1+":"+maca2;

    let listCa=localStorage.getItem("list-ca") ? JSON.parse(localStorage.getItem("list-ca")):[] ;
    listCa.map((value,index)=>{
        if(value.maca==maca){
            listCa[index]={
                maca:maca,
                maph: name2,
            }
            localStorage.setItem("list-ca",JSON.stringify(listCa));
        }
    });
    loadb();
    }
    
}
function loadcb(){
    let listFilm=localStorage.getItem("list-film") ? JSON.parse(localStorage.getItem("list-film")):[] ;
    let html=`<option>null</option>`;

    listFilm.map((value,index)=>{
            html+=`
            <option>${value.maph}</option>
            `;
    });

    var select=document.getElementById('name2');
    select.innerHTML=`
    ${html}
    `
}
function loadfull(){
    let listCa=localStorage.getItem("list-ca") ? JSON.parse(localStorage.getItem("list-ca")):[] ;
    if(listCa.length==0){
        for(let i=8;i<=20;i+=2)
        listCa.push({
            maca:(i<10) ? ("0"+i+":00"):(i+":00"),
            maph: null,
        });
        localStorage.setItem("list-ca",JSON.stringify(listCa));
    }
}
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};