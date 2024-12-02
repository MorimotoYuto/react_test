import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./plugins/firebase.js";
import BasicButtons from "./mui/Button";
import CustomCard from "./mui/Card";

export default function App() {
  const [data, setData] = useState([]);

  // データを取得する非同期関数
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(items);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // 初回レンダリング時にデータを取得
  useEffect(() => {
    fetchData();
  }, []); // 空の依存配列により初回レンダリング時のみ実行

  return (
    <div className="App">
      <h1>Hello React!!!!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>MUI難しい</h3>
      <BasicButtons />
      <CustomCard />
      <h1>Firestore Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}
