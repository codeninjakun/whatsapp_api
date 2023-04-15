const router = require('express').Router();
const TWILIO_AUTH_TOKEN = "ece576108503a8069afc1176fc2e3113"
const TWILIO_ACCOUNT_SID = "ACf88e0179f3f864aff0aec0708b8394d2"


router.get("/",async(req,res) => {
    try {
            // Download the helper library from https://www.twilio.com/docs/node/install
    // Find your Account SID and Auth Token at twilio.com/console
    // and set the environment variables. See http://twil.io/secure
    const accountSid = TWILIO_ACCOUNT_SID;
    const authToken = TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: 'Hello there!',
            to: 'whatsapp:+916350083642'
        })
        .then(message => console.log(message.sid));
    
        console.log("port is working");
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