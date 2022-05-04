import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      <div>
        {user.name}
        {user.id}
        {user.email}
        {user.address.city}
        {user.address.street}
        {user.address.zipcode}
      </div>
    </div>
  );
};

export default UserItem;
