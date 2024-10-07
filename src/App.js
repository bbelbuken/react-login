import Form from "./Form";
import { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Join Us");
  const [userName, setUserName] = useState("")
  const [mouseOver, setMouseOver] = useState(false);
  const [isMember, setIsMember] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const toggleMembership = () => {
    setIsMember(!isMember);
    setUserName("")
    setHeadingText("Log In")
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setHeadingText(`Welcome, ${userName}`);
  }

  return (
    <div className="container">
      <h1>{userName ? headingText : (!isMember ? "Join Us" : "Log In")}</h1>
      <Form
        userName={userName}
        setUserName={setUserName}
        isMember={isMember}
        setIsMember={setIsMember}
        handleSubmit={handleSubmit}
        toggleMembership={toggleMembership}
        mouseOver={mouseOver}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
    </div>
  );
}

export default App;
