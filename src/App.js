import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    title: [],
    fName: "Type ashok",
    lName: "",
    gender: "",
    about: "",
    city: "",
  });

  const { fName, lName, gender, about, city, title} = user;

  const handleChange = (e) => {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
          <label>Title</label>
          <div className="form-control">
            <input
              type="checkbox"
              name="title"
              defaultValue="mr"
              defaultChecked={title.includes(['mr', 'mrs'])}
              onChange={handleChange}
            />
            Mr.
            <input
              type="checkbox"
              name="title"
              defaultChecked={title.includes(['mr', 'mrs'])}
              defaultValue="mrs"
              onChange={handleChange}
            />
            Mrs.
          </div>
        </div>
        <div className="form-group">
          <label className="gender">Gender</label>
          <div className="form-control">
            <input
              type="radio"
              name="gender"
              defaultValue="male"
              defaultChecked={gender === 'male'}
              onChange={handleChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              defaultChecked={gender === 'female'}
              defaultValue="female"
              onChange={handleChange}
            />
            Female
          </div>
        </div>

        <div className="form-group">
          <label>About me</label>
          <textarea
            name="about"
            defaultValue="about"
            onChange={handleChange}
          />
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
              <option value=''>Please choose</option>
              <option value='delhi'>Delhi</option>
              <option value='mumbai'>Mumbai</option>
              <option value='kolkata'>Kolkata</option>
              <option value='chennai'>Chennai</option>
              <option value='patna'>Patna</option>
              <option value='bangalore'>Bangalore</option>
              <option value='bangalore1'>Bangalore1</option>
            </select>
          </div>
        </div>
        <button type="submit" onSubmit="handleSubmit">
          Submit
        </button>
        <h4>{JSON.stringify(user)}</h4>
      </form>
    </div>
  );
}

export default App;
