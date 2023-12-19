import React, { useRef, useState } from "react";
import "./style/style.css";
import { useNavigate } from "react-router-dom";

const Home2 = () => {
  const [submitMsg, setSubmitMsg] = useState();
  const [searchMsg, setSearchMsg] = useState();
  const [showTextArea, setShowTextArea] = useState();
  const navigate = useNavigate();
  return (
    <div className="home-page-2">
      <h1>Home Page - 2</h1>
      <p>submit text message</p>
      <input
        type="text"
        value={submitMsg}
        onChange={(e) => {
          setSubmitMsg(e.target.value);
        }}
      />{" "}
      <br />
      <button
        onClick={() => {
          document.cookie = submitMsg;
          console.log(submitMsg);
        }}
      >
        Submit(button-1)
      </button>
      <p>Search text message</p>
      <input
        type="text"
        onChange={(e) => {
          setSearchMsg(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log(document.cookie);
          const cookieArr = document.cookie.split(";");
          const val = cookieArr.find((ele) => {
            const [ckey, cvalue] = ele.split("=");
            const [skey, svalue] = searchMsg.split("=");
            if (ckey && skey) {
              return true;
            }
          });
          if (val) {
            setShowTextArea(val);
          }
        }}
      >
        Search(button-2)
      </button>
      <p>Show searched text message here</p>
      <textarea
        value={showTextArea ? showTextArea : "no message found"}
        rows="15"
        cols="50"
      >
        {console.log("execute", showTextArea)}
      </textarea>
      <br />
      <button
        onClick={() => {
          const cookies = document.cookie.split(";");
          for (const cookie of cookies) {
            const [name] = cookie.split("=");

            document.cookie = `${name}=;expires=${new Date(
              0
            ).toUTCString()};path=/`;
          }
        }}
      >
        Clear all(button-3)
      </button>
      <br />
      <button
        onClick={() => {
          navigate("/");
          sessionStorage.clear();
        }}
      >
        logout (button-2)
      </button>
    </div>
  );
};

export default Home2;
