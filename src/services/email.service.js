const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({

    host: process.env.MAIL_HOST,

    port: process.env.MAIL_PORT,

    auth: {

        user: process.env.MAIL_USER,

        pass: process.env.MAIL_PASS,
    },
});

exports.sendOwnerValidationEmail = async(user) =>
{
    const mail = {

        from: process.env.MAIL_FROM,
        to: user.email,

        subject: 'ZenHotels Account has been approved',
        html:`
        <h2>Account Approved</h2>

        <pre>
        Hello ${user.name},
        Your account has been approved and granted the role of <b>'owner'</b>.
        You can now login and start managing your properties.
        Best regards,
        ZenHOTELS.
        </pre>
        `,
    };
    await transporter.sendMail(mail);
}

exports.sendVerificationEmail = async(user) =>
{

    const mail = 
    {

        from: process.env.MAIL_FROM,
        to: user.email,

        subject: 'ZehHotels Account Verification',

        html: `<h2>account</h2>
        <pre>
        Thank you for Choosing ZenHotels.
        Bellow you'll find your account verification link:
        </pre>
        <a href=${'account link here'}>
        <button><b>Verify Account</b></button>
        </a>
        `
    };
    await transporter.sendMail(mail);
}