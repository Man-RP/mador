import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Header from "../components/shared/Header";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <Header name="יותם טיומקין" />
      <IonContent fullscreen>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
