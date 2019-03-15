var username =    document.getElementById('username');
var upwork =      document.getElementById('upwork');
var fiverr=       document.getElementById('fiverr');
var freelancer =  document.getElementById('freelancer');
var Guru =        document.getElementById('Guru');
var peopleperhour = document.getElementById('peopleperhour');
var CNIC_NO =          document.getElementById('CNIC_NO');
var submitbtn =    document.getElementById("submit");



function saveuser(CNIC_NO) {

   var stusents_profiles = {
      Name : username.value,
      upwork_Profile: upwork.value,
      fiverr_Profile:fiverr.value,
      freelancer_Profile: freelancer.value,
      Guru_Profile:Guru.value,
      peopleperhour_Profile:peopleperhour.value,
      Key:CNIC_NO.value,


   }
   console.log('stusents_profiles',stusents_profiles);
   firebase.database().ref('stusents_profiles/'+CNIC_NO).push({Key:CNIC_NO}).set(stusents_profiles);
  
 }





// push - creates uniqe ID automatically
// set
// update



   /*firebaseRef.child("Name").set("sana");
   firebaseRef.child("Email").set("nazsana625@gmail.com");*/
