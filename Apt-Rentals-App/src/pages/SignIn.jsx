import { useState } from "react";

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowError(true);
  };

  const [showError, setShowError] = useState(false);

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h1 className="signin-title">
          Welcome back! Please log in to continue.
        </h1>

        {showError && (
          <p className="sign-in-error">
            Error: Joshua hasn't taught you how to do this yet. Try again on
            week 9.
          </p>
        )}

        <form className="signin-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" placeholder="examplemail@ironhack.com" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>

          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
