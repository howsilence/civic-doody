import React, {useState} from 'react'

function UserSignUp({onAddUser}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            password_confirmation: passwordConfirmation
          }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok){
            r.json().then((user) => onAddUser(user));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
      });
    }

    return(
        <div className="formContainer">
          <section className="form">
            <div className="center">
	            <h1 className="formh1">Become a Super Pooper Scooper?</h1>
	            <hr className="formHr" />

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <input
                  type="password"
                  name="password confirmation"
                  placeholder=""
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />

                <button className="formSubmit" type="submit">{isLoading ? "Loading.." : "Sign Up"}</button>

                <span>
                  {errors.map((err) => (
                    <span key={err}>{err}</span>
                  ))}
                </span>

              </form>
            </div>
          </section>
        </div>
  );

}

export default UserSignUp;