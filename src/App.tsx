import { IonApp } from "@ionic/react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";

/* Theme variables */
import "./theme/variables.css";
import "./app.css";

import RootNavigation from "./RootNavigation";

const App: React.FC = () => (
  <IonApp>
    <RootNavigation />
  </IonApp>
);

export default App;
