import React from "react";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
function Inner() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  function handleLogin() {
    dispatch({
      type: "LOGIN",
      user: {
        name: "Bob Smith",
        email: "bob@smith.com",
      },
    });
  }
  function handleLogout() {
    dispatch({
      type: "LOGOUT",
    });
  }
  if (user) {
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    );
  }
  return <button onClick={handleLogin}>Log In</button>;

  return <div>Hello from inner!</div>;
}
// function mapStateToProps(state) {
//   return {
//     user: state.user,
//   };
// }

// export default connect(mapStateToProps)(Inner);

export default Inner;
