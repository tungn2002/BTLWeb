      //anh
      var anh1=document.getElementById('anh');
      var anh2=document.getElementById('anh2');
      var anh3=document.getElementById('anh3');
      var anh4=document.getElementById('anh4');
      var luu1="";
      var luu2="";
      var luu3="";
      var luu4="";
      anh1.addEventListener('change', function(){
        
       luu1= "./assets/img/" + this.files[0].name;
});
anh2.addEventListener('change', function(){
        
        luu2= "./assets/img/" + this.files[0].name;
 });
 anh3.addEventListener('change', function(){
        
        luu3= "./assets/img/" + this.files[0].name;
 });
 anh4.addEventListener('change', function(){
        
        luu4= "./assets/img/" + this.files[0].name;
 });
//
      window.addEventListener('load', (event) => {
            //Cap nhat vao bang khi form load
            loadFull();
            loadcb();
        });
      function loadcb(){
            let listFilm=localStorage.getItem("list-film") ? JSON.parse(localStorage.getItem("list-film")):[] ;
            let html=`<option>null</option>`;

            listFilm.map((value,index)=>{
                    html+=`
                    <option>${value.tenph}</option>
                    `;
            });

            var select=document.getElementById('tenphim');
            select.innerHTML=`
            ${html}
            `
            alert
            var select2=document.getElementById('tenphim2');
            select2.innerHTML=`
            ${html}
            `
            var select3=document.getElementById('tenphim3');
            select3.innerHTML=`
            ${html}
            `
            var select4=document.getElementById('tenphim4');
            select4.innerHTML=`
            ${html}
            `
        }
        //if ten phim ==null
        function edit(){//day len 4 trang
          var tenphim=document.getElementById('tenphim').value;
          var daodien=document.getElementById('daodien').value;
          var dienvien=document.getElementById('dienvien').value;
          var theloai=document.getElementById('theloai').value;
          var thoiluong=document.getElementById('thoiluong').value;
          var ngonngu=document.getElementById('ngonngu').value;
          var rated=document.getElementById('rated').value;
          var mota=document.getElementById('mota').value;
          if(tenphim==null||daodien==""||dienvien==""||theloai==""||thoiluong==""||ngonngu==""||rated==""||luu1=="")
          {
            alert("Phải nhập đủ thông tin");
          }
          else{
            let listTrang=localStorage.getItem("list-trang") ? JSON.parse(localStorage.getItem("list-trang")):[] ;
          listTrang.map((value,index)=>{
            if(value.matrang=='trang1')
            {
              listTrang[index]={
                    matrang:value.matrang,
                    tenphim:tenphim,
                    daodien:daodien,
                    dienvien:dienvien,
                    theloai:theloai,
                    thoiluong:thoiluong,
                    ngonngu:ngonngu,
                    rated:rated,
                    anh:luu1,
                    mota:mota,
              }
              localStorage.setItem("list-trang",JSON.stringify(listTrang));

            }  
          });
          }
          
        }
        function edit2(){//day len 4 trang
          var tenphim=document.getElementById('tenphim2').value;
          var daodien=document.getElementById('daodien2').value;
          var dienvien=document.getElementById('dienvien2').value;
          var theloai=document.getElementById('theloai2').value;
          var thoiluong=document.getElementById('thoiluong2').value;
          var ngonngu=document.getElementById('ngonngu2').value;
          var rated=document.getElementById('rated2').value;
       
          var mota=document.getElementById('mota2').value;
          if(tenphim==null||daodien==""||dienvien==""||theloai==""||thoiluong==""||ngonngu==""||rated==""||luu2=="")
          {
            alert("Phải nhập đủ thông tin");
          }
          else{
          let listTrang=localStorage.getItem("list-trang") ? JSON.parse(localStorage.getItem("list-trang")):[] ;
          listTrang.map((value,index)=>{
            if(value.matrang=='trang2')
            {
              listTrang[index]={
                    matrang:value.matrang,
                    tenphim:tenphim,
                    daodien:daodien,
                    dienvien:dienvien,
                    theloai:theloai,
                    thoiluong:thoiluong,
                    ngonngu:ngonngu,
                    rated:rated,
                    anh:luu2,
                    mota:mota,
              }
              localStorage.setItem("list-trang",JSON.stringify(listTrang));

            }  
          });
        }
        }
        function edit3(){//day len 4 trang
          var tenphim=document.getElementById('tenphim3').value;
          var daodien=document.getElementById('daodien3').value;
          var dienvien=document.getElementById('dienvien3').value;
          var theloai=document.getElementById('theloai3').value;
          var thoiluong=document.getElementById('thoiluong3').value;
          var ngonngu=document.getElementById('ngonngu3').value;
          var rated=document.getElementById('rated3').value;
         
          var mota=document.getElementById('mota3').value;
          if(tenphim==null||daodien==""||dienvien==""||theloai==""||thoiluong==""||ngonngu==""||rated==""||luu3=="")
          {
            alert("Phải nhập đủ thông tin");
          }
          else{
          let listTrang=localStorage.getItem("list-trang") ? JSON.parse(localStorage.getItem("list-trang")):[] ;
          listTrang.map((value,index)=>{
            if(value.matrang=='trang3')
            {
              listTrang[index]={
                    matrang:value.matrang,
                    tenphim:tenphim,
                    daodien:daodien,
                    dienvien:dienvien,
                    theloai:theloai,
                    thoiluong:thoiluong,
                    ngonngu:ngonngu,
                    rated:rated,
                    anh:luu3,
                    mota:mota,
              }
              localStorage.setItem("list-trang",JSON.stringify(listTrang));

            }  
          });
        }
        }
        function edit4(){//day len 4 trang
          var tenphim=document.getElementById('tenphim4').value;
          var daodien=document.getElementById('daodien4').value;
          var dienvien=document.getElementById('dienvien4').value;
          var theloai=document.getElementById('theloai4').value;
          var thoiluong=document.getElementById('thoiluong4').value;
          var ngonngu=document.getElementById('ngonngu4').value;
          var rated=document.getElementById('rated4').value;
          var mota=document.getElementById('mota4').value;
          if(tenphim==null||daodien==""||dienvien==""||theloai==""||thoiluong==""||ngonngu==""||rated==""||luu4=="")
          {
            alert("Phải nhập đủ thông tin");
          }
          else{
            let listTrang=localStorage.getItem("list-trang") ? JSON.parse(localStorage.getItem("list-trang")):[] ;
            listTrang.map((value,index)=>{
              if(value.matrang=='trang4')
              {
                
                listTrang[index]={
                  matrang:value.matrang,
                  tenphim:tenphim,
                  daodien:daodien,
                  dienvien:dienvien,
                  theloai:theloai,
                  thoiluong:thoiluong,
                  ngonngu:ngonngu,
                  rated:rated,
                  anh:luu4,
                  mota:mota,
                }
                localStorage.setItem("list-trang",JSON.stringify(listTrang));

              }  
            });
        }
        }
        function loadFull(){
          let listTrang=localStorage.getItem("list-trang") ? JSON.parse(localStorage.getItem("list-trang")):[] ;
          if(listTrang.length==0){
            for(let i=1;i<=4;i++){
              listTrang.push({
                    matrang:"trang"+i,
                    tenphim:"",
                    daodien:"",
                    dienvien:"",
                    theloai:"",
                    thoiluong:"",
                    ngonngu:"",
                    rated:"",
                    anh:"",
                    mota:"",
                    });
            }                    
            localStorage.setItem("list-trang",JSON.stringify(listTrang));
          }
        }
        var el = document.getElementById("wrapper");
        var toggleButton = document.getElementById("menu-toggle");

        toggleButton.onclick = function () {
            el.classList.toggle("toggled");
        };