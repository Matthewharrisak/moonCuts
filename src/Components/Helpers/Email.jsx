import React from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';


// service_atg4x6c = service ID
// MoonTimeHairCuts = templateID
// user_xKinaWLHvxEmE4aFS7Buk = userID

export const sendEmail = (data) => {

let serviceID = 'service_atg4x6c';
let templateID = 'MoonTimeHairCuts';
let userID = 'user_xKinaWLHvxEmE4aFS7Buk' ;
console.log(data)

emailjs.send(serviceID, templateID, data, userID)
.then(res => {
    swal({
        title: 'Submission Succesful',
        icon: 'success'
    })
})
.catch(err => {
    swal({
        title: 'error with submission',
        icon: 'error'
    })
})

return null
}

// export default SendEmail;