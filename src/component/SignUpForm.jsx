import { useState } from "react";
import { useEffect } from "react";

const COHORT_NAME = "2302-ACC-ET-WEB-PT-E";
const Base_Url = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello ");

    try {
      const response = await fetch(
        `${Base_Url}/users/register`,

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: { username: `${username}`, password: `${password}` },
          }),
        }
      );

      const result = await response.json();
      setToken(result.token);
      localStorage.setItem("User", JSON.stringify(result.data.token));

      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
