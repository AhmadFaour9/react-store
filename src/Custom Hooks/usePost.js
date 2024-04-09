import axios from "axios";
import { useState } from "react";
import config from "../Constants/enviroment";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookies";
const usePost = (endPoint, Body, isSign) => {
  const [loading, setLoading] = useState(null);
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const handleClick = () => {
    setLoading("loading");
    axios
      .post(`${config.baseUrl}/${endPoint}`, Body)
      .then((res) => {
        console.log(res);
        setLoading(true);
        {
          isSign && isSign.isSignUp == true && navigate("/login");
        }
        if (isSign && isSign.isSignIn == true) {
          Cookies.setItem("token", res.data.token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.code == "ERR_NETWORK") {
          setErr("error")
        }
        else {
          setErr(err.response.data.detail);
        }
        setLoading(false);
        setTimeout(() => {
          setLoading(null);
        }, 1500);
      });
  };
  return [loading, handleClick, err];
};

export default usePost;
