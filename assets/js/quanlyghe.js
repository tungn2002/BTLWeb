function loadb(){
    let listGhe=localStorage.getItem("list-ghe") ? JSON.parse(localStorage.getItem("list-ghe")):[] ;
    let html=``;
    listGhe.map((value,index)=>{
            html+=`
            <tr>
                <td>${value.maghe}</td>
                <td>${value.giaghe}</td>
                <td>${value.maca}</td>
            </tr>
            `;
    });
        document.getElementById('tb1').innerHTML=`
        <thead>
            <tr>
                <th scope="col">Mã ghế</th>
                <th scope="col">Giá ghế</th>
                <th scope="col">Ca</th>
            </tr>
        </thead>
        <tbody>
                ${html}
        </tbody>
        `;
}
window.addEventListener('load', (event) => {
    //Cap nhat vao bang khi form load
    loadfull();
    loadb();
});

function loadfull(){
    let listCa=localStorage.getItem("list-ca") ? JSON.parse(localStorage.getItem("list-ca")):[] ;
    let listGhe=localStorage.getItem("list-ghe") ? JSON.parse(localStorage.getItem("list-ghe")):[] ;
    if(listGhe.length==0){
        var num=1;
        listCa.map((value,index)=>{
            for(let i=1;i<=16;i++){
                listGhe.push({
                maghe:String.fromCharCode(num + 64)+i,
                giaghe:100000,
                maca:value.maca,
                });
            }
            num++;
        });
        localStorage.setItem("list-ghe",JSON.stringify(listGhe));
    }
    
}
function edit(){
    var maghe=document.getElementById('name');
    var giaghe=document.getElementById('name3');
    if(maghe.value==""||giaghe.value==""){
        alert("Phải nhập đủ thông tin");
    }
    else{
        var trung=0;
        let listGhe=localStorage.getItem("list-ghe") ? JSON.parse(localStorage.getItem("list-ghe")):[] ;
        listGhe.map((value,index)=>{
            if(maghe.value==value.maghe){
                trung++;
                listGhe[index]={
                    maghe:maghe.value,
                    giaghe:giaghe.value,
                    maca:value.maca
                }
                localStorage.setItem("list-ghe",JSON.stringify(listGhe));
            }
        });
        if(trung==0){
            alert("Mã ghế cần sửa không tồn tại.");
        }
    }
}
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};