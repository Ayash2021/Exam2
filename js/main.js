let nvWidth = 0,
    isTrue = !0;
$(".toggel-menu").click(function() {
    isTrue ?
        ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"), nvWidth = $(".nav-tab-menu").width() - 10,
            $(".header-nav").css("left", nvWidth),
            $(".fa-align-justify").toggleClass("fa-times"),
            $(".nav-tab-menu .item1").animate({ opacity: "1", paddingTop: "25px" }, 1100),
            $(".nav-tab-menu .item2").animate({ opacity: "1", paddingTop: "25px" }, 1200),
            $(".nav-tab-menu .item3").animate({ opacity: "1", paddingTop: "25px" }, 1300),
            $(".nav-tab-menu .item4").animate({ opacity: "1", paddingTop: "25px" }, 1400),
            $(".nav-tab-menu .item5").animate({ opacity: "1", paddingTop: "25px" }, 1500),
            $(".nav-tab-menu .item6").animate({ opacity: "1", paddingTop: "25px" }, 1600),


            isTrue = !isTrue) : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"),
            $(".fa-align-justify").toggleClass("fa-times"),
            $(".header-nav").css("left", 0),
            $(".nav-tab-menu li").animate({ opacity: "0", paddingTop: "500px" }, 500),

            isTrue = !isTrue)
});






let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
let userAge = document.getElementById("age");
let userPassword = document.getElementById("password");
let userRePassword = document.getElementById("rePassword");
let userNameAlert = document.getElementById("namealert");
let userEmailAlert = document.getElementById("emailalert");
let userPhoneAlert = document.getElementById("phonealert");
let userAgeAlert = document.getElementById("agealert");
let userpasswordAlert = document.getElementById("passwordalert");
let userRepasswordAlert = document.getElementById("repasswordalert");



function userNameValid() { return 1 == (userName.value) ? (userNameAlert.style.display = "none", !0) : (userNameAlert.style.display = "block", !1) }



function userEmailValid() { return 1 == (userEmail.value) ? (userEmailAlert.style.display = "none", !0) : (userEmailAlert.style.display = "block", !1) }



function userPhoneValid() { return 1 == (userPhone.value) ? (userPhoneAlert.style.display = "none", !0) : (userPhoneAlert.style.display = "block", !1) }




function userAgeValid() { return 1 == (userAge.value) ? (userAgeAlert.style.display = "none", !0) : (userAgeAlert.style.display = "block", !1) }



function userPasswordValid() { return 1 == (userPassword.value) ? (userpasswordAlert.style.display = "none", !0) : (userpasswordAlert.style.display = "block", !1) }



function userRePasswordValid() { return userPassword.value == userRePassword.value ? (userRepasswordAlert.style.display = "none", !0) : (userRepasswordAlert.style.display = "block", !1) }



userAgeAlert.style.display = "none", userName.addEventListener("keyup", userNameValid),
    userEmail.addEventListener("keyup", userEmailValid),
    userPhone.addEventListener("keyup", userPhoneValid),
    userAge.addEventListener("keyup", userAgeValid),
    userPassword.addEventListener("keyup", userPasswordValid),
    userRePassword.addEventListener("keyup", userRePasswordValid),

    document.getElementById("contact").addEventListener("click", function() {

        userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid() ? document.getElementById("submitBtn").disabled = !1 : document.getElementById("submitBtn").disabled = !0
    });



let myReq = new XMLHttpRequest();
articles = []


myReq.open("GET","https://api.themoviedb.org/3/movie/157336/videos?api_key=bd0daf36bb6d8e6d9de806cbc03078b1");
myReq.send();

myReq.addEventListener("readystatechange",function(){
    // console.log(myReq.readyState);
    if(myReq.readyState == 4 && myReq.status == 200){
        articles = JSON.parse(myReq.response).results;
        console.log(articles);
        displayData();
    }
})



function displayData() { 
    let cartona = '';
    for (let i = 0; i < articles.lenght; i++) {
        cartona += `<div class="col-md-4">
                        <div class="item">
                        <img src="https://image.tmdb.org/t/p/w500${articles[i].backdrop_path}">
                            <h2>${articles[i].title}</h2> 
                            <p>${articles[i].overview}</p>
                        </div>
                    </div>`;
    }
    document.getElementById("myData").innerHTML = cartona;
}




// async function moveData() {
//     let newMove = await fetch("https://api.themoviedb.org/3/movie/157336/videos?api_key=bd0daf36bb6d8e6d9de806cbc03078b1");
//     let moveRes = await newMove.json();
//     console.log(newMove);
// }