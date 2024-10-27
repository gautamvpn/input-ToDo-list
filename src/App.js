import "./styles.css";
import { useState } from "react";
export default function App() {
  const [val, setVal] = useState("");
  const [name, setName] = useState([]);

  const clickHandler = () => {
    // console.log(e.target.value);
    console.log(typeof name);
    console.log("****", val);
    setName((preVal) => [...preVal, val]);
    console.log(name);
  };

  const deleteHandler = (index) => {
    console.log("element index", index);
    setName((prevNames) => prevNames.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={clickHandler}> Add </button>

      {name.map((item, index) => {
        return (
          <li key={index}>
            {item}

            <button onClick={() => deleteHandler(index)}>Del</button>
          </li>
        );
      })}
    </div>
  );
}
