import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    subject: {},
    fName: "",
    lName: "",
    gender: "",
    about: "",
    city: "",
  });

  const { fName, lName, gender, about, city, subject } = user;

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setUser((prev) => ({ ...prev, subject: {...prev.subject, [e.target.name]: e.target.checked} }));
    }
    else{
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      // taking previous old values stored in user state
      // and then spreads it and then put new values there
      // overwriting the old values with new values
    }
  };

  return (
    <div className="App">
      <h2> Form Element</h2>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            onChange={handleChange}
            defaultValue={fName}
            name="fName"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            onChange={handleChange}
            defaultValue={lName}
            name="lName"
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <div className="form-control">
            <input
              type="checkbox"
              name="maths"
              defaultChecked={subject["maths"]}
              onChange={handleChange}
            />
           Maths
            <input
              type="checkbox"
              name="biology"
              defaultChecked={subject["biology"]}
              onChange={handleChange}
            />
            Biology
          </div>
        </div>
        <div className="form-group">
          <label className="gender">Gender</label>
          <div className="form-control">
            <input
              type="radio"
              name="gender"
              defaultValue="male"
              defaultChecked={gender === "male"}
              onChange={handleChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              defaultChecked={gender === "female"}
              defaultValue="female"
              onChange={handleChange} 
            />
            Female
          </div>
        </div>

        <div className="form-group">
          <label>About me</label>
          <textarea name="about" defaultValue={about} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="city"> City</label>
          <div className="form-control">
            <select
              className="cities-options"
              name="city"
              defaultValue={city}
              onChange={handleChange}
            >
              <option value="">Please choose</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="kolkata">Kolkata</option>
              <option value="chennai">Chennai</option>
              <option value="patna">Patna</option>
              <option value="bangalore">Bangalore</option>
              <option value="bangalore1">Bangalore1</option>
            </select>
          </div>
        </div>
        <button type="submit" onSubmit="handleSubmit">
          Submit
        </button>
      </form>

      <h4>{JSON.stringify(use)}</h4>
    </div>
  );
}

export default App;
