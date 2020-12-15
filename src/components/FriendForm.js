import React from "react";

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props;

  const onChange = (evt) => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    // c) use the `update` callback coming in through props
  };

  const onSubmit = (evt) => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>
          Username
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={update}
            placeholder="type a username"
            maxLength="30"
          ></input>
        </label>

        <label>
          Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input
            type="text"
            name="email"
            values={values.email}
            onChange={onChange}
            placeholder="email"
          ></input>
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>
          Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">------select role------</option>
            <option value="">Instructor</option>
            <option value="">Student</option>
            <option value="">Team Lead</option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
