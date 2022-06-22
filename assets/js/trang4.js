//load du lieu
window.addEventListener('load', (event) => {
    let listTrang=localStorage.getItem("list-trang") ? JSON.parse(localStorage.getItem("list-trang")):[] ;
    var nam=document.getElementById("ND");  
    var nammm=document.getElementById("NNN");  
    nam.innerHTML= `<div class="Img">
    <img src="${listTrang[3].anh}" width="250px" />
</div>
<div class="Describe">
    <h1 class="Name">${listTrang[3].tenphim}</h1>
    <br>
    <div class="wa">
        <div class="wa1">
            <label>Đạo Diễn: </label>
            <div class="std">${listTrang[3].daodien}</div>
        </div>
        <div class="wa1">
            <label>Diễn viên: </label>
            <div class="std">
            ${listTrang[3].dienvien}
            </div>
        </div>
        <div class="wa1">
            <label>Thể loại: </label>
            <div class="std">${listTrang[3].theloai}</div>
        </div>

        <div class="wa1">
            <label>Thời lượng: </label>
            <div class="std">${listTrang[3].thoiluong}</div>
        </div>
        <div class="wa1">
            <label>Ngôn ngữ: </label>
            <div class="std">${listTrang[3].ngonngu}</div>
        </div>
        <div class="wa1">
            <label>Rated: </label>
            <div class="std_Rated">
                &nbsp; C13 - Phim cấm khán giả dưới 13 tuổi
            </div>
        </div>
    </div>
    <div class="wa3">
        <button class="bt1">3D</button>
        <button class="bt2">4DX</button>
        <button class="bt3">IMAX</button>
    </div>
    <br />
    
    <button class="wa2">Chi tiết</button>
</div>`;
nammm.innerHTML=`${listTrang[3].mota}
`;
loadCa(listTrang[3].tenphim);
 });
//load ca chieu len trang web

function loadCa(tenphim){
    let listCa=localStorage.getItem("list-ca") ? JSON.parse(localStorage.getItem("list-ca")):[] ;
    let listFilm=localStorage.getItem("list-film") ? JSON.parse(localStorage.getItem("list-film")):[] ;
    var maphim="";
    listFilm.map((value,index)=>{
      if(tenphim==value.tenph){
            maphim=value.maph;
      }
    });
    var ca=document.getElementById("ca");
    let html=``;
    listCa.map((value,index)=>{
        if(value.maph==maphim){
                    html+=`
        <li class="Sub_Curent" onclick="loadGhe(${index})">${value.maca}</li>`;

        }

    });
    ca.innerHTML=html;
}
//load ghe khi an vao ca
function loadGhe(imaca){
    let listVe=localStorage.getItem("list-ve") ? JSON.parse(localStorage.getItem("list-ve")):[] ;
    var a=" ";
    for(let i=0;i<listVe.length;i++){
        a+=listVe[i].maghe+" ";
    }
    let listCa=localStorage.getItem("list-ca") ? JSON.parse(localStorage.getItem("list-ca")):[] ;
    document.getElementById('cad').innerHTML=`${listCa[imaca].maca}`;
    document.getElementById('ghed').innerHTML=``;
    document.getElementById('giaghed').innerHTML=``;
    var html=``; 
    
    let listGhe=localStorage.getItem("list-ghe") ? JSON.parse(localStorage.getItem("list-ghe")):[] ;
    listGhe.map((value,index)=>{
        if(value.maca==listCa[imaca].maca){
            if(a.search(value.maghe)==-1){
                    html+=`<div price="${value.giaghe}" onclick="dat(${index})">${value.maghe}</div>
            `;
            }
            else{
                html+=`<div style="pointer-events: none;background-color:gray; color:white" price="${value.giaghe}" onclick="dat(${index})">${value.maghe}</div>
                `;
            }

          
        };
    });
document.getElementById('chonghe').innerHTML=html;
}
function dat(imaghe){
    let listGhe=localStorage.getItem("list-ghe") ? JSON.parse(localStorage.getItem("list-ghe")):[] ;
    document.getElementById('ghed').innerHTML=`${listGhe[imaghe].maghe}`;
    document.getElementById('giaghed').innerHTML=`${listGhe[imaghe].giaghe}`;
    
}
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
function muave(){
    //neu da mua ve se hien ra tb xoa ve cu va mua ve moi
    let listVe=localStorage.getItem("list-ve") ? JSON.parse(localStorage.getItem("list-ve")):[] ;
    var a=[];
    for(let i=0;i<listVe.length;i++){
        a.push(listVe[3].makh);
    }

    let listUser=localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")):[] ;
    listUser.map((value,index)=>{
        if(value.login=="logging"){
            if(a.indexOf(value.makh)==-1)
            listVe.push({
                mave:makeid(),
                makh:value.makh,
                maghe:document.getElementById('ghed').innerHTML,
            });
            else{
                if(confirm('Bạn đã mua vé bạn có muốn xóa vé cũ và đặt vé mới không?')){
                    var macu=listVe[a.indexOf(value.makh)].mave;
                    listVe[a.indexOf(value.makh)]={
                        mave:macu,
                        makh:value.makh,
                        maghe:document.getElementById('ghed').innerHTML,
                    }
                }
               
            }
            localStorage.setItem("list-ve",JSON.stringify(listVe));
        }
    });
    window.location.reload();
}