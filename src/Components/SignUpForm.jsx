// Controlled form, I will listen every change:
import { Component } from "react";
import { nanoid } from "nanoid";

// const pseudonum for select from list radiobutton element
const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const INITIAL_STATE = {
  logina: "",
  email: "",
  password: "",
  // isActive is for checkbox, defualt not checked
  isActive: false,
  // gender is for select radio element
  gender: null,
  // age is for list
  age: 0,
};

class SignUpForm extends Component {
  state = {
    // inputValue: "",
    // logina: "",
    ...INITIAL_STATE,
  };

  //   Function will handle every change in form and set this input as state
  handleChange = (event) => {
    // console.log(event);
    const { name, value, checked, type } = event.target;

    console.log({ name, value, checked, type });
    // if (name === "logina") {
    //   this.setState({
    //     logina: value,
    //   });
    // } else if (name === "password") {
    //   this.setState({
    //     password: value,
    //   });
    // } else if (name === "email") {
    //   this.setState({
    //     email: value,
    //   });
    // }

    // if (type==="checkbox"){...} else if (type==="text"){...}

    // if (type === "checkbox") {
    //   const checked = event.target.checked;
    //   this.setState(        {
    //   inputValue: event.target.value,
    //   logina: event.target.value,
    // [name]: value,
    //   [name]: checked,
    // } else if {...}

    if (name === "age") {
      console.log("Age: ", { value });
      const parsedValue = parseInt(value);
      console.log({ parsedValue, value });

      // this.setState({
      //   age: parsedValue,
      // });
    }

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //   handleBlur = (event) => {
  //     // Do some validation for example its good email or bad, or not enough letters in password
  //   };

  //   Function will catch data from input form and log it in console
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Signed up as: ${this.state.logina} with email: ${this.state.email}`
    );
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  //   Function will reset form after submit
  reset = () => {
    this.setState({
      ...INITIAL_STATE,
    });
  };

  render() {
    // const { inputValue } = this.state;
    const { logina, email, password, isActive, gender, age } = this.state;

    // console.log({ inputValue });

    // This will log every change in console
    console.log({ logina, email, password });

    // Generating random id
    const loginInputId = nanoid();
    const emailInputId = nanoid();
    const passwordInputId = nanoid();

    return (
      <form onSubmit={this.handleSubmit}>
        {/* SignUpForm is working */}
        {/* <label>Login</label> */}
        {/* Fot generating id (htmlFor) I will use library nanoid (npm install nanoid) and construct constant loginInputId*/}
        {/* <label htmlFor="123">Login</label> */}
        <label htmlFor={loginInputId}>Login: </label>

        <input
          id="loginInputId"
          name="logina"
          type="text"
          placeholder="Enter login"
          //   value={inputValue}
          value={logina}
          onChange={this.handleChange}
          //   onBlur={this.handleBlur}
        />

        {/* <label>Input</label> */}
        <label htmlFor={emailInputId}>Input: </label>
        <input
          id={emailInputId}
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={this.handleChange}
        />

        {/* <label>password</label> */}
        <label htmlFor={passwordInputId}>Password: </label>
        <input
          id={passwordInputId}
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={this.handleChange}
        />

        <label>
          Is user active?
          <input
            name="isActive"
            type="checkbox"
            checked={this.isActive}
            onChange={this.handleChange}
          />
        </label>

        <section>
          <h5>Choose your gender</h5>

          {/* I can construct input in label */}
          <label>
            Male
            {/* name of input must be always the same as in state, so we can construct sth like handleChange and setState in this way */}
            <input
              checked={gender === Gender.MALE}
              value={Gender.MALE}
              name="gender"
              type="radio"
              onChange={this.handleChange}
            />
          </label>

          {/* or I can construct label for... and input somewhere else */}
          <label htmlFor="gender_female">Female</label>
          <input
            checked={gender === Gender.FEMALE}
            value={Gender.FEMALE}
            id="gender_female"
            name="gender"
            type="radio"
            onChange={this.handleChange}
          />
        </section>

        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="18"> 18 </option>
            <option value="34"> 34 </option>
            <option value="56"> 56 </option>
          </select>
        </label>

        <button type="submit" disabled={!isActive}>
          Sign up as {logina} - accept checkbox!
        </button>
      </form>
    );
  }
}

export default SignUpForm;
