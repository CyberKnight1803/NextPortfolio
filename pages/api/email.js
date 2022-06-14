const nodemailer = require("nodemailer");

const handler = async (req, res) => {
    const transporter = nodemailer.createTransport({
        port: 465, 
        host: "smtp.gmail.com", 
        auth: {
            user: process.env.SENDER_EMAIL, 
            pass: process.env.PASSWORD
        }, 
        secure: true
    });

    switch(req.method){
        case "GET":
            break;
        
        case "POST":
            const mailData = {
                from: process.env.SENDER_EMAIL, 
                to: process.env.RECIEVER_EMAIL, 
                subject: `[Portfolio] ${req.body.email}: Contacted you!`, 
                text: req.body.message,
            };

            await transporter.sendMail(mailData, (err, _info) => {
                if (err)
                    console.log(err);
            });
            res.json({status: 200});
            break;
    }
};

export default handler;