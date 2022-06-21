const input = document.querySelector('.input_box');
const photo = document.querySelector('.img');
const file = document.querySelector('.input_text');
const btnchange = document.querySelector('.btnphoto');

file.addEventListener('change', function(){
    const chooseFile = this.files[0];
    if(chooseFile){
        const reader = new FileReader();

        reader.addEventListener('load', function(){
            photo.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(chooseFile);
    }
    let list = localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")) : [];
    list.map((value, index)=>{
        if(value.login='logging'){
            const test = "./assets/img/" + this.files[0].name;
            value.avatar = test;
            localStorage.setItem("list-user", JSON.stringify(list));
        }
        else{
            alert("Bạn chưa đăng nhập");
        }
    })
    loadding();
});

function loadding(){
    let list = localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")) : [];
    let change = ``;
    let loadinfor = ``;
    list.map((value, index)=>{
        if(value.login=='logging'){
            if(value.avatar=='null'){
                let change = `<img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon-profile-cgv.png" height="120" width="120" alt="AvatarProfile" class="img">`;
                loadinfor = `<p>Mã khách hàng: ${value.makh}</p>
                <p>Họ và tên: ${value.username}</p>
                <p>Email: ${value.email}</p>
                <p>Số điện thoại: ${value.phonenumber}</p>`;
                document.getElementById('loadAvatar').innerHTML=change;
                document.getElementById('thongtin').innerHTML=loadinfor;
            }
            else{
                change = `<img src="${value.avatar}" height="120" width="120" alt="AvatarProfile" class="img">`;
                loadinfor = `<p>Mã khách hàng: ${value.makh}</p>
                <p>Họ và tên: ${value.username}</p>
                <p>Email: ${value.email}</p>
                <p>Số điện thoại: ${value.phonenumber}</p>`;
                document.getElementById('loadAvatar').innerHTML=change;
                document.getElementById('thongtin').innerHTML=loadinfor;
            }
        }
        else{
            let change = `<img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon-profile-cgv.png" height="120" width="120" alt="AvatarProfile" class="img">`;
                loadinfor = ``;
                document.getElementById('loadAvatar').innerHTML=change;
                document.getElementById('thongtin').innerHTML=loadinfor;
        }

    })
}