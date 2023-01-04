import { useState } from 'react';
import Checkbox from "./CheckBox";
 
export default function Form() {
 
  // States for registration
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [Country, setCountry] = useState('');
  const [gender, setgender] = useState('');

 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the firstName change
  const handlefirstName = (e) => {
    console.log("FirstName is-",e.target.value)
    setfirstName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the lastName change
  const handlelastName = (e) => {
    console.log("LastName is-",e.target.value)
    setlastName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the Country change
  const handleCountry = (e) => {
    console.log("Country is-",e.target.value)
    setCountry(e.target.value);
    setSubmitted(false);
  };
  const handlegender = (e) => {
      setgender(e.target.value);
      console.log("Gender-",e.target.value)
    setSubmitted(false);
  };
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '' || Country === '' || gender === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {firstName} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">firstName</label>
        <input onChange={handlefirstName} className="input"
          value={firstName} type="text" />
 
        <label className="label">lastName</label>
        <input onChange={handlelastName} className="input"
          value={lastName} type="lastName" />
 
        <label className="label">Country</label>
        <input onChange={handleCountry} className="input"
          value={Country} type="Country" />
          <label className="label">gender</label>
        <input onChange={handlegender} className="input"
          value={gender} type="gender" />
          <br/>
          <label lassName="label">Select a Profile:</label>
       <input type="file" id="myfile" name="myfile"></input>
        <div className="label">
          <Checkbox label="Want to Receive emails for Best Offer" />
        </div>
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}