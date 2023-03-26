import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setpincode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showData, setShowData] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowData(true);
    alert('Registration form submitted!');
   
 
  };
  return (
    <>
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <select id="title" value={title} onChange={(e) => setTitle(e.target.value)}>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
        </div>
        <div>
          <label htmlFor="firstName">FirstName:</label>
          <input type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="lastName">LastName:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="addresss">Address:</label>
          <input type="text"  value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="pincode">Pincode:</label>
          <input type="number" id="pincode" value={pincode} onChange={(e) => setpincode(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile_Number:</label>
          <input type="number"  value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
        </div>
        <div>
            <button type="submit"  className="button" >Submit</button>
         </div>

      
        </form>
        {showData && (
          <div>
          <h2>User Data</h2>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Address: {address}</p>
          <p>Pincode: {pincode}</p>
          <p>Mobile Number: {mobileNumber}</p>
        </div>
      )}
    </div>
      </>
  );
};

export default Form;
