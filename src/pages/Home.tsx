import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Accordion from "../components/home/Accordion";
import Vacations from "../components/home/Vacations";
import Header from "../components/shared/Header";
import styles from "./Home.module.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header name="ברוך הבא, יותם" />
      <IonContent fullscreen className={styles.container}>
        <Vacations />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
