window.addEventListener("load",function(){
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
        window.location.href="log.html";    
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
