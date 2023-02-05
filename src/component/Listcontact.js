import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Listcontact = () => {
  const [contacts, setContacts] = useState([]);
  const [Allcontacts, setAllcontacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/contacts")
      .then((res) => setContacts(res.data))
      .catch();
    axios
      .get("http://localhost:3001/contacts")
      .then((res) => setAllcontacts(res.data))
      .catch();
    // setAllcontacts(contacts)
    filtersearch(search);
  }, []);

  const removeHandler = (id) => {
    axios
      .delete(`http://localhost:3001/contacts/${parseInt(id)}`)
      .then((res) => axios.get("http://localhost:3001/contacts"))
      .then((res) => setContacts(res.data))
      .then((res) => axios.get("http://localhost:3001/contacts"))
      .then((res) => setAllcontacts(res.data))
      .catch();
  };

  const changeHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
    filtersearch(e.target.value);
  };

  const filtersearch = (search) => {
    console.log(search);
    if (search === "" && !search) {
      setAllcontacts(contacts);
      return;
    }
    const filteritems = contacts.filter((item) => Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase()));
    // console.log(filteritems)
    setAllcontacts(filteritems);
  };

  return (
    <div>
      <Link to="/add">
        <button>Add</button>
      </Link>
      <input type="text" value={search} onChange={changeHandler} />
      {Allcontacts.map((cont) => {
        return (
          <div key={cont.id}>
            <span>{cont.name}</span>
            <span>{cont.email}</span>
            <button onClick={() => removeHandler(cont.id)}>delete</button>
            <Link to={{ pathname: `/edit/${cont.id}` }} state={{ cont: cont }}>
              <button>edit</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Listcontact;
