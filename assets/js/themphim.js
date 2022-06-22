function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";        
    for (var i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
function add(){

    var tenph=document.getElementById('name').value;
    if(tenph==""){
        alert("Nhập tên phim");
    }
    else{
    let listFilm=localStorage.getItem("list-film") ? JSON.parse(localStorage.getItem("list-film")):[] ;
    listFilm.push({
        maph:makeid(),
        tenph : tenph,
    });
    localStorage.setItem("list-film",JSON.stringify(listFilm));
    }

}
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};