import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Members from "./components/Members";
import Form from "./components/Form";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const Data = [
    {
      id: 1,
      img: "https://picsum.photos/200/300",
      name: "Timuçin Alpay Bohur",
      email: "alpay@gmail.com",
      rol: "Front-end Developer",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300",
      name: "Timuçin Bohur",
      email: "timuçin@gmail.com",
      rol: "Front-end Developer",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300",
      name: "Alpay Bohur",
      email: "bohur@gmail.com",
      rol: "Front-end Developer",
    },
  ];

  const formDataInitial = {
    name: "",
    email: "",
    rol: "",
  };

  const [formData, setFormData] = useState(formDataInitial);
  const [members, setMembers] = useState(Data);

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.id) {
      //EDİT
      let updateMember = members.map((member) => {
        if (member.id == formData.id) {
          return formData;
        } else {
          return member;
        }
      });
      //EDİT
      setMembers(updateMember);
    } else {
      const newMember = {
        ...formData,
        ["img"]: "https://picsum.photos/200/300",
        ["id"]: members[members.length - 1].id + 1,
      };
      setMembers([...members, newMember]);
    }

    setFormData(formDataInitial);
    history.push("/");
  };

  const changeHandler = (e) => {
    let { value, type, name, checked } = e.target;
    value = type == "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
  };

  const editMember = (member) => {
    setFormData(member);
    history.push("/signup");
  };
  return (
    <div>
      <header>
        <nav className="d-flex p-3 ">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/signup" exact>
            New Member
          </NavLink>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Members members={members} editMember={editMember} />
        </Route>
        <Route exact path="/signup">
          <Form
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            formData={formData}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
