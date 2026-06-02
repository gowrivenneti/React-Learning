import React, {useState}from 'react';
import ComponentB from './ComponentB';
function ComponentA() {
    const [user,setUser] = useState("Lucky");
  return (
    <div>
    <h1 className="with-props">Without using UseContext</h1>
    <div className="box-1">
      <h1>Component A</h1>
      <p>Hello, {user}!</p>
       <ComponentB user={user}/>
       </div>
    </div>
  );
}
export default ComponentA;