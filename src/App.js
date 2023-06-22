import { useEffect, useState } from "react";

function App() {
const [num,setNum] = useState(0);
console.log("it render outside the useeffect")

useEffect(() =>{
  alert("useeffect is called")
})
  
  return (
    <div className="App">
      <div>
        <button onClick={(e) =>{setNum(num+1)}}>clicked {num}</button>
      </div>
    </div>
  );
}

export default App;
