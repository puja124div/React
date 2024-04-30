import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
const jsxheading = <h1 id="heading">React JSX</h1>;
//root.render(jsxheading);
//jsx- transpiled before it reaches the js engine
//React Components-
//Class based -old
//Functional -new -> a js function which returns jsx (react element)

const Title=()=>(
    <h2>React Components💕</h2>
);
//jsx
const heading1 =(
<h3>its React🚀</h3>);

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namaste React🚀</h1>
    {Title()}
    <Title/>
    <Title></Title>
    {heading1}
  </div>
);
root.render(<HeadingComponent/>);

