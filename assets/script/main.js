     $(document).ready(function(){
    $("#VND").click(function(){
        $("#VND1").fadeToggle("slow");
      
    });
    });

    $(document).ready(function(){
    $("#header1").click(function(){
        $("#header2").fadeToggle("slow");

    });
    });



    // chuyển từ ảnh này sang ảnh khác
    var i=0;
    var images = [];
    var time = 3000;

    // image list
    images[0] = './assets/img/anh4.jpg';
    images[1] = './assets/img/anh7.jpg';

    // change image
    function changeImage(){

        document.slide.src = images[i];

        if(i < images.length - 1){
            i++
        }else {
            i=0
        }
        setTimeout("changeImage()", time);
    }
    window.onload = changeImage;

    //check input
    // var check_phone = /^[0]d[0-9]{10}$/;
    // var check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
    // var check__password = /^[A-Za-z0-9!@#$%^&*_]{6,20}$/;
    // var check__password1 = /^[A-Za-z0-9!@#$%^&*_]{6,20}$/;
    // function StringMatch(txt, reg){
    //     return reg.test(txt.value);
    // }

    // function validform(f){
    //     if(!StringMatch(f.email, check_email)){
    //         alert("Chưa nhập Email")
    //         f.email.value="";
    //         f.email.focus();
    //         return;
    //     }

    //     if(!StringMatch(f.password ,check__password)){
    //        alert("Chưa nhập mật khẩu")
    //        f.password.value="";
    //        f.password.focus();
    //        return; 
    //     }

    //    if(!StringMatch(f.password1 ,check__password1)){
    //     alert("Chưa nhập lại mật khẩu")
    //     f.password1.value="";
    //     f.password1.focus();
    //     return;
    //     }
    //     alert("Đăng Kí Thành Công! ")
    // }

    // function validform1(f){
    //     if(!StringMatch(f.email, check_email)){
    //         alert("Chưa nhập Email")
    //         f.email.value="";
    //         f.email.focus();
    //         return;
    //     }

    //     if(!StringMatch(f.password ,check__password)){
    //        alert("Chưa nhập mật khẩu")
    //        f.password.value="";
    //        f.password.focus();
    //        return; 
    //     }
    //     alert("Đăng Nhập Thành Công! ")
    // }

    // slide show
    $(document).ready(function(){
        $('.autoplay').slick({
            slidesToShow: 5, /* hiện ra 5 ảnh */
            infinite: false, /*hết ảnh thì dừng lại */
            // autoplay: true,     /*điều kiện để tự động chạy */
            // autoplaySpeed: 2000,    /* time chạy 2s*/
            prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
            nextArrow: '<div class="slick-next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
            responsive: [
                {
                  breakpoint: 415,  // kích thước màn hình
                  settings: {
                    slidesToShow: 4,
                    // infinite: true,
                    slidesToScroll: 1, //di chuyển nhiều ảnh 1 lúc 
                  }
                }
            ]
        });
    });

    $(document).ready(function(){
        $('.autoplay1').slick({
            slidesToShow: 4, /* hiện ra 4 ảnh */
            infinite: false, /*hết ảnh thì dừng lại */
            // autoplay: true,     /*điều kiện để tự động chạy */
            // autoplaySpeed: 1000,    /* time chạy 2s*/
            prevArrow: '<div style class="slick-prev fas-left"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
            nextArrow: '<div class="slick-next fas-right"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
            responsive: [
                {
                  breakpoint: 415,
                  settings: {
                    slidesToShow: 3,
                    infinite: true,  //di chuyển ảnh được 1 vòng
                    slidesToScroll: 1, //di chuyển nhiều ảnh 1 lúc 
                  }
                }
            ]
        });
    });

    
    $(document).ready(function(){
        $('.autoplay2').slick({
            slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1, //di chuyển nhiều ảnh 1 lúc 
                  }
                }
            ]
        });
    });

    $(document).ready(function(){
        $('.english').slick({
            slidesToShow: 3,
            infinite: false,
            prevArrow: '<div  class="slick-prev  fas-left fas-left-TA"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
            nextArrow: '<div  class="slick-next fas-right fas-right-TA"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
            responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1, //di chuyển nhiều ảnh 1 lúc 
                    infinite: true,
                  }
                }
            ]
        });
    });


    function inbox1(){
        document.getElementById("inbox1").style.display="none";
        document.getElementById("inbox2").style.display="block";
    }


    function inbox2(){
        document.getElementById("inbox1").style.display="block";
        document.getElementById("inbox2").style.display="none";
    }


    // xem thêm

    $(document).ready(function(){
        $("#abc").click(function(){
            $("#abc1").fadeToggle("slow");
          
    });
    });

    function dosomething(o)
	{
		o.style="border: 1px solid #f65e39; border-radius: 4px";
	}

    function domouseout(o)
	{
		o.style="border: 1px solid #ddd; border-radius: 4px";
	}

    function checkicon(){
        if(document.getElementById("VND1").style.display == "none"){
            document.getElementById("icon").style.transform="rotate(0deg)";
        }
        else{
            document.getElementById("icon").style.transform="rotate(-180deg)";
        }
    }

    function checkicon1(){
        if(document.getElementById("abc1").style.display == "none"){
            document.getElementById("icon1").style.transform="rotate(0deg)";
            document.getElementById("abc").style.border="1px solid #f65e39";
            document.getElementById("abc").style.borderRadius="4px";
        }
        else{
            document.getElementById("icon1").style.transform="rotate(-180deg)";
            document.getElementById("abc").style.border="1px solid #ddd";
            document.getElementById("abc").style.borderRadius="4px";
        }
    }

    function checkpassword(){
        if(document.getElementById("pass").type == "password"){
            document.getElementById("pass").type = "text";
            document.getElementById("eye").style.display = "inline-block";
            document.getElementById("eyeslash").style.display = "none";
        }
        else if(document.getElementById("pass").type == "text"){
            document.getElementById("pass").type = "password";
            document.getElementById("eye").style.display = "none";
            document.getElementById("eyeslash").style.display = "inline-block";      // inline-block thì nó sẽ k bị nhảy xuống dòng
        }
    }

    function checkpassword1(){
        if(document.getElementById("pass1").type == "password"){
            document.getElementById("pass1").type = "text";
            document.getElementById("eye1").style.display = "inline-block";
            document.getElementById("eyeslash1").style.display = "none";
        }
        else if(document.getElementById("pass1").type == "text"){
            document.getElementById("pass1").type = "password";
            document.getElementById("eye1").style.display = "none";
            document.getElementById("eyeslash1").style.display = "inline-block";      // inline-block thì nó sẽ k bị nhảy xuống dòng
        }
    }

    function checkpassword2(){
        if(document.getElementById("pass2").type == "password"){
            document.getElementById("pass2").type = "text";
            document.getElementById("eye2").style.display = "inline-block";
            document.getElementById("eyeslash2").style.display = "none";
        }
        else if(document.getElementById("pass2").type == "text"){
            document.getElementById("pass2").type = "password";
            document.getElementById("eye2").style.display = "none";
            document.getElementById("eyeslash2").style.display = "inline-block";      // inline-block thì nó sẽ k bị nhảy xuống dòng
        }
    }