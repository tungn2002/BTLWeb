window.addEventListener('load', (event) => {
    //Cap nhat vao bang khi form load
    let listFilm=localStorage.getItem("list-film") ? JSON.parse(localStorage.getItem("list-film")):[] ;
    let html=``;

    listFilm.map((value,index)=>{
            html+=`
            <tr>
                <td>${value.maph}</td>
                <td>${value.tenph}</td>
                <td><button type="button" class="btn btn-primary" onclick="del(${index})">Xóa</button></td>
            </tr>
            `;
    });
        document.getElementById('tb1').innerHTML=`
        <thead>
            <tr>
                <th scope="col">Mã phim</th>
                <th scope="col">Tên phim</th>
                <th scope="col">Tùy chọn</th>
            </tr>
        </thead>
        <tbody>
                ${html}
        </tbody>
        `;
});
function del(index){
    if (confirm('Bạn có chắc muốn xóa không?')) {
    //1. lay ra de xoa
    let listFilm=localStorage.getItem("list-film") ? JSON.parse(localStorage.getItem("list-film")):[] ;
    //2, xoa
    listFilm.splice(index,1);
    //3. day len local
    localStorage.setItem("list-film",JSON.stringify(listFilm));
    window.location.reload();
    }
    
}
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};