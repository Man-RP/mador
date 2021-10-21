import { IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { chevronDown, chevronUp } from "ionicons/icons";
import { Children, useState } from "react";
import Collapsible from "react-collapsible";
import styles from "./Accordion.module.css";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<Props> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const Trigger = () => {
    return (
      <>
        {title}

        {!open ? <IonIcon icon={chevronDown} /> : <IonIcon icon={chevronUp} />}
      </>
    );
  };
  return (
    <Collapsible
      classParentString={styles.Collapsible}
      className={styles.Collapsible}
      openedClassName={styles.Collapsible}
      triggerClassName={styles.Collapsible__trigger}
      triggerOpenedClassName={styles.Collapsible__trigger}
      contentOuterClassName={styles.Collapsible__contentOuter}
      contentInnerClassName={styles.Collapsible__contentInner}
      trigger={<Trigger />}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      transitionTime={100}
    >
      {children}
    </Collapsible>
  );
};

export default Accordion;
