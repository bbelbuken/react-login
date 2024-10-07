import Form from "./Form";
import { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Join Us");
  const [mouseOver, setMouseOver] = useState(false);
  const [isMember, setIsMember] = useState(false);

  const handleClick = () => {
    setHeadingText("Welcome");
  };
  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const toggleMembership = () => {
    setIsMember(!isMember);
  };

  return (
    <div className="container">
      <h1>{isMember ? "Welcome Back" : headingText}</h1>
      <Form
        isMember={isMember}
        setIsMember={setIsMember}
        toggleMembership={toggleMembership}
        handleClick={handleClick}
        mouseOver={mouseOver}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
    </div>
  );
}

export default App;
