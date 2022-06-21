function changePass(){
    let change = `
    <div>
        <label for="">Mật khẩu mới</label><br>
        <input type="text" class="form_input" id="passAfter">
    </div>
    <div>
        <label for="">Nhập lại mật khẩu mới</label><br>
        <input type="text" class="form_input" id="repass">
    </div>
    <div class="updoad">
        <button type="submit" title="Lưu lại" class="luu" onclick="updoad()">Updoad</button>
    </div>
    `
    document.getElementById("add").innerHTML = change;
}

function load(){
    let list = localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")) : [];
    let change = ``;
    list.map((value, index)=>{
        if(value.login=='logging'){
            change = `<div class="page">
                <h1>Thay đổi thông tin</h1>
            </div>
            <div class="c5_main">
                <div class="c5_column">
                    <form action="">
                        <div class="main_item">
                            <label for=""><strong>Họ và tên*</strong></label><br>
                            <input type="text" value="${value.username}" class="name" id="Name"><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Điện thoại*</strong></label><br>
                            <input type="text" value="${value.phonenumber}" class="sdt" id="Sdt"><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Giới tính*</strong></label><br>
                            <input type="text" value="${value.gen}" id="gioitinh">
                            <br>
                        </div>
                        <div class="main_item">
                            <label for="month"><strong>Ngày sinh*</strong></label><br>
                            ${value.day}/${value.month}/${value.year}
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Địa chỉ email*</strong></label><br>
                            ${value.email}
                        </div>
                    </form>
                </div>
                <div class="c5_column">
                    <form action="">
                        <div class="main_item">
                            <label for=""><strong>Thành phố/Tỉnh*</strong></label><br>
                            <input type="text" class="tp" value="${value.khu}" id="tinh">
                            <br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Mật khẩu cũ*</strong></label><br>
                            <input type="text" value="" class="mk" id="mkcu"><br>
                        </div>
                    </form>
                </div>
            </div>

            <div class="c5_footer1">
                <div class="c5_pass">
                    <label for="" onclick="changePass()">Đổi mật khẩu</label>
                </div>
            
                <div id="add"></div>
            </div>

            <div class="c5_footer2">
                <div class="first"><h2>Thông tin tùy chọn</h2></div>
                <div class="list">
                    <label for=""><strong>Rạp chiếu phim yêu thích</strong></label><br>
                    <input type="text" class="rap" value="${value.rap}" id="Rap">
                </div>
                <div class="save">
                    <button type="submit" title="Lưu lại" class="button" onclick="save()">Lưu lại</button>
                </div>
            </div>`;
            document.getElementById("c5_22").innerHTML = change;
        }
    })
}
function updoad(){
    let list = localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")) : [];
    let passafter = document.getElementById("passAfter").value;
    let repass = document.getElementById("repass").value;
    let mkCu = document.getElementById("mkcu").value;
    list.map((value, index)=>{
        if(value.login=='logging'){
            if(mkCu==value.pass && passafter==repass){
                value.pass = repass;
                localStorage.setItem("list-user", JSON.stringify(list));
                alert("Đổi mật khẩu thành công");
            }
            else{
                alert("Mật khẩu không đúng");
            }
        }
    })
    let change = ``
    document.getElementById("add").innerHTML = change;
    load();
}

function save(){
    let list = localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")) : [];
    let name = document.getElementById("Name").value;
    let sdt = document.getElementById("Sdt").value;
    let gioitinh = document.getElementById("gioitinh").value;
    let tinh = document.getElementById("tinh").value;
    let rap = document.getElementById("Rap").value;
    let pass = document.getElementById("mkcu").value;
    list.map((value, index)=>{
        if(value.login=='logging' && value.pass==pass){
            value.username = name;
            value.phonenumber = sdt;
            value.gen = gioitinh;
            value.khu = tinh;
            value.rap = rap;
            localStorage.setItem("list-user", JSON.stringify(list));
        }
        else{
            alert("Mật khẩu không đúng");
        }
    })
    load();
}