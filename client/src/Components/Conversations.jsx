import { useEffect, useState } from "react";
import axios from "axios";

export default function Conversations({ conversations, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversations.members.find((m) => m !== currentUser.id);

    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user/findUser?userId=` + friendId
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [currentUser, conversations]);

  return (
    <li className="clearfix d-flex">
      <img
        src="https://bootdey.com/img/Content/avatar/avatar1.png"
        alt="avatar"
      />
      <div className="about">
        <div className="name">{user?.email}</div>
        <div className="status">
          <i className="fa fa-circle offline" /> left 7 mins ago
        </div>
      </div>
    </li>
  );
}
