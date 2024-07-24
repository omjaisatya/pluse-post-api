const nodemail = require("nodemailer");
const { senderEmail, emailPassword } = require("../config/kyes");

const sendEmail = async ({ emailTo, subject, code, content }) => {
  const transporter = nodemail.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: senderEmail,
      pass: emailPassword,
    },
  });

  const message = {
    to: emailTo,
    subject,
    html: `
        <div
      style="
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
      "
    >
      <div
        style="
          background-color: #007bff;
          padding: 10px;
          border-radius: 8px 8px 0 0;
        "
      >
        <h2 style="color: #fff; margin: 0; font-weight: bold">
          Verify Your Email
        </h2>
      </div>
      <div
        style="
          background-color: #fff;
          padding: 20px;
          border-radius: 0 0 8px 8px;
        "
      >
        <p style="font-size: 16px">Dear User,</p>
        <p style="font-size: 16px">
          Use the verification code below to ${content}:
        </p>
        <div
          style="
            background-color: #007bff;
            color: #fff;
            padding: 15px;
            text-align: center;
            border-radius: 5px;
            font-size: 24px;
            margin-top: 10px;
          "
        >
          <strong>${code}</strong>
        </div>
        <p style="font-size: 14px; margin-top: 20px">
          If you did not request this code, please disregard this email.
        </p>
        <div style="margin-top: 20px">
          <p style="font-size: 14px">
            For more information about our services, please visit
            <a
              href="https://pluse-post.vercel.app/"
              style="color: #007bff; text-decoration: none"
              target="_blank"
              >our website</a
            >.
          </p>
          <p style="font-size: 14px">
            Follow us on
            <a
              href="https://x.com/PlusePost"
              style="color: #007bff; text-decoration: none"
              target="_blank"
              >Twitter(X)</a
            >
            for updates and announcements.
          </p>
        </div>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0" />
        <p style="font-size: 14px">Best regards,<br />Pluse Post</p>
      </div>
    </div>
      `,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;
