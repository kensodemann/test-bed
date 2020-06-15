import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer name="Tab 1 page" />
        <IonModal isOpen={showModal} cssClass="my-custom-class">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Some Modal</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <p>This is modal content</p>
            <IonButton onClick={() => setShowModal(false)}>
              Close Modal
            </IonButton>
          </IonContent>
        </IonModal>
        <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
