import Accordion from "./Accordion";
import EventsListItem from "./EventsListItem";
import RequestListItem, { events } from "./RequestListItem";

interface Props {}

const Vacations: React.FC<Props> = () => {
  const vacationRequestsData = [
    {
      date: "23.02.21",
      status: "בטיפול",
    },
    {
      date: "23.02.21",
      status: "בטיפול",
    },
  ];

  const vacationsData = [
    {
      date: "23.02.21",
      day: "יום ד'",
      name: "יותם",
    },
    {
      date: "24.02.21",
      day: "יום ב'",
      name: "יותם",
    },
  ];

  return (
    <Accordion title="חופשים">
      {vacationRequestsData.map((item, index) => (
        <RequestListItem
          index={index}
          date={item.date}
          status={item.status}
          type={events.holiday}
        />
      ))}
      {vacationsData.map((item, index) => (
        <EventsListItem
          index={index}
          date={item.date}
          type={events.holiday}
          day={item.day}
          name="יותם"
        />
      ))}
    </Accordion>
  );
};

export default Vacations;
