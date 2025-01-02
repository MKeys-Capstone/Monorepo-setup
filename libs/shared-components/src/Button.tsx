import React from "react";
import { IonButton } from "@ionic/react";
// Button component now accepts 'text' prop and uses it inside the IonButton
const Button = ({ children }) => {
  console.log("Button received children:", children);
  console.log("Type of children:", typeof children); // Ensure it's a string
  return <IonButton>{children}</IonButton>;
  return <p>{children}</p>;
};

export default Button;
