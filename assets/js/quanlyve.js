window.addEventListener('load', (event) => {
    loadb();
    loadcbkh();
    loadcbg();
 });
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
                 <td><button type="button" class="btn btn-primary" onclick="del(${index})">Xóa</button></td>
             </tr>
             `;
     });
         document.getElementById('tb1').innerHTML=`
         <thead>
             <tr>
                 <th scope="col">Mã vé</th>
                 <th scope="col">Mã khách hàng</th>
                 <th scope="col">Mã ghế</th>
                 <th scope="col">Tùy chỉnh</th>
             </tr>
         </thead>
         <tbody>
                 ${html}
         </tbody>
         `;
 }
 function loadcbkh(){

     //chi load kh ko co tk
     
     let listUserNone=localStorage.getItem("list-user-none") ? JSON.parse(localStorage.getItem("list-user-none")):[] ;
     let html=`<option>null</option>`;

     listUserNone.map((value,index)=>{
             html+=`
             <option>${value.makh}</option>
             `;
     });

     var select=document.getElementById('makh');
     select.innerHTML=`
     ${html}
     `;
 }
 function loadcbg(){

     //khong load ghe da dc ngoi
     let listVe=localStorage.getItem("list-ve") ? JSON.parse(localStorage.getItem("list-ve")):[] ;
     let text="";
     listVe.map((value,index)=>{
          text+=value.maghe+" ";
     });

     let listGhe=localStorage.getItem("list-ghe") ? JSON.parse(localStorage.getItem("list-ghe")):[] ;
     let html=`<option>null</option>`;

     listGhe.map((value,index)=>{
         if(text.search(value.maghe)<0){
             html+=`
             <option>${value.maghe}</option>
             `;
         }

     });

     var select=document.getElementById('maghe');
     select.innerHTML=`
     ${html}
     `;
     /*
     
     let listGhe=localStorage.getItem("list-ghe") ? JSON.parse(localStorage.getItem("list-ghe")):[] ;
     let html=`<option>null</option>`;

     listGhe.map((value,index)=>{
             html+=`
             <option>${value.maghe}</option>
             `;
     });

     var select=document.getElementById('maghe');
     select.innerHTML=`
     ${html}
     `;
    */
 }
 function add(){
     var mave=document.getElementById('mave').value;

     var select=document.getElementById('makh');
     var makh=select.options[select.selectedIndex].value;

     var select2=document.getElementById('maghe');
     var maghe=select2.options[select2.selectedIndex].value;

     if(mave==""||makh=='null'||maghe=='null'){
         alert("Phải nhập đủ thông tin");
     }
     else{
         let listVe=localStorage.getItem("list-ve") ? JSON.parse(localStorage.getItem("list-ve")):[] ;

         var trung=0;
         listVe.map((value,index)=>{
             if(value.mave==mave){
                 trung++;
             }
         });
         if(trung>0){
             alert("Mã vé đã tồn tại");
         }
         else{
             listVe.push({
                 mave:mave,
                 makh:makh,
                 maghe:maghe,
             });
             localStorage.setItem("list-ve",JSON.stringify(listVe));
             loadcbg();
         } 
     }
 


     
 }
 function del(index){
     if (confirm('Bạn có chắc muốn xóa không?')) {
     //1. lay ra de xoa
     let listVe=localStorage.getItem("list-ve") ? JSON.parse(localStorage.getItem("list-ve")):[] ;
     //2, xoa
     listVe.splice(index,1);
     //3. day len local
     localStorage.setItem("list-ve",JSON.stringify(listVe));
     //loadlai
     loadb();
     loadcbg();
     }
     
 }
 var el = document.getElementById("wrapper");
 var toggleButton = document.getElementById("menu-toggle");

 toggleButton.onclick = function () {
     el.classList.toggle("toggled");
 };