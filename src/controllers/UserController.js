import passwordGenerator from "password-generator";

import Queue from "../lib/Queue";

export default {
  async store(request, response) {
    const { name, email } = request.body;

    const user = {
      name,
      email,
      password: passwordGenerator(15, false),
    };

    await Queue.add("RegistrationMail", { user });

    return response.json(user);
  },
};
