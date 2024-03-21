"use client";
import React from "react";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

type InputFormProps = {};

const InputForm: React.FC<InputFormProps> = () => {
  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    difficulty: "",
    category: "",
    videoId: "",
    link: "",
    order: 0,
    likes: 0,
    dislikes: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const newProblem = {
    ...inputs,
    order: Number(inputs.order),
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await setDoc(doc(firestore, "problems", inputs.id), inputs);
    alert("saved to db");
  };
  console.log(inputs);

  return (
    <div className="bg-black">
      <form
        className="p-6 flex flex-col max-w-sm gap-3 "
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="problem id"
          name="id"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder=" title"
          name="title"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="difficulty"
          name="difficulty"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="category"
          name="category"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="videoId"
          name="videoId"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="link"
          name="link"
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="order"
          name="order"
        />
        <button className="bg-white"> save to db</button>
      </form>
    </div>
  );
};
export default InputForm;
