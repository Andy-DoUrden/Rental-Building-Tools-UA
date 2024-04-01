import { Form, FormButton, FormInput, FormLabel } from "./CartForm.styled";
import { useState } from "react";
import { useAddOrderMutation } from "../../../Redux/API/RTK";
import { useSelector } from "react-redux";

const CartForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [rentStartDate, setRentStartDate] = useState("");
  const [rentEndDate, setRentEndDate] = useState("");
  const [addOrder] = useAddOrderMutation();
  const goods = useSelector((state) => state.cart.cart);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setNumber("");
    setEmail("");
    setAdress("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName === "" || lastName === "" || email === "" || number === "" || adress === "" || goods.length === 0) {
      alert("У вас є не заповнені поля або пустий кошик!");
      return;
    }

    const order = {
      firstName,
      lastName,
      email,
      number,
      adress,
      goods,
      rentStartDate,
      rentEndDate,
    };

    console.log(order);
    addOrder(order);
    resetForm();
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      case "adress":
        setAdress(event.target.value);
        break;
      case "rentStartDate":
        setRentStartDate(event.target.value);
        break;
      case "rentEndDate":
        setRentEndDate(event.target.value);
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
          pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,30}"
          title="First name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={firstName}
          onChange={handleChange}
          placeholder="Микола"
        />
      </FormLabel>
      <FormLabel htmlFor="">
        Прізвище
        <FormInput
          type="text"
          name="lastName"
          pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,30}"
          title="Last name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={lastName}
          onChange={handleChange}
          placeholder="Байда"
        />
      </FormLabel>

      <FormLabel htmlFor="">
        Пошта
        <FormInput
          type="email"
          value={email}
          name="email"
          pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9.,\s-]{2,100}"
          onChange={handleChange}
          placeholder="MykolaBayda@gmail.com"
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
          placeholder="+380123456789"
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
          placeholder="м. Київ, обл. Київська, вул. Львівська 1, 02000"
        />
      </FormLabel>

      <FormLabel htmlFor="">
        Дата бронювання
        <FormInput type="date" name="rentStartDate" required value={rentStartDate} onChange={handleChange} />
      </FormLabel>

      <FormLabel htmlFor="">
        Дата повернення
        <FormInput type="date" name="rentEndDate" min={rentStartDate} required value={rentEndDate} onChange={handleChange} />
      </FormLabel>

      <FormButton type="submit">Запросити</FormButton>
    </Form>
  );
};

export default CartForm;
