function LoginButton(){
    const reCaptchaResponse = grecaptcha.getResponse();
    if(reCaptchaResponse){
        $.ajax({
            type: "GET",
            url: "https://localhost:44317/api/User/Captcha",
            data: {userResponse : reCaptchaResponse},            
            success: function(){
                alert("Captcha Verified");
            },
            error: function(error){
                alert("Please try again");
            }
        });
    }
    else{
        alert("Something went wrong with reCaptcha. Please try again!");
    }
}