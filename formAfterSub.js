

function checkAll(){
    // window.alert("hi");
    // let ufname = document.getElementById("fname").value;
    let ufname = document.myform.fname.value;
    let regfname = "^[a-zA-Z]{3,15}$";
  
    let uedu = document.myform.edu;
    if(ufname.trim()===""){
     window.alert("This field is required");
     return false;
    }
    if(!ufname.trim().match(regfname)){
     window.alert("user name must contain only character min-3 and max-15");
     return false;
    }
    if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false&& uedu[4].checked==false){
        window.alert("please select your qualification");
        return false;
    }
}