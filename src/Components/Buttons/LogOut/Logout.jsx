import { useContext, useState } from "react";
import { AuthContext } from "../../../Utility/Providers/AuthProviders";
import "../LogOut/Logout.css";
import { useNavigate } from "react-router-dom";
const Logout = () => {

    const { logOut } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleSignOut = () => {
      logOut()
        .then((result) => {
          navigate("/");
        })
        .catch((error) => {
          setError(error.massage);
        });
    };
  return (
    <div>
      <button className="cta flex justify-center" onClick={handleSignOut}>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Logout;
