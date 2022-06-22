        //Them khach hang mua truc tiep
        //do du lieu cac tai khoan
        function loadb(){
            let listUserNone=localStorage.getItem("list-user-none") ? JSON.parse(localStorage.getItem("list-user-none")):[] ;
            let html1=``;

            listUserNone.map((value,index)=>{
                    html1+=`
                    <tr>
                        <td>${value.makh}</td>
                        <td>${value.username}</td>
                        <td><button type="button" class="btn btn-primary" onclick="del(${index})">Xóa</button></td>
                    </tr>
                    `;
            });

                document.getElementById('tb1').innerHTML=`
                <thead>
                    <tr>
                        <th scope="col">Mã khách hàng</th>
                        <th scope="col">Khách hàng</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                        ${html1}
                </tbody>
                `;
        }
        window.addEventListener('load', (event) => {
            //Cap nhat vao bang 1 khi form load
            loadb();
            //Cap nhat vao bang 2 khi form load
            let listUser=localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")):[] ;
            let html=``;

            listUser.map((value,index)=>{
                    html+=`
                    <tr>
                        <td>${value.makh}</td>
                        <td>${value.username}</td>
                    </tr>
                    `;
            });

                document.getElementById('tb2').innerHTML=`
                <thead>
                    <tr>
                        <th scope="col">Mã khách hàng</th>
                        <th scope="col">Khách hàng</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                        ${html}
                </tbody>
                `;
        });
        function del(index){
            
            
            if (confirm('Bạn có chắc muốn xóa không?. Xóa khách sẽ xóa cả vé của khách!')) {

            //1. lay ra de xoa
            let listUserNone=localStorage.getItem("list-user-none") ? JSON.parse(localStorage.getItem("list-user-none")):[] ;
            var a=listUserNone[index].makh;
            //2, xoa
            listUserNone.splice(index,1);
            //3. day len local
            localStorage.setItem("list-user-none",JSON.stringify(listUserNone));
            //loadlai
            loadb();
            //xoa khach hang dan toi xoa ve
            let listVe=localStorage.getItem("list-ve") ? JSON.parse(localStorage.getItem("list-ve")):[] ;
            listVe.map((value,index)=>{
                if(value.makh==a){
                    listVe.splice(index,1);
                }
            });
            localStorage.setItem("list-ve",JSON.stringify(listVe));

        }
  
        }
        //side bar
        var el = document.getElementById("wrapper");
        var toggleButton = document.getElementById("menu-toggle");

        toggleButton.onclick = function () {
            el.classList.toggle("toggled");
        };