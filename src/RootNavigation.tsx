import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { homeSharp, personSharp, todaySharp } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import Person from "./pages/Person";
import Schedule from "./pages/Schedule";

const RootNavigation: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
        <Route path="/person">
          <Person />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom" dir="rtl">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={homeSharp} />
          <IonLabel>בית</IonLabel>
        </IonTabButton>
        <IonTabButton tab="schedule" href="/schedule">
          <IonIcon icon={todaySharp} />
          <IonLabel>לו"ז</IonLabel>
        </IonTabButton>
        <IonTabButton tab="person" href="/person">
          <IonIcon icon={personSharp} />
          <IonLabel>אישי</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default RootNavigation;
