import React, {useState,createContext}from 'react';
import ComponentE from './ComponentE';
export const UserContext = createContext();
function ComponentD() {
    const [user,setUser] = useState("Lucky");
  return (
    <div>
    <h1 className="with-props">With using UseContext</h1>
    <div className="box-1">
      <h1>Component D</h1>
      <UserContext.Provider value={user}>
      <p>Hello, {user}!</p>
       <ComponentE />
       </UserContext.Provider>
    </div>
    </div>
  );
}
export default ComponentD;