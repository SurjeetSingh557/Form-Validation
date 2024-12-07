function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
};
$("#submitbtn").click(function(){
    var errorMsg="";
    var emptyString="";
    $("#error").html("")
    $("#success").html("")
    if($("#Email").val()===""){
        emptyString+="<p>Email not filled</p>";
    };
    if(isEmail($("#Email").val())==false){
        errorMsg+="<p>Email id is not valid</p>";
    };
    var checklen=$("#phoneno").val();
    if(checklen.length!=10 && $.isNumeric($("#phoneno").val())==true){
        errorMsg+=`<p>Your phone number is not valid need 10 digit you entered ${checklen.length}.</p>`;
    }else{
        if($.isNumeric($("#phoneno").val())==false){
            errorMsg+="<p>Your phone number is not valid</p>";
        };
    };
    if($("#phoneno").val()===""){
        emptyString+="<p>Phone-No not filled</p>";
    };
    if($("#password").val()!=$("#confirmpassword").val()){
        errorMsg+="<p>Password does not Match</p>";
    };
    if($("#password").val()===""){
        emptyString+="<p>Password not filled</p>";
    };
    if($("#confirmpassword").val()===""){
        emptyString+="<p>Confirm Password not filled</p>";
    };
    if(errorMsg=="" && emptyString==""){
        $("#success").html("You are registered");
    }else{
        $("#error").html(errorMsg + emptyString).css("color","red");
    };
});