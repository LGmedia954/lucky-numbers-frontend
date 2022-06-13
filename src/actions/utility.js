// This worked to obtain keys and values from test hash

//   var userHash = [
    // {
    //   "id": 1,
    //   "email": "Amber@test.com",
    //   "username": "Amber"
    // },
    // {
    //   "id": 2,
    //   "email": "Betty@test.com",
    //   "username": "Betty"
    // },
//   ] 
//   var keys = [];
//   var values = [];
  
//   for (var i = 0; i < userHash.length; i++) {
//       for (var key in userHash[i]) {
//           if (userHash[i].hasOwnProperty(key)) {
//               keys.push(key);
//               values.push(userHash[i][key]);
//           }
//       }
//   }
  
//   console.log(keys);
//   console.log(values);



// https://stackoverflow.com/questions/15523514/find-by-key-deep-in-a-nested-array
// if( JSON.stringify(object_name).indexOf("key_name") > -1 ) {
//   console.log("Key Found");
// }
// else{
//   console.log("Key not Found");
// }