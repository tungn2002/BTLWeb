function loadb(){
    //Cap nhat vao bang khi form load
   let listVe=localStorage.getItem("list-ve") ? JSON.parse(localStorage.getItem("list-ve")):[] ;
   let html=``;
   listVe.map((value,index)=>{
           html+=`
           <tr>
               <td>${value.mave}</td>
               <td>${value.makh}</td>
               <td>${value.maghe}</td>
           </tr>
           `;
   });
       document.getElementById('tb1').innerHTML=`
       <thead>
           <tr>
               <th scope="col">Mã vé</th>
               <th scope="col">Mã khách hàng</th>
               <th scope="col">Mã ghế</th>
           </tr>
       </thead>
       <tbody>
               ${html}
       </tbody>
       `;
}
window.addEventListener('load', (event) => {
   loadb();
   let listUser=localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")):[] ;

   document.getElementById('thanhvien').innerHTML=listUser.length;
   
});
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
   el.classList.toggle("toggled");
};