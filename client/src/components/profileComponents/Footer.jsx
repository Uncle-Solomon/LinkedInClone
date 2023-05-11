import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-5 md:col-span-2 text-xs text-gray-700 my-2 font-medium">
        <p className="my-2">About</p>
        <p className="my-2">Community Guidelines</p>
        <p className="my-2">Privacy & Terms</p>
        <p className="my-2">Sales Solutions</p>
        <p className="my-2">Safety Center</p>
      </div>
      <div className="col-span-5 md:col-span-2 text-xs text-gray-700 my-2 font-medium">
        <p className="my-2">Accessibility</p>
        <p className="my-2">Careers</p>
        <p className="my-2">Ad Choices</p>
        <p className="my-2">Mobile</p>
      </div>
      <div className="col-span-5 md:col-span-2 text-xs text-gray-700 my-2 font-medium">
        <p className="my-2">Talent Solutions</p>
        <p className="my-2">Marketing Solutions</p>
        <p className="my-2">Advertising</p>
        <p className="my-2">Small Business</p>
      </div>
      <div className="col-span-5 md:col-span-2 text-xs text-gray-700 my-2 font-medium">
        <p className="my-2  text-sm font-bold">Questions</p>
        <p className="-mt-2 mb-4">Visit our Help Center.</p>
        <p className="my-2 text-sm font-bold">
          Manage your account and privacy
        </p>
        <p className="-mt-2 mb-4">Go to your Settings.</p>
        <p className="my-2 text-sm font-bold">Recommendation transparency</p>
        <p className="-mt-2 mb-4">Learn more about Recommended Content.</p>
      </div>
      <div className="col-span-5 md:col-span-2 text-xs text-gray-700 my-2 font-medium">
        <p className="my-2">Select Language</p>
        <select className="w-full p-2">
          <option>English (English)</option>
          <option>French (French)</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
