import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function Article() {
  return (
    <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  );
}


function App() {
  return (
    <div>
      <Article />
      <Comment />
    </div>
  );
}


export default App;
