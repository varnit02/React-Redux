import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";
const App = () => {
  //state = { resource: "Posts" };
  //const [stetateproperty, setState property] = useState(default values of state);
  const [resource, setResource] = useState("posts"); //array

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
