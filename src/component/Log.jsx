import { useEffect } from "react";

useEffect(() => {
  const login = async () => {
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-E/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: "stephzwi2",
              password: "Raymond91?",
            },
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  login();
}, []);
