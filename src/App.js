import { Component } from "react";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";

function App() {
  return (
    <>
      {/* <LoginForm onSubmit={(values) => console.log(values)} /> */}
      <SignUpForm onSubmit={(values) => console.log(values)} />
    </>
  );
}

export default App;
