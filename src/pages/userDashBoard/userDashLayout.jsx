import React from "react";
import UserNav from "./userNav";
import UserHome from "./userHome";
import Request from "./request";
import Faqs from "./faqs";
import Userfooter from "./userfooter";
import ReachOut from "../reachOut";

function UserDashLayout() {
  return (
    <>
      <UserNav />
      <div className="p-4 w-[90vw] mx-auto">
        <UserHome />
        <Request />
        <Faqs />
        <ReachOut />
      </div>
      {/* <Userfooter /> */}
    </>
  );
}

export default UserDashLayout;
