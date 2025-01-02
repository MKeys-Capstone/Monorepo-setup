import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
} from "@ionic/react";

interface FormCardProps {
  onSubmit: (firstName: string, lastName: string) => void;
}

const FormCard: React.FC<any> = ({}) => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    // onSubmit(firstName, lastName);
  };

  return (
    <IonCard>
      <IonCardContent>
        <h2>Enter your details</h2>
        <IonItem>
          <IonLabel position="floating">First Name</IonLabel>
          <IonInput placeholder="Enter your first name" />
          {/* <IonInput
            value={firstName}
            onIonChange={(e) => setFirstName(e.detail.value!)}
            placeholder="Enter your first name"
          /> */}
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Last Name</IonLabel>
          <IonInput placeholder="Enter your last name" />
        </IonItem>

        <IonButton expand="full" onClick={handleSubmit}>
          Submit
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default FormCard;
