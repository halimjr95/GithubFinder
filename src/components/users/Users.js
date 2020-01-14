import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/spinner";

const Users = props => {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
  };

  if (props.loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {props.users.map(user => (
        <UserItem user={user} />
      ))}
    </div>
  );
};

export default Users;
