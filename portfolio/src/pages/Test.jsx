// src/pages/Test.jsx
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Test = () => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    try {
      await addDoc(collection(db, "testCollection"), {
        content: text,
        createdAt: new Date(),
      });
      alert("저장 완료!");
      setText("");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Firestore 테스트</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="글 입력"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: 8, width: 300 }}
        />
        <button type="submit" style={{ marginLeft: 10, padding: 8 }}>
          저장
        </button>
      </form>
    </div>
  );
};

export default Test;
