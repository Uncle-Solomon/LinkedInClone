import React from "react";
import { BsPencil } from "react-icons/bs";

const About = ({ isOpen }) => {
  return (
    <div
      className={`rounded-md p-6 w-[95%] mx-auto shadow-md  z-0 my-2 ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="text-base font-bold">About</h1>
        <BsPencil />
      </div>
      <p className="text-xs mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quas
        sequi obcaecati mollitia, illo repellendus assumenda omnis qui
        voluptatibus! Eius debitis optio nesciunt sapiente ut repellat quod
        totam nobis dicta. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Repellendus ipsa porro, quo quasi sint explicabo temporibus unde
        amet quidem enim deserunt! Sequi expedita incidunt velit laborum
        sapiente quae perspiciatis molestiae.
      </p>
    </div>
  );
};

export default About;
