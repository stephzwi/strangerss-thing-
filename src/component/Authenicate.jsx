import { useEffect } from "react";

export default function Authenticate() {
  const token = JSON.parse(localStorage.getItem("User"));
  console.log(token);
  useEffect(() => {
    const myData = async () => {
      try {
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-E/users/me",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        console.log(result);
        return result;
      } catch (err) {
        console.error(err);
      }
    };
    myData();
  }, []);

  return <h2>Authenticate!</h2>;
}
