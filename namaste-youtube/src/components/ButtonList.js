import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Comedy",
  "Entertainment",
  "F1",
  "Reactjs",
  "Messi",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((e, index) => (
        <Button key={index} name={e} />
      ))}
      {/* <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Comedy" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Comedy" /> */}
    </div>
  );
};

export default ButtonList;
