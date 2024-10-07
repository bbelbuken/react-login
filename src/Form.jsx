import React from "react";

function Form({userName, setUserName, handleSubmit, isMember, toggleMembership, handleClick, mouseOver, handleMouseOver, handleMouseOut}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
      type="text" 
      placeholder="Username"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      />
      <input type="password" placeholder="Password" />
      {!isMember &&
      <input type="password" placeholder="Confirm Password" /> }
      <button 
      style={{backgroundColor : mouseOver ? "black" : "white", cursor: "pointer"}}
        type="submit"
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
      >
          {isMember ? "Login" : "Register" }
      </button>
      <p 
        className="toggle-membership"
        onClick={toggleMembership}
      >
        {!isMember ? (<span className="member">Already A Member</span>) : (<>No Account? <span className="create-one">Create One</span></>)}</p>
    </form>
  );
}

export default Form;
