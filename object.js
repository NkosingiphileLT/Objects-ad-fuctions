//DRY
//let firstname = 'Nkosi'
//let lastname = 'Tukuse'
//let discordid = 'Nkosi.T#0001'
//let supstatus = 'VIP'

//Rather than diong this there is a better way


//Objects

//Declare multiple variables in one
let user = {
    username : 'Nkosi',
    email : 'Luthotukuse6@gmail.com',
    discord : 'Nkosi.T#001',
    substatus : 'VIP', 
    lessonsComplete:[0,1] 
}
console.log(user.username)
console.log(user.username);
console.log(user.lessonsComplete)
console.log(user.lessonsComplete.map(elem => elem *3))
//--------------------------------------------------------------------------------


//Arrays and Objects
let users = [{
    username : 'Nkosi',
    email : 'Morpheus1@gmail.com',
    password : 'VNL123',
    discord : 'TopG.T#001',
    substatus : 'VIP', 
    lessonsComplete:[0,1] 
},
{
    username : 'Lutho',
    email : 'Luthotukuse6@gmail.com',
    password : 'VNL234',
    discord : 'Lutho.T#001',
    substatus : 'VIP', 
    lessonsComplete:[0,1] 
},
{
    username : 'Vanta',
    email : 'Devouroflight0@gmail.com',
    password : 'VNL012',
    discord : 'Vanta.T#001',
    substatus : 'VVIP', 
    lessonsComplete:[0,1] 
}]

console.log(users[2].username)
console.log(users[1].lessonsComplete.map(element => element * 5))



//logging in someone
function login (email, password){
  for (let i = 0; i< users.length; ++i){
      if (users[i].email ===email){
        console.log(users[i]);
           if (users[i].password === password){
         console.log('Log in user info correct')
        }
        else{
        console.log('Password incorrect')
        }
        return;
      }
    }
    console.log('Dose not exist')
}

login('Devouroflight0@gmail.com','VNL012')


//--------------------------------------------------------------------------------

//Question 3

let userID = [{
    username : 'Nkosi',
    email : 'Morpheus1@gmail.com',
    password : 'VNL123',
    discord : 'TopG.T#001',
    substatus : 'VIP', 
    lessonsComplete:[0,1] 
}]

function register (username,email,password,discord,substatus){
for (let i = 0; i < userID.length; ++i ) {
   if(username[i].username === username){
   console.log(userID[i]);
   }
   

   if( email[i]. email ===  email){
   console.log(userID[i])
   }
  

   if( password [i]. password  === password ){
   console.log(userID[i])
   {
 
   if( discord[i]. discord === discord){
   console.log(userID[i])
   }
   
 
   if(substatus[i].substatus ===substatus){
   console.log(userID[i])
   }
   
   
}

}
register ( 'Nkosi','Morpheus1@gmail.com','VNL123','TopG.T#001','VIP', [0,1])

