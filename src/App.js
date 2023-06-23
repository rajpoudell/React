import { useEffect, useState } from "react";
import "./index.css"
function App() {
const [num,setNum] = useState(0);

useEffect(() => {
  
  console.log("useEffect is render")
  alert("This is alterd")
})
  return (
    <div className="App">
      <div className="btn">
        <button onClick={() =>{setNum(num+1)}}>clicked {num}</button>
      </div>
    </div>
  );
}

export default App;
