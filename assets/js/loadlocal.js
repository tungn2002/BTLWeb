window.addEventListener("load",function(){

        window.localStorage.clear();
        loadfullca();
        loadfullghe();
        loadfullkhachhang();
        loadfullphim();
        loadfullweb();
        window.location.href = "trangchu.html";

    
});
function loadfullca(){
    let listCa=localStorage.getItem("list-ca") ? JSON.parse(localStorage.getItem("list-ca")):[] ;
        listCa.push({
            maca:"08:00",
            maph: "hhe2821",
        });
        listCa.push({
            maca:"10:00",
            maph: "jd2j222",
        });
        listCa.push({
            maca:"12:00",
            maph: "qteww22",
        });
        listCa.push({
            maca:"14:00",
            maph: "e2211jj",
        });
        for(let i=16;i<=20;i+=2)
        listCa.push({
            maca:(i<10) ? ("0"+i+":00"):(i+":00"),
            maph: null,
        });
        localStorage.setItem("list-ca",JSON.stringify(listCa));
    
}
function loadfullghe(){
    let listCa=localStorage.getItem("list-ca") ? JSON.parse(localStorage.getItem("list-ca")):[] ;
    let listGhe=localStorage.getItem("list-ghe") ? JSON.parse(localStorage.getItem("list-ghe")):[] ;
        var num=1;
        listCa.map((value,index)=>{
            for(let i=1;i<=16;i++){
                listGhe.push({
                maghe:String.fromCharCode(num + 64)+i,
                giaghe:100000,
                maca:value.maca,
                });
            }
            num++;
        });
        localStorage.setItem("list-ghe",JSON.stringify(listGhe));
    
}

function loadfullkhachhang(){

    let listUserNone=localStorage.getItem("list-user-none") ? JSON.parse(localStorage.getItem("list-user-none")):[] ;
        listUserNone.push({
            makh:"je2821",
            username : "Khach hang 1",
        });
        localStorage.setItem("list-user-none",JSON.stringify(listUserNone));


}

function loadfullphim(){

    let listFilm=localStorage.getItem("list-film") ? JSON.parse(localStorage.getItem("list-film")):[] ;
    listFilm.push({
        maph:"hhe2821",
        tenph : "Em và Trịnh",
    });
    listFilm.push({
        maph:"jd2j222",
        tenph : "Thế giới khủng long",
    });
    listFilm.push({
        maph:"qteww22",
        tenph : "Phi công siêu đẳng",
    });
    listFilm.push({
        maph:"e2211jj",
        tenph : "Harry Potter",
    });
    localStorage.setItem("list-film",JSON.stringify(listFilm));
    
}
function loadfullweb(){
    let listTrang=localStorage.getItem("list-trang") ? JSON.parse(localStorage.getItem("list-trang")):[] ;
    listTrang.push({
        matrang:"trang1",
        tenphim:"Em và Trịnh",
        daodien:"Phan Gia Nhật Linh",
        dienvien:"Trần Lực",
        theloai:"Tình cảm",
        thoiluong:"136 phút",
        ngonngu:"Tiếng việt",
        rated:"Cấm khán giả dưới 13 tuổi",
        anh:"./assets/img/emvatrinh.jpg",
        mota:"Cuộc gặp gỡ định mệnh giữa Trịnh Công Sơn và nữ sinh viên Nhật Bản Michiko tại Paris năm 1990 đã mở ra một mối duyên kỳ ngộ. Từ đây bắt đầu hành trình ngược dòng thời gian, khám phá tuổi thanh xuân và tình yêu của người nhạc sĩ tài hoa với các nàng thơ Thanh Thuý, Bích Diễm, Dao Ánh, Khánh Ly, và những tình khúc mà họ lưu lại trong trái tim ông. Bộ phim lãng mạn, mở ra thế giới nhạc Trịnh quyến rũ với những mảnh ghép tình yêu đa sắc, lung linh tuyệt đẹp.",
        });
    listTrang.push({
        matrang:"trang2",
        tenphim:"Thế giới khủng long",
        daodien:"Colin Trevorrow",
        dienvien:"Chris Pratt",
        theloai:"Phiêu Lưu",
        thoiluong:"147 phút",
        ngonngu:"Tiếng việt",
        rated:"Cấm khán giả dưới 13 tuổi",
        anh:"./assets/img/tgkl.jpg",
        mota:"Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới. Owen Grady may mắn gặp lại cô khủng long mà anh và khán giả vô cùng yêu mến - Blue. Tuy nhiên, Blue không đi một mình mà còn đem theo một chú khủng long con khác. Điều này khiến Owen càng quyết tâm bảo vệ mẹ con cô được sinh sống an toàn. Thế nhưng, hai giống loài quá khác biệt. Liệu có thể tồn tại một kỷ nguyên mà khủng long và con người sống chung một cách hòa bình?",
        });
    listTrang.push({
        matrang:"trang3",
        tenphim:"Phi công siêu đẳng",
        daodien:"Joseph Kosinski",
        dienvien:"Tom Cruise",
        theloai:"Hành Động",
        thoiluong:"130 phút",
        ngonngu:"Tiếng việt",
        rated:"Cấm khán giả dưới 13 tuổi",
        anh:"./assets/img/pcsd.jpg",
        mota:"Sau hơn ba mươi năm phục vụ, Pete “Maverick” Mitchell từng nổi danh là một phi công thử nghiệm quả cảm hàng đầu của Hải quân, né tránh cơ hội thăng chức, điều khiến anh cảm thấy bị bó buộc, để trở về làm chính mình.",
        });
    listTrang.push({
        matrang:"trang4",
        tenphim:"Harry Potter",
        daodien:"Alfonso Cuarón",
        dienvien:"Daniel Radcliffe",
        theloai:"Phiêu Lưu",
        thoiluong:"141 phút",
        ngonngu:"Tiếng Anh - Phụ đề Tiếng Việt",
        rated:"Phim dành cho mọi đối tượng",
        anh:"./assets/img/p4.jpg",
        mota:"harry",
        });   
      localStorage.setItem("list-trang",JSON.stringify(listTrang));
  }