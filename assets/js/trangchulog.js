window.addEventListener("load",function(){
    let listTrang=localStorage.getItem("list-trang") ? JSON.parse(localStorage.getItem("list-trang")):[] ;

    var aa1=document.getElementById('anh1');
    var aa2=document.getElementById('anh2');
    var aa3=document.getElementById('anh3');
    var aa4=document.getElementById('anh4');
    
    aa1.style.backgroundImage = "url("+listTrang[0].anh.slice(0)+")";
    aa1.style.backgroundSize ="cover";
    aa2.style.backgroundImage = "url("+listTrang[1].anh.slice(0)+")";
    aa2.style.backgroundSize ="cover";
    aa3.style.backgroundImage = "url("+listTrang[2].anh.slice(0)+")";
    aa3.style.backgroundSize ="cover";
    aa4.style.backgroundImage = "url("+listTrang[3].anh.slice(0)+")";
    aa4.style.backgroundSize ="cover";
    //kiemtradangnhap
    listUser=localStorage.getItem("list-user") ? JSON.parse(localStorage.getItem("list-user")):[] ;
    var kt=0;
    listUser.map((value,index)=>{
        if(value.login=='logging'){
            kt++;
        }
    });
    if(kt==0){
        this.alert("Phải đăng nhập trước.");
        window.location.href="dangnhap.html";    
    }
    //
    const slider=document.querySelector(".slider");
    const sliderMain=document.querySelector(".slider-main");
    const sliderItem=document.querySelectorAll(".slider-item");
    const nextBtn=document.querySelector(".slider-next");
    const prevBtn=document.querySelector(".slider-prev");
    const dotItems=document.querySelectorAll(".dot");
    const sliderItemWidth=sliderItem[0].offsetWidth;
    const slidesLength= sliderItem.length;
    let postionX=0;
    let index=0;
    var iat=0;
    nextBtn.addEventListener("click",function(){
        handleChangeSlide(1);
    });
    prevBtn.addEventListener("click",function(){
        handleChangeSlide(-1);

    });
[ ... dotItems].forEach((item) => 
        item.addEventListener("click",function (e) {
        [ ... dotItems].forEach(el=>el.classList.remove("active"));
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex;
        postionX = -1 * index * sliderItemWidth;
        sliderMain.style=`transform: translateX(${postionX}px)`;
    })
);
    function handleChangeSlide(direction){
        if(direction==1){
            
            if(index >=slidesLength-1) return;
            postionX=postionX-sliderItemWidth;
            sliderMain.style=`transform: translateX(${postionX}px)`;
            index++;
            iat++;
        }
        else if(direction==-1){
            
            if(index<=0){
                index=0;
                return;
            }
            
            postionX=postionX+sliderItemWidth;
            sliderMain.style=`transform: translateX(${postionX}px)`;
            index--;
            iat--;
        }
        [ ... dotItems].forEach(el=>el.classList.remove("active"));

        dotItems[index].classList.add("active");
                
    }
    
});
