import './App.css';
import React from "react";
import {useState} from "react";

function App(){

  //initial users data
  const [users, setUsers]= useState([
    {
      name:"Tharun",
      age: 24
    },
    {
      name:"Ranjith",
      age: 27
    },
    {
      name:"Revathi",
      age: 21
    }
  ])

  return(
    <div>
      <Home />
      <UserList users={users} />
      <CreateUser users={users} setUsers={setUsers}/>
    </div>
  )
}

// home page
function Home(){
  return(
    <div>
      <h1>Welcome to the users home page</h1>
    </div>
  )
}

function UserList({users}){
  return(
    <div>
      
      {
        users.map((usr,index)=>(
          <User key={index} user={usr} />
        ))
      }

    </div>
  )
}

function User({user}){
  return(
    <div>
      <div className="user_container">
        <p className="user_name">Name: {user.name}</p>
        <p className="user_age">Age: {user.age}</p>
      </div>
    </div>
  )
}

function CreateUser({users, setUsers}){

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // function to add a new user
  const addUser = () =>{
    const newUser = {
            name: name,
            age : age
          };
    
    setUsers([...users,newUser])
  }

  return(
    <div className="createUser_container">
      
      <div className="input_container">
      <input 
        type="text" 
        placeholder="enter user name" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="enter user age" 
        value={age}
        onChange={(e)=>setAge(e.target.value)} />
      </div>
      
      <button
        onClick={addUser}
      >
        Add
      </button>
    </div>
  )
}


export default App;
