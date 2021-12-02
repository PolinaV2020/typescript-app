import React from 'react';
import UserList from "./components/UserList";
import Card, { CardVariants } from "./components/Card";


const App = () => {
  return (
    <div>
      <UserList />
      <Card width="200px" height="200px" variant={CardVariants.outlined}>
        <button>Button</button>
      </Card>
    </div>
  );
};

export default App;

