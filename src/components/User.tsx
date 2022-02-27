import "../styles/dashboard.scss";
import default_avatar from "../assets/images/default_avatar.svg";

import "../styles/button.scss";
import { useAuthContext } from "../hooks/useAuthContext";

export function User() {
  const { user } = useAuthContext();

  return (
    <div className="user-wrapper">
      <img
        src={user?.avatar ? user?.avatar : default_avatar}
        alt="avatar"
        width="40px"
        height="40px"
      />
      <div>
        <h4>{user?.name}</h4>
      </div>
    </div>
  );
}
