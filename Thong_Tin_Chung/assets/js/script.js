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
    const test = "./assets/img/" + this.files[0].name;
    let list = localStorage.getItem("list-kh") ? JSON.parse(localStorage.getItem("list-kh")) : [];
    list.push({
        avatar: test
    })
    localStorage.setItem("list-kh", JSON.stringify(list));
});

function loadding(){
    let list = localStorage.getItem("list-kh") ? JSON.parse(localStorage.getItem("list-kh")) : [];
    let change = ``;
    list.map((value, index)=>{
        change += `<img src="${value.avatar}" height="120" width="120" alt="AvatarProfile" class="img">`
    })
    document.getElementById('loadAvatar').innerHTML=change;
}