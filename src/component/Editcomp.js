import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Editcomp = () => {
  const navigate = useNavigate();
    const loc = useLocation();
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState({ name: "", email: "" });

  useEffect(() => {
    // axios
    //   .get(`http://localhost:3001/contacts/${id}`)
    //   .then((res) => setItem(res.data))
    //   .catch();
    setItem(loc.state.cont)
  }, []);

  const changeHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/contacts/${item.id}`, item)
      .then()
      .catch();
    navigate("/");
  };
  
  return (
    <div className="Add">
      <form onSubmit={submitHandler}>
        <div className="formcontrol">
          <label>name</label>
          <input name="name" value={item.name} onChange={changeHandler} />
        </div>
        <div className="formcontrol">
          <label>name</label>
          <input name="email" value={item.email} onChange={changeHandler} />
        </div>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default Editcomp;
