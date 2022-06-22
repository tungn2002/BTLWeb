function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";        
    for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
function add(){
    var username=document.getElementById('name').value;
    if(username==""){
        alert("Nhập tên cần thêm");
    }
    else{
                       let listUserNone=localStorage.getItem("list-user-none") ? JSON.parse(localStorage.getItem("list-user-none")):[] ;
        listUserNone.push({
            makh:makeid(),
            username : username,
        });
        localStorage.setItem("list-user-none",JSON.stringify(listUserNone));
    }
   

}

var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};