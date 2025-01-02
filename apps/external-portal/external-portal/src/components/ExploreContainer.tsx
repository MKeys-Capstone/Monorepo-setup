import React, { Children } from "react";
import "./ExploreContainer.css";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { FormCard, Button } from "shared-components";

const ExploreContainer: React.FC = () => {
  const last = "asdasd";
  const handleFormSubmit = (firstName: string, lastName: string) => {
    console.log("Form submitted with:", { firstName, lastName });
    // Here you can process the data, like sending it to an API
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Form Card Example</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          
        </IonContent>
      </IonPage>
    </>
  );
};

export default ExploreContainer;
