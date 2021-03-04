import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

const SignUpIn = () => {
  return (
    <div className="SignUpIn">
      Login in!
      <form method="POST" action="/session/connect">
        <input type="text" name="email" required id="email" />
        <br />
        <input type="password" name="password" required id="password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SignUpIn;
