import React from "react";

function Form({isMember, toggleMembership, handleClick, mouseOver, handleMouseOver, handleMouseOut}) {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!isMember &&
      <input type="password" placeholder="Confirm Password" /> }
      <button 
      style={{backgroundColor : mouseOver ? "black" : "white", cursor: "pointer"}}
        type="submit"
        onClick={handleClick}
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
