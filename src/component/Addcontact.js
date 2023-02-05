import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addcontact = ({ setContacts }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/contacts", contact)
      .then()
      // .then(res => setContacts(res.data))
      .catch();
    // setContact({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="Add">
      <form onSubmit={submitHandler}>
        <div className="formcontrol">
          <label>name</label>
          <input name="name" value={contact.name} onChange={changeHandler} />
        </div>
        <div className="formcontrol">
          <label>name</label>
          <input name="email" value={contact.email} onChange={changeHandler} />
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Addcontact;
