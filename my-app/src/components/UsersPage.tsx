import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

function UsersPage() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();

    return () => {};
  }, []);

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />
    </div>
  );
}

export default UsersPage;
