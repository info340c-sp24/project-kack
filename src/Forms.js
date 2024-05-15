import React, { useState } from "react";
import Footer from './Footer.js';

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [userState, setUserState] = useState("");
  const [zip, setZip] = useState("");
  const [donation, setDonation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, phone, address, city, userState, zip, donation });

    // Clear the form fields
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCity("");
    setUserState("");
    setZip("");
    setDonation("");
  };

  return (
    <body>
    <main className="donation-main">
  <section className="donation-container">
    <h1 className="donation-heading">Donation Form</h1>
    <form onSubmit={handleSubmit}>
      <div className="input-row">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </div>

      <div className="input-row">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={address} onChange={(event) => setAddress(event.target.value)} required />
      </div>

      <div className="input-row">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={city} onChange={(event) => setCity(event.target.value)} required />

        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={userState} onChange={(event) => setUserState(event.target.value)} required />
      </div>

      <div className="input-row">
        <label htmlFor="zip">Zip Code:</label>
        <input type="text" id="zip" name="zip" value={zip} onChange={(event) => setZip(event.target.value)} required />

        <label htmlFor="donation">Donation:</label>
        <input type="text" id="donation" name="donation" value={donation} onChange={(event) => setDonation(event.target.value)} required />
      </div>

      <input type="submit" value="Submit" />
    </form>
  </section>
</main>
<Footer />
</body>
  );
};

export default FormComponent;