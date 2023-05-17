import React from "react";
import LoginNavigation from "../components/landingPageComponents/LoginNavigation";
import Explore from "../components/landingPageComponents/Explore";
import FindJob from "../components/landingPageComponents/FindJob";
import PostJob from "../components/landingPageComponents/PostJob";
import OpenToWork from "../components/landingPageComponents/OpenToWork";
import Footer from "../components/landingPageComponents/Footer";
import RandomFooter from "../components/RandomFooter";

const LandingPage = () => {
  return (
    <div>
      <div className="ml-0 mr-0 lg:pl-56 lg:pr-12 lg:mr-12">
        <LoginNavigation />
        <div className="grid grid-cols-10 pl-2 space-x-12 w-full my-8">
          <div className="col-span-10 md:col-span-5 lg:col-span-4 p-1">
            <h1 className=" text-amber-800 text-5xl font-extralight my-10 leading-11">
              Welcome to your professional community
            </h1>
            <form>
              <div>
                <p className="text-sm my-2 font-semibold">Email or phone</p>
                <input
                  type="text"
                  className="p-3 w-[90%] border border-black hover:bg-gray-200 rounded-md"
                />
              </div>
              <div>
                <p className="text-sm my-2 font-semibold">Password</p>
                <input
                  type="text"
                  className="p-3 w-[90%] border border-black hover:bg-gray-200 rounded-md"
                />
              </div>

              <p className="text-sm font-semibold text-blue-600 my-7 hover:underline cursor-pointer">
                Forgot password?
              </p>

              <button className="p-2 w-[90%] border bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
                Sign In
              </button>

              <div className="grid grid-cols-12 mt-4 mb-8 w-[90%]">
                <span className="col-span-5 bg-gray-600 mt-3 h-[0.0125rem]"></span>
                <span className="col-span-2 text-center  h-1">or</span>
                <span className="col-span-5 bg-gray-600 mt-3 h-[0.0125rem]"></span>
              </div>

              <button className="p-2 w-[90%] border border-black text-black font-semibold rounded-full my-2 hover:bg-gray-100">
                Sign In with Google
              </button>

              <button className="p-2 w-[90%] border border-black text-black font-semibold rounded-full my-2 hover:bg-gray-100">
                New to LinkedIn? Join now
              </button>
            </form>
          </div>
          <img
            className="col-span-10 md:col-span-5 lg:col-span-6 my-24 w-[80%]"
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          />
        </div>
      </div>
      <Explore />
      <FindJob />
      <PostJob />
      <OpenToWork />
      <Footer />
      <RandomFooter />
    </div>
  );
};

export default LandingPage;
