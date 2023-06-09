import React from "react";
import SingularUserCard from "./SingularUserCard";
import SingleCreatorCard from "./SingleCreatorCard";

const Alumni = () => {
  return (
    <div className="bg-white w-full text-sm">
      <div className="flex justify-between px-4 pt-4 pb-2 border-b mb-2">
        <p>
          People you may know from <span>Covenant University</span>
        </p>
        <p>See all</p>
      </div>
      <div className="grid grid-cols-12 my-2">
        <SingularUserCard />
        <SingularUserCard />
        <SingularUserCard />
        <SingularUserCard />
        <SingularUserCard />
        <SingularUserCard />
        <SingularUserCard />
        <SingularUserCard />
      </div>

      <div className="flex justify-between px-4 pt-4 pb-2 border-b mb-2">
        <p>Top emerging creators to follow</p>
        <p>See all</p>
      </div>
      <div className="grid grid-cols-12 my-2">
        <SingleCreatorCard />
        <SingleCreatorCard />
        <SingleCreatorCard />
        <SingleCreatorCard />
        <SingleCreatorCard />
        <SingleCreatorCard />
        <SingleCreatorCard />
        <SingleCreatorCard />
      </div>
    </div>
  );
};

export default Alumni;
