import React, { useState } from 'react';
import './multiple.css';

function EmployeeForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailId: '',
    program: '',
    address: '',
    qualifications: []
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (type === 'checkbox') {
      if (checked) {
        setFormState({
          ...formState,
          qualifications: [...formState.qualifications, value]
        });
      } else {
        setFormState({
          ...formState,
          qualifications: formState.qualifications.filter((item) => item !== value)
        });
      }
    } else {
      if (name === "firstName" && value.length < 5) {
        console.log("First name must be more than 5 characters");
        return;
      } else {
        setFormState({
          ...formState,
          [name]: value
        });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formState));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" onChange={handleChange} placeholder="First Name" minlength="5"/>
      <input name="lastName" onChange={handleChange} placeholder="Last Name" />
      <input name="mobileNumber" onChange={handleChange} placeholder="Mobile Number" />
      <input name="emailId" onChange={handleChange} placeholder="Email ID" />
      <select name="program" onChange={handleChange}>
        <option value="">Select Program</option>
        <option value="healthInformatics">Health Informatics</option>
        <option value="artificialIntelligence">Artificial Intelligence</option>
        <option value="softwareEngineer">Software Engineer</option>
        <option value="softwareProgramming">Software Programming</option>
      </select>
      <textarea name="address" onChange={handleChange} placeholder="Address" />

      <div>
        <label>Qualifications:</label>
        <label>
          <input
            type="checkbox"
            name="qualifications"
            value="10th"
            onChange={handleChange}
          />
          High School (10th)
        </label>
        <label>
          <input
            type="checkbox"
            name="qualifications"
            value="12th"
            onChange={handleChange}
          />
          Higher School (12th)
        </label>
        <label>
          <input
            type="checkbox"
            name="qualifications"
            value="bachelor"
            onChange={handleChange}
          />
          Graduation (Bachelor)
        </label>
        <label>
          <input
            type="checkbox"
            name="qualifications"
            value="master"
            onChange={handleChange}
          />
          Post-Graduation (Master)
        </label>
        <label>
          <input
            type="checkbox"
            name="qualifications"
            value="other"
            onChange={handleChange}
          />
          Other
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
