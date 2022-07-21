import {EmailValid} from "./demo";

let emailValid = new EmailValid();
let valid=["C0318G","P5418H"];
let invalid=['M0318G', 'P0323A'];

for(let email of valid){
    let isValid=emailValid.EmailValid(email);
    console.log(`Email : ${email}  is valid : ${isValid}`);
}

for(let email of invalid){
    let isValid=emailValid.EmailValid(email);
    console.log(`Email : ${email}  is valid : ${isValid}`);
}