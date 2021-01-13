    var nodemailer = require('nodemailer');

    function sendMail(to,subject,message) 
    {
       var configDataSMTP = {
          service: 'Gmail',
          auth: {
              user: 'tt7250875@gmail.com',
              pass: 'test123##'
          }
       };
       var transporter = nodemailer.createTransport(configDataSMTP);
       var realTimeNodeMsgSend = {
          from: '"Sender(Live24u) Name" ', //Live24u sender address
          to: to, //Live24u list of receivers
          subject: subject, //Live24u Subject line
          text: 'Welcome to Live24u ?', //Live24u plaintext body
          html: message //Live24u html body
       };
       
       transporter.sendMail(realTimeNodeMsgSend, function(error, info){
          if(error)
          {
          //display error
             return console.log(error);
          }
          else
          {
         //display response
             return console.log(info.response);
          }      
       }); 
    }
    var message = '<p>Live24u is the most popular Programming & Web Development blog. Our mission is to provide the best online resources on programming and web development. We deliver the useful and best tutorials for web professionals — developers, programmers, freelancers and site owners. Any visitors of this site are free to browse our tutorials, live demos and download scripts.</p>';
    sendMail('bonnet.eloise33@gmail.com','Welcome to Pakainfo.com',message);