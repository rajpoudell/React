import { useEffect, useState } from "react";

function App() {
const [num,setNum] = useState(0);
console.log("independent console msg")

useEffect(() =>{
  console.log("UseEffect's console msg")
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
