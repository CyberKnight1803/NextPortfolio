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

    await new Promise ((resolve, reject) => {
        transporter.verify((error, success) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
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

            await new Promise ((resolve, reject) => {
                transporter.sendMail(mailData, (err, info) => {
                    if (err){
                        console.log(err);
                        reject(err);
                    }
                    else
                        resolve(info);
                });
            });
            res.json({status: 200});
            break;
    }
};

export default handler;