import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import { toast } from "react-toastify";

const Form = () => {
  const [userVal, setValue] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue({ ...userVal, [name]: value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        userVal
      );
      toast.success("Email send Successfully!");
    } catch (error) {
        toast.error("Failed to send email. Please try again later.");
    }
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="fields">
          <input
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            value={userVal.name}
            name="name"
            autoComplete="0"
            required
          />
        </div>
        <div className="fields">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            value={userVal.email}
            autoComplete="0"
            required
          />
        </div>
        <div className="fields">
          <input
            type="text"
            placeholder="Number"
            onChange={handleInputChange}
            value={userVal.number}
            name="number"
            required
          />
        </div>
        <div className="fields">
          <textarea
            placeholder="Message"
            className="my-2"
            onChange={handleInputChange}
            value={userVal.message}
            name="message"
            required
          ></textarea>
        </div>
        <Button>Send Message</Button>
      </form>
    </>
  );
};

export default Form;
