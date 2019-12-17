import nodemailer from'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SANTA_MAIL,
    pass: process.env.SANTA_PW
  }
});

export async function handler(event) {
  const { name, mail, giftTo } = JSON.parse(event.body);

  const mailOptions = {
    from: process.env.SANTA_MAIL,
    to: mail,
    subject: 'Ici le père Noël !',
    html: `Salut ${name}, tu dois offrir un cadeau à ${giftTo} ! SALUT LOL`
  }

  return transporter.sendMail(mailOptions)
  .then(info => ({ statusCode: 200, body: JSON.stringify(info) }))
  .catch(err => ({ statusCode: 400, body: JSON.stringify(err) }))
}
