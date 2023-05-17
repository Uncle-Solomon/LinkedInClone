import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-10 grid-cols-12 pl-2 lg:pl-56 lg:pr-12 lg:mr-12">
      <div className="md:col-span-2 mt-8 col-span-4 flex gap-1 items-start text-xl text-blue-600 ">
        Linked <BsLinkedin className="h-6 w-6 " />
      </div>
      <div className="md:col-span-2 mt-8 col-span-4 font-semibold text-sm text-gray-800 ">
        <p className="pb-3">General</p>
        <ul>
          <li className="py-1 font-medium">Sign Up</li>
          <li className="py-1 font-medium">Help Center</li>
          <li className="py-1 font-medium">About</li>
          <li className="py-1 font-medium">Press</li>
          <li className="py-1 font-medium">Blog</li>
          <li className="py-1 font-medium">Careers</li>
          <li className="py-1 font-medium">Developers</li>
        </ul>
      </div>
      <div className="md:col-span-2 mt-8 col-span-4 font-semibold text-sm text-gray-800 ">
        <p className="pb-3">Browse LinkedIn</p>
        <ul>
          <li className="py-1 font-medium">Learning</li>
          <li className="py-1 font-medium">Jobs</li>
          <li className="py-1 font-medium">Salary</li>
          <li className="py-1 font-medium">Mobile</li>
          <li className="py-1 font-medium">Services</li>
          <li className="py-1 font-medium">Products</li>
        </ul>
      </div>
      <div className="md:col-span-2 mt-8 col-span-4 font-semibold text-sm text-gray-800 ">
        <p className="pb-3">Business Solutions</p>
        <ul>
          <li className="py-1 font-medium">Talent</li>
          <li className="py-1 font-medium">Marketing</li>
          <li className="py-1 font-medium">Sales</li>
          <li className="py-1 font-medium">Learning</li>
        </ul>
      </div>
      <div className="md:col-span-2 mt-8 col-span-4 font-semibold text-sm text-gray-800 ">
        <p className="pb-3">Directories</p>
        <ul>
          <li className="py-1 font-medium">Members</li>
          <li className="py-1 font-medium">Jobs</li>
          <li className="py-1 font-medium">Companies</li>
          <li className="py-1 font-medium">Featured</li>
          <li className="py-1 font-medium">Learning</li>
          <li className="py-1 font-medium">Posts</li>
          <li className="py-1 font-medium">Articles</li>
          <li className="py-1 font-medium">Schools</li>
          <li className="py-1 font-medium">News</li>
          <li className="py-1 font-medium">News Letters</li>
          <li className="py-1 font-medium">Services</li>
          <li className="py-1 font-medium">Products</li>
          <li className="py-1 font-medium">Advice</li>
          <li className="py-1 font-medium">People Search</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
