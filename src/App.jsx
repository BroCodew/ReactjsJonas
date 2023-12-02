import React from "react";

export default function App(){
    return(
      <div className="app">
        <Logo/>
        <Form/>
        <PackingList/>
      </div>
    );

};

function Logo(){
  return (
    <h1>Far Away</h1>
  )
}
function Form(){
  return (
    <div className="add-form">
      <h3>What do you need for your trips</h3>
    </div>
  )
}
function PackingList(){

  return (
    <div className="list">
      List
    </div>
  )
}
function Stats(){
  return(
    <footer>
      <em>You have X item on your list, and you already packed x(X%)</em>
    </footer>
  )
}