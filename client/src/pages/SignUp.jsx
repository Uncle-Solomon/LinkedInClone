import React from "react";
import { BsLinkedin } from "react-icons/bs";

const SignUp = () => {
  return (
    <div className="pl-2 pt-2">
      <h1 className="text-xl text-blue-600 flex gap-1 items-center mb-6">
        Linked <BsLinkedin className="h-6 w-6 " />
      </h1>

      <form>
        <p className="text-sm mx-auto font-bold">
          Join LinkedIn now - it's free!
        </p>

        <p>Email or phone number</p>
        <input type="email" />

        <p>Password (6+ characters)</p>
        <input type="password" />
      </form>
    </div>
  );
};

export default SignUp;
