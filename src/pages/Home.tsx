import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Header from "../components/shared/Header";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header name="ברוך הבא, יותם" />
      <IonContent fullscreen>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
