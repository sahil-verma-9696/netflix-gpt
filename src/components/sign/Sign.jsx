import React, { useState } from "react";
import Header from "../utils/Header";
import Form from "../utils/Form";

function Sign() {
  const [isSign, setIsSign] = useState(true); // true = user want sign up
  return (
    <div className="login size-full ">
      <Header />
      <Form isSign={isSign} setIsSign={setIsSign} />
    </div>
  );
}

export default Sign;
