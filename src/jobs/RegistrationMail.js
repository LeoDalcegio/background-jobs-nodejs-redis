import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  options: {
    delay: 5000,
    priority: 3,
  },
  async handle({ data }) {
    const { user } = data;

    Mail.sendMail({
      from: "leo <leoodalcegio@hotmail.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro usuário",
      html: `Olá, ${user.name}, bem-vindo`,
    });
  },
};
