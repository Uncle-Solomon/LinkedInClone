import React from "react";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-10 grid-cols-12 lg:pl-56 lg:pr-12 lg:mr-12">
      <div className="md:col-span-2 col-span-4 ">Linked</div>
      <div className="md:col-span-2 col-span-4 ">
        <p>General</p>
        <ul>
          <li>Sign Up</li>
          <li>Help Center</li>
          <li>About</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Developers</li>
        </ul>
      </div>
      <div className="md:col-span-2 col-span-4 ">Linked</div>
      <div className="md:col-span-2 col-span-4 ">Linked</div>
      <div className="md:col-span-2 col-span-4 ">Linked</div>
    </div>
  );
};

export default Footer;
