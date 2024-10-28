import "./styles.css";
import * as React from "react";
import BasicButtons from "./mui/Button";
import CustomCard from "./mui/Card"; // Card.js をインポート
export default function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>MUI難しい</h3>
      <BasicButtons />
      <CustomCard />
    </div>
  );
}
