import React, { useState, useEffect } from 'react';
import Routes from "./routes";
import { Link, useHistory } from "react-router-dom";

function App() {

  const history = useHistory();
  const [path, setPath] = useState("");

  // DARK MODE
  // const [darkMode, setDarkMode] = React.useState(true);


  window.addEventListener("load", () => {

    if (window.location.pathname === "/contact") {
      setPath(window.location.pathname);
    }
  });

  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname)
    });
  }

  useEffect(() => {
    checkPath();
  }, []);

  const showContact = path;
  let _contact;
  if (showContact !== "/contact") {
    _contact = (<li><Link to="/contact">Contact Me</Link></li>)
  }

  return (
    // <div className={darkMode ? "dark-mode" : "light-mode"}>
    <div className="App">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/"> WebApp Solution </Link>
            </li>
          </ul>
          <ul>
            {_contact}
          </ul>
        </nav>
        <Routes />
      </div>
    </div>
    // </div>
  );
}

export default App;
