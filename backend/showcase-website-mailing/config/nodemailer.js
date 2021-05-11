import nodemailer from 'nodemailer'
import translate from '../config/translation'
let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true, // use TLS
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PW
  }
})

export default function transporterVerify(request, response) {
  try {
    for(let [key, value] of Object.entries(request.body)) {
      if(!value) {
        throw new Error("empty value")
      }
    }
     transporter.verify()
     .then(success => {
       transporter.sendMail(translate(request.body).emitter).catch(err => { throw err })
       transporter.sendMail(translate(request.body).receiver).catch(err => { throw err })
       response.sendStatus(200)
     })
     .catch(err => { throw err })
  } catch (e) {
    response.sendStatus(400)
  }
}
