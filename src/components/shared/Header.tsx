import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import "./Header.css";

interface ContainerProps {
  name: string;
}

const Header: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonHeader>
      <IonToolbar dir="rtl" className="header">
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
