export const ValidateEmail=(mail)=>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
      return true
    }
    else{
      return false
    }
  }
//  const checkifempty=(text)=>{

//  }
// make this a global function
export  const ValidatePassword=(entered_password)=>{
    if (entered_password.match(/[a-z]/g) && entered_password.match( 
      /[A-Z]/g) && entered_password.match( 
      /[0-9]/g) && entered_password.match( 
      /[^a-zA-Z\d]/g) && entered_password.length >= 8) {
        return true

      }
      else{
        return false
      }
  }

export const checkifempty=(text)=>{
    let val=!text || text.length === 0 || /^\s*$/.test(text);
     if(!val){
      return true//not empty
     }
     else {
         return false//it is empty
     }
}
