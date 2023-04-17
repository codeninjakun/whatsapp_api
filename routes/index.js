const router = require('express').Router();
require("dotenv").config();

router.get("/",async(req,res) => {
    try {
            // Download the helper library from https://www.twilio.com/docs/node/install
    // Find your Account SID and Auth Token at twilio.com/console
    // and set the environment variables. See http://twil.io/secure
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    console.log(authToken,accountSid);
     client.messages
        .create({
            from: 'whatsapp:+918003939604',
            body: 'Hello there!',
            to: 'whatsapp:+916350083642'
        })
        .then(message => console.log(message.sid));
       

        res.send({
            status : true,
            message : "Port and route are working"
        })
        
    } catch (error) {
        console.error({error})
        return res.sendStatus(500);
    }
})


module.exports = router;