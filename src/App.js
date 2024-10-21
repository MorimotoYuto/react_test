import "./styles.css";
import * as React from "react";
import { Button } from "@mui/material";
import CustomCard from "./mui/Card"; // Card.js をインポート
export default function App() {
  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>MUI難しい</h3>
      <Button>text</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
      <CustomCard />
    </div>
  );
}
