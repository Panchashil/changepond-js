

function checkData(){
    // window.alert("hi");
    let uid = document.getElementById("userid").value;
    if(uid.trim()===""){
    //    window.alert("user id is required");
    document.getElementById("uiderror").innerHTML = "user id is required";
    document.getElementById("uiderror").style.color="red";

    }else if(!uid.trim().match('^[a-zA-Z]{3,20}$')){
        document.getElementById("uiderror").innerHTML = "user id must be in proper formate";
        document.getElementById("uiderror").style.color="red";
    }else{
        document.getElementById("uiderror").innerHTML = ""; 
    }
}