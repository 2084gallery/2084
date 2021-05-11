import languages from './internationalization/'

export default function translate (body) {
  const selectedLanguage = languages[body.lang]
  return {
    emitter: {
      to: body.mail,
      from: process.env.MAIL_USER,
      subject: selectedLanguage.subject,
      text: `${selectedLanguage.text}${body.content}`,
      html: `<h1>${selectedLanguage.htmlContent.greeting}</h1>
             <p style="">${selectedLanguage.htmlContent.firstParagraph}</p>
             <div style="">
               <p style="font-style: italic;">${body.content}</p>
             </div>
             <p style="">${selectedLanguage.htmlContent.secondParagraph}</p>
             <p style="font-style: italic;">${selectedLanguage.htmlContent.signature}</p>`
    },
    receiver: {
      from: body.mail,
      to: process.env.MAIL_USER,
      subject: `${selectedLanguage.staffSubject} ${process.env.MAIL_USER}`,
      html: `<div style="">
              <p style="">${body.content}</p>
            </div>`
    }
  }
}
