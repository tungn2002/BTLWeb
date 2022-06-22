window.addEventListener('load', (event) => {
    listUser=localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")):[] ;
    var kt=0;
    listUser.map((value,index)=>{
        if(value.login=='logging'){
            kt++;
        }
    });
    if(kt==0){
        let listTrang=localStorage.getItem("list-trang") ? JSON.parse(localStorage.getItem("list-trang")):[] ;
    document.getElementById('c5main').innerHTML=`
            <div class="c5_1">
                    <img src="${listTrang[0].anh}" alt="">
                    <h2><strong>${listTrang[0].tenphim}</strong></h2>
                    <p><strong>Thể loại: </strong>${listTrang[0].theloai}</p>
                    <p><strong>Thời lượng: </strong>${listTrang[0].thoiluong}</p>
                    <div class="button">
                    <a href="dangnhap.html">mua vé</a>                    </div>
                </div>
                <div class="c5_2">
                    <img src="${listTrang[1].anh}" alt="">
                    <h2><strong>${listTrang[1].tenphim}</strong></h2>
                    <p><strong>Thể loại: </strong>${listTrang[1].theloai}</p>
                    <p><strong>Thời lượng: </strong>${listTrang[1].thoiluong}</p>
                    <div class="button">
                    <a href="dangnhap.html">mua vé</a>                    </div>
                </div>
                <div class="c5_3">
                    <img src="${listTrang[2].anh}" alt="">
                    <h2><strong>${listTrang[2].tenphim}</strong></h2>
                    <p><strong>Thể loại: </strong>${listTrang[2].theloai}</p>
                    <p><strong>Thời lượng: </strong>${listTrang[2].thoiluong}</p>
                    <div class="button">
                    <a href="dangnhap.html">mua vé</a>                    </div>
                </div>
                <div class="c5_4">
                    <img src="${listTrang[3].anh}" alt="">
                    <h2><strong>${listTrang[3].tenphim}</strong></h2>
                    <p><strong>Thể loại: </strong>${listTrang[3].theloai}</p>
                    <p><strong>Thời lượng: </strong>${listTrang[3].thoiluong}</p>
                    <div class="button">
                    <a href="dangnhap.html">mua vé</a>                    </div>
                </div>
    `;
    }else{
        let listTrang=localStorage.getItem("list-trang") ? JSON.parse(localStorage.getItem("list-trang")):[] ;
    document.getElementById('c5main').innerHTML=`
            <div class="c5_1">
                    <img src="${listTrang[0].anh}" alt="">
                    <h2><strong>${listTrang[0].tenphim}</strong></h2>
                    <p><strong>Thể loại: </strong>${listTrang[0].theloai}</p>
                    <p><strong>Thời lượng: </strong>${listTrang[0].thoiluong}</p>
                    <div class="button">
                    <a href="trang1.html">mua vé</a>                    </div>
                </div>
                <div class="c5_2">
                    <img src="${listTrang[1].anh}" alt="">
                    <h2><strong>${listTrang[1].tenphim}</strong></h2>
                    <p><strong>Thể loại: </strong>${listTrang[1].theloai}</p>
                    <p><strong>Thời lượng: </strong>${listTrang[1].thoiluong}</p>
                    <div class="button">
                    <a href="trang2.html">mua vé</a>                    </div>
                </div>
                <div class="c5_3">
                    <img src="${listTrang[2].anh}" alt="">
                    <h2><strong>${listTrang[2].tenphim}</strong></h2>
                    <p><strong>Thể loại: </strong>${listTrang[2].theloai}</p>
                    <p><strong>Thời lượng: </strong>${listTrang[2].thoiluong}</p>
                    <div class="button">
                    <a href="trang3.html">mua vé</a>                    </div>
                </div>
                <div class="c5_4">
                    <img src="${listTrang[3].anh}" alt="">
                    <h2><strong>${listTrang[3].tenphim}</strong></h2>
                    <p><strong>Thể loại: </strong>${listTrang[3].theloai}</p>
                    <p><strong>Thời lượng: </strong>${listTrang[3].thoiluong}</p>
                    <div class="button">
                    <a href="trang4.html">mua vé</a>                    </div>
                </div>
    `;
    }
    
});