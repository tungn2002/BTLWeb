function changePass(){
    let change = `
    <div>
        <label for="">Mật khẩu mới</label><br>
        <input type="text" class="form_input">
    </div>
    <div>
        <label for="">Nhập lại mật khẩu mới</label><br>
        <input type="text" class="form_input">
    </div>
    `
    document.getElementById("add").innerHTML = change;
}
function save(){
    let change = ``
    document.getElementById("add").innerHTML  =change;
}
function load(){
    let listUser = localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")):[];
    let change = ` `
    listUser.map((value,index)=>{
        if(value.login=='logging'){
            change += `
            <div class="page">
                <h1>Thay đổi thông tin</h1>
            </div>
            <div class="c5_main">
                <div class="c5_column">
                    <form action="">
                        <div class="main_item">
                            <label for=""><strong>Họ và tên*</strong></label><br>
                            <input type="text" value="${value.Name}" class="form_input"><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Điện thoại*</strong></label><br>
                            <input type="text" value="${value.phonenumber}" class="form_input"><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Giới tính*</strong></label><br>
                            <input type="radio" value="">nam
                            <input type="radio" value="">nữ
                            <input type="radio" value="">khác
                            <br>
                        </div>
                        <div class="main_item">
                            <label for="month"><strong>Ngày sinh*</strong></label><br>
                            ${value.day}/${value.month}/${value.year}
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Địa chỉ email*</strong></label><br>
                            ${email}
                        </div>
                    </form>
                </div>
                <div class="c5_column">
                    <form action="">
                        <div class="main_item">
                            <label for=""><strong>Thành phố/Tỉnh*</strong></label><br>
                            <select name="" id="" class="form_input">
                                <option value="">Vui lòng chọn ... </option>
                                <option value="">Hà Nội</option>
                                <option value="">Hồ Chí Minh</option>
                                <option value="">Đà Nẵng</option>
                                <option value="">Hải Phòng</option>
                                <option value="">Sơn La</option>
                                <option value="">Bình Dương</option>
                                <option value="">Thái Bình</option>
                                <option value="">Thanh Hóa</option>
                                <option value="">Thừa Thiên Huế</option>
                                <option value="">Nghệ An</option>
                            </select><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Địa chỉ*</strong></label><br>
                            <input type="text" value="${value.username}" class="form_input"><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Mật khẩu cũ*</strong></label><br>
                            <input type="text" value="" class="form_input"><br>
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
                    <select name="" id="">
                        <option value="">Vui lòng chọn ... </option>
                        <option value="">CGV Aeon Long Biên</option>
                        <option value="">CGV Aeon Hải phòng</option>
                        <option value="">CGV Aeon Hà Đông</option>
                        <option value="">CGV Aeon Hồ gươm plaza</option>
                    </select>
                </div>
                <div class="save">
                    <button type="submit" title="Lưu lại" class="button" onclick="save()">Lưu lại</button>
                </div>
            </div>
            `
        }
        else{
            change += `
            <div class="page">
                <h1>Thay đổi thông tin</h1>
            </div>
            <div class="c5_main">
                <div class="c5_column">
                    <form action="">
                        <div class="main_item">
                            <label for=""><strong>Họ và tên*</strong></label><br>
                            <input type="text" value="" class="form_input"><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Điện thoại*</strong></label><br>
                            <input type="text" value="" class="form_input"><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Giới tính*</strong></label><br>
                            <input type="radio" value="">nam
                            <input type="radio" value="">nữ
                            <input type="radio" value="">khác
                            <br>
                        </div>
                        <div class="main_item">
                            <label for="month"><strong>Ngày sinh*</strong></label><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Địa chỉ email*</strong></label><br>
                        </div>
                    </form>
                </div>
                <div cass="c5_column">
                    <form action="">
                        <div class="main_item">
                            <label for=""><strong>Thành phố/Tỉnh*</strong></label><br>
                            <select name="" id="" class="form_input">
                                <option value="">Vui lòng chọn ... </option>
                                <option value="">Hà Nội</option>
                                <option value="">Hồ Chí Minh</option>
                                <option value="">Đà Nẵng</option>
                                <option value="">Hải Phòng</option>
                                <option value="">Sơn La</option>
                                <option value="">Bình Dương</option>
                                <option value="">Thái Bình</option>
                                <option value="">Thanh Hóa</option>
                                <option value="">Thừa Thiên Huế</option>
                                <option value="">Nghệ An</option>
                            </select><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Địa chỉ*</strong></label><br>
                            <input type="text" value="" class="form_input"><br>
                        </div>
                        <div class="main_item">
                            <label for=""><strong>Mật khẩu cũ*</strong></label><br>
                            <input type="text" value="" class="form_input"><br>
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
                    <select name="" id="">
                        <option value="">Vui lòng chọn ... </option>
                        <option value="">CGV Aeon Long Biên</option>
                        <option value="">CGV Aeon Hải phòng</option>
                        <option value="">CGV Aeon Hà Đông</option>
                        <option value="">CGV Aeon Hồ gươm plaza</option>
                    </select>
                </div>
                <div class="save">
                    <button type="submit" title="Lưu lại" class="button" onclick="save()">Lưu lại</button>
                </div>
            </div>
            `
        }
        document.getElementById("c5_22").innerHTML = change;
    })
}