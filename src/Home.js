import { useState } from "react";
import bloglist from "./bloglist";
// const Home = () => {
//   const [name, setName] = useState("mario");
//   const handleClick = () => {
//     // console.log("hello, ninja");
//     setName("luigi");
//   };

//   // const ClickAgain = (name) => {
//   //   console.log("hello" + name);
//   // };
//    return (
//     <div className="home">
//       <p> {name} </p>
//       <h2> HomePage</h2>
//       <button onClick={handleClick}>Click</button>
//       {/* <button onClick={ClickAgain("teja")}>Click me again</button> */}
//     </div>
//   );
// };

const Home = () => {
  const [blogs] = useState([
    { title: "my new", body: "ibeoowc", author: "Teja", id: 1 },
    { title: "welcome", body: "ieiieub", author: "Jack", id: 2 },
    { title: "party", body: "higifn", author: "Oggy", id: 3 },
  ]);

  return (
    <div class="home">
      <bloglist blogs={blogs}></bloglist>
    </div>
  );
};

export default Home;
