// import axios from "axios"
// import { useState } from "react"
// export default function App() {
//   const [Username,setUsername]=useState("")
//    function  handleSubmit(e){
//       e.preventDefault()
//       console.log(Username)
//     }

//     const [user,setUser] = useState("None")

//     async function handleClick () {
//      const response = await axios.get("http://localhost:3001/login",{username})
//      console.log("success");
//      setUser(response.data.title)
//   }
//     return (
//      <>
//      <form onSubmit={handleSubmit}>
//       <label>Username</label>
//       <input type="text" onChange={(e)=>{setUsername(e.target.value)}} />
//       <input type="submit" value="submit"/>
//      </form>
//      </>
//      )
//    }

import axios from "axios";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");

  async function handleClick() {

      const response = await axios.post("https://backend-zj0h.onrender.com/login", { username });
      console.log(response.data);
  
  }

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
