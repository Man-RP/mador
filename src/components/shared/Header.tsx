import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import styles from "./Header.module.css";

interface ContainerProps {
  name: string;
}

const Header: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonHeader>
      <IonToolbar dir="rtl" className={styles.header}>
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
