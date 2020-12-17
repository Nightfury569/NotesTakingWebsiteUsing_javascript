
function validate(){
    var Name = document.getElementById("nameL")
    var Password = document.getElementById("passwordL")
    var validate_info = localStorage.getItem("signUp_" + Name.value)
    var validation = false
    var user_doesNot_exists = document.getElementById("UserDoesNotExists")
    var invalid_password  = document.getElementById("invalidPassword")

    if(validate_info==null)
       {user_doesNot_exists.style.visibility = "visible"
       Name.value = ""
       Password.value=""
       validation = false
       sessionStorage.setItem("aaaa",validate_info)
      }
    else{
      INFO = JSON.parse(validate_info)
      console.log(INFO)
      if(Password.value != INFO.password){
          invalid_password.style.visibility = "visible"
          Password.value=""
          validation = false
      }
      else {validation = true
        session = {
          name : Name.value,
          state : true
        }
        sessionStorage.setItem("Curr_session",JSON.stringify(session))
      }
    }
    console.log(validation)
    return validation
   
}

function hide_It(){
    var user_doesNot_exists = document.getElementById("UserDoesNotExists")
    var invalid_password  = document.getElementById("invalidPassword")
    user_doesNot_exists.style.visibility = "hidden"
    invalid_password.style.visibility = "hidden"
}
