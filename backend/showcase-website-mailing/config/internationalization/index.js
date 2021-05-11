const languages = {
  'fr-fr': {
    subject: `Message de la part de l'équipe 2084 Gallery`,
    staffSubject: `Email reçu de `,
    text: `Bonjour ! \r\n\r\n Vous nous avez envoyé le message suivant :\r\n\r\n
    Notre équipe vous répondra dans les plus bref délai. \r\n\r\n`,
    htmlContent: {
      greeting: 'Bonjour !',
      secondParagraph: 'Vous nous avez envoyé le message suivant :',
      firstParagraph: 'Nous vous répondrons après avoir étudié votre demande.',
      signature: '\r\n\r\n L\'équipe de 2084 Gallery'
    }
  },
  'en-us': {
    subject: `Message from the 2084 Gallery team`,
    staffSubject: `Received from `,
    text: `Hello ! \r\n\r\n You have sent us the following message :\r\n\r\n
    Our team will answer you as soon as possible. \r\n\r\n`,
    htmlContent: {
      greeting: 'Hello !',
      firstParagraph: 'You have sent us the following message :',
      secondParagraph: 'Our team will answer you as soon as possible.',
      signature: '\r\n\r\n 2084 Gallery Team'
    }
  },
  'ch-man': {
    subject: `来自2084画廊团队的消息`,
    staffSubject: `收到的电子邮件来自 `,
    text: `你好!\r\n\r\n 你给我们发送了以下信息。\r\n\r\n
    我们的团队会尽快回答你。\r\n\r\n`,
    htmlContent: {
      greeting: '你好! ',
      firstParagraph: '你给我们发送了以下信息。',
      secondParagraph: '我们的团队会尽快回答你。',
      signature: '\r\n\r\n 2084画廊团队'
    }
  }
}

export default languages
