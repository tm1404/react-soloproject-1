import React from "react";
import Heading from "./components/Heading";
import Post from "./components/Post";
import data from "./data/data";

const App = () => {
  const posts = data.map((post) => {
    return <Post key={post.endDate} {...post} />;
  });
  return (
    <div className="container mx-auto p-4">
      <Heading />
      {posts}
    </div>
  );
};

export default App;
