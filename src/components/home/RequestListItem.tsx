import React from "react";
import { IonImg } from "@ionic/react";
import styles from "./RequestListItem.module.css";
import { eventsConfig } from "../../utils";

export enum events {
  vacation = 0,
  out,
  holiday,
  duty,
}

interface Props {
  type: events;
  index: number;
  date: string;
  adminMode?: boolean;
  status?: string;
}

const RequestListItem = (props: Props) => {
  const { index, date, adminMode = false, status } = props;
  return (
    <div key={index} className={styles.container}>
      <IonImg
        color={eventsConfig.vacation.color}
        src={"assets/red_badge.svg"}
        className={styles.badge}
      />
      <div className={styles.textAreaContainer}>
        <div className={styles.titleText}>ביקשת חופש</div>
        <div className={styles.dateText}>בתאריך: {date}</div>
      </div>
      <div className={styles.statusText}>
        <span>סטטוס: {status}</span>
      </div>
    </div>
  );
};

export default RequestListItem;
