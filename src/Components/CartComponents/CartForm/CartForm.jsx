import { Form, FormButton, FormInput, FormLabel } from "./CartForm.styled";
import { useState } from "react";

const CartForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [adress, setAdress] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setNumber("");
    setEmail("");
    setAdress("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const normalizedFirstName = firstName.toLowerCase();

    resetForm();
  };

  const handleChange = (event) => {
    switch (event.currentTarget) {
      case "firstName":
        setFirstName(event.currentTarget.value);
        break;
      case "lastName":
        setLastName(event.currentTarget.value);
        break;
      case "email":
        setEmail(event.currentTarget.value);
        break;
      case "number":
        setNumber(event.currentTarget.value);
        break;
      case "adress":
        setAdress(event.currentTarget.value);
        break;

      default:
        break;
    }
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <FormLabel htmlFor="">
        {"Ім'я"}
        <FormInput
          type="text"
          name="firstName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="First name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={firstName}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel htmlFor="">
        Прізвище
        <FormInput
          type="text"
          name="lastName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Last name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={lastName}
          onChange={handleChange}
        />
      </FormLabel>

      <FormLabel htmlFor="">
        Пошта
        <FormInput
          type="email"
          value={email}
          name="email"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          onChange={handleChange}
        />
      </FormLabel>

      <FormLabel htmlFor="">
        Телефон
        <FormInput
          type="text"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          onChange={handleChange}
        />
      </FormLabel>

      <FormLabel htmlFor="">
        Адреса
        <FormInput
          type="text"
          value={adress}
          name="adress"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
        />
      </FormLabel>

      <FormButton type="submit">Запросити</FormButton>
    </Form>
  );
};

export default CartForm;
