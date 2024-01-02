// const nodemailer = require('nodemailer')

// //configure email and send it

// const username = readline('Please enter the mail')

// async function sendMail(){
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth:{
//             user: 'srinivasa.vali@gmail.com',
//             pass: 'vcxz fsqf axut yvqf',
//         },
//     })

//     //configure email content

//     const mailContent = {
//         from: 'srinivasa.vali@gmail.com',
//         to: 'gaurav.tripathi@codingninjas.com',
//         subject: 'Regarding nodemailer',
//         text: 'Hello Gaurav'
//     }

//     //send mail

//     try{
//         const result = await transporter.sendMail(mailContent);
//         console.log("Mail has sent to the recepient");
//     }
//     catch(err)
//     {
//         console.log("Cann't send the mail because of " + err);
//     }

// }

// sendMail();



const nodemailer = require('nodemailer')
const readline = require('readline')

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function sendMail(email){

    //create an account to send the mail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'srinivasa.vali@gmail.com',
            pass: 'vcxz fsqf axut yvqf'
        },
    });

    //configure the mail content

    const mailContent = {
        from : 'srinivasa.vali@gmail.com',
        to : email,
        subjest : "This is a nodemailer mail",
        text: "Hello Gaurav",
    }

    //Send the mail

    try{
        const result = await transporter.sendMail(mailContent);
        console.log("mail has successfully sent to the "+userMail);
    }
    catch(err){
        console.log("Can't send the mail because of "+err);
    }
}




interface.question("Please enter the user mail", (senderMail) =>{
    sendMail(senderMail);
})




