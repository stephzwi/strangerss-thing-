import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";
import "./App.css";

function App() {
  const COHORT_NAME = "2302-ACC-ET-WEB-PT-E";
  const Base_Url = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${Base_Url}/posts`);
        const result = await response.json();
        console.log(result);
        setPosts(result.data.posts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>Page Loading</div>
      ) : (
        posts.map((post) => {
          return (
            <div key={post._id}>
              <ul>
                <li>{post.title} </li>
                <li> {post.description}</li>
                <li>{post.price}</li>
              </ul>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
