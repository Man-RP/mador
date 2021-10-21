import React from "react";
import { eventsConfig } from "../../utils";
import styles from "./EventsListItem.module.css";
import { events } from "./RequestListItem";

interface Props {
  index: number;
  date: string;
  day: string;
  name: string;
  type: events;
}

const EventsListItem = (props: Props) => {
  const { index, date, day, name, type } = props;
  return (
    <div key={index} className={styles.container}>
      <div className={styles.dateContainer}>
        <div className={styles.dateText}>{date}</div>
        <div className={styles.dayText}>{day}</div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.typeIndicator}></div>
        <div className={styles.detailsTextContainer}>
          <div className={styles.typeText}>{eventsConfig.vacation.name}</div>
          <div className={styles.nameText}></div>
          {name}
        </div>
      </div>
    </div>
  );
};

export default EventsListItem;
