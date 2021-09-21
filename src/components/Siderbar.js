import { Avatar } from "@material-ui/core";
import React from "react";
import "../assets/styles/Sidebar.css";
import Background from "../assets/Images/bgImage.jpeg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Siderbar = () => {
  const user = useSelector(selectUser);
  const RecentItems = ({ title }) => {
    return (
      <div>
        <p className="hashtags"> # {title} </p>
      </div>
    );
  };

  return (
    <div className="sidebarLeft_Main">
      <div className="sidebarLeft">
        <img src={Background} />
        <div className="avatarContainer">
          {user.FullName != undefined && (
            <Avatar src={user.ProfileURL}>{user.FullName[0]}</Avatar>
          )}
        </div>
        <div style={{ borderBottom: "0.1px solid #dfdedb" }}>
          <h4>{user.FullName}</h4>
          <p>{user.Email}</p>
        </div>
        <div className="sidebarLeft_stats">
          <p className="display_stats">Who Viewed your profile</p>
          <p className="number_stats">51</p>
        </div>
        <div className="sidebarLeft_stats">
          <p className="display_stats">Views of your post</p>
          <p className="number_stats">138</p>
        </div>
      </div>
      <div className="sidebarLeft_Recent">
        <h4>Recent</h4>
        <RecentItems title="Career join" />
        <RecentItems title="Dubai Recruitment" />
        <RecentItems title="recruitement" />
        <RecentItems title="islamabad" />
        <RecentItems title="ios" />
      </div>
    </div>
  );
};

export default Siderbar;
