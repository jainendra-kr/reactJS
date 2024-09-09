import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please Login</div>;

  return <diV>Welcome {user.username}</diV>;
}

export default Profile;
