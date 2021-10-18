import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Header from "../components/shared/Header";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Header name='לו"ז' />
      <IonContent fullscreen>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
