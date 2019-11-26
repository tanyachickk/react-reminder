import {
  IoIosCalendar,
  IoIosAlarm,
  IoIosFlag,
  IoIosArchive
} from "react-icons/io";

export const collatedTasks = [
  { key: "TODAY", name: "Today", icon: IoIosCalendar },
  { key: "NEXT_WEEK", name: "Next week", icon: IoIosCalendar },
  { key: "NEXT_MONTH", name: "Next month", icon: IoIosCalendar },
  { key: "SCHEDULED", name: "Scheduled", icon: IoIosAlarm },
  { key: "FLAGGED", name: "Flagged", icon: IoIosFlag },
  { key: "ALL", name: "All", icon: IoIosArchive }
];
