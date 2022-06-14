function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
function signUp(){    
    var email = document.getElementById('email').value;
    let listUser=localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")):[] ;

    var trung=0;
    listUser.map((value,index)=>{
        if(value.email==email){
            trung++;
        }
    })
    if( trung==0){
        var username = document.getElementById('username').value;
        var phonenumber = document.getElementById('phonenumber').value;
        var pass = document.getElementById('pass').value;
        var day = document.getElementById('day').value;
        var month = document.getElementById('month').value;
        var year = document.getElementById('year').value;
        var gen1 = document.getElementById('gen1');
        var gen2 = document.getElementById('gen2');
        var gen;
        if(gen1.checked){
            gen=gen1.value;
        }
        else{
            gen=gen2.value;
        }
        var khu = document.getElementById('khu').value;
        var rap = document.getElementById('rap').value;
        var accept = document.getElementById('accept');
        if(accept.checked){
                //tranh ghi de 
            //add
            listUser=localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")):[] ;
            //
            listUser.push({
                makh:makeid(),
                username : username,
                email :email,
                phonenumber:phonenumber,
                pass:pass,
                day:day,
                month:month,
                year:year,
                gen:gen,
                khu:khu,
                rap:rap,
                login:null,
            })
            //day mang vao local
            localStorage.setItem("list-user",JSON.stringify(listUser));
            //
            alert("Đăng ký thành công");
        }
        else{
            alert("Bạn phải chấp nhận điều khoản");
        }
    }
    else{
        alert("Email đã có người đăng ký");
    }
    

}

function login(){
    
    event.preventDefault();
    /*for duyet user+i*/
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    if(email=="admin" &&pass=="admin")
    {
       window.location.href = "dashboard.html";

    }
    else{
        let listUser=localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")):[] ;
        var trung=0;
        listUser.map((value,index)=>{
            if(value.email==email &&value.pass==pass){
                trung++;
                listUser[index]={
                    makh:value.makh,
                    username : value.username,
                    email :value.email,
                    phonenumber:value.phonenumber,
                    pass:value.pass,
                    day:value.day,
                    month:value.month,
                    year:value.year,
                    gen:value.gen,
                    khu:value.khu,
                    rap:value.rap,
                    login:"logging",
                }
                localStorage.setItem("list-user",JSON.stringify(listUser));
            }
        });
       
        if(trung==0){
            alert("Email hoặc mật khẩu không đúng");
        }
        else{

            window.location.href = "hompagelog.html";
        }
    }
   
}