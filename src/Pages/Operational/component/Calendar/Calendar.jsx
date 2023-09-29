import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState } from "react";
import { Calendar, dateFnsLocalizer,Views,momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";

import {
  Text,
  Box,
  Spacer,
  Avatar,
  Heading,
  HStack,
} from "@chakra-ui/react";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./css/calendar.css";
import { Tooltip } from "@chakra-ui/react";

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function EventComponent({ event }) {
  return (
    <>
      <HStack h={2}  >
        <Heading fontWeight="bold" fontSize={'sm'} pt={1}>{event.title}</Heading>
        <Spacer />
        <Avatar size="md" name={event.organizerName} src={event.organizerAvatar} />
      </HStack>
    </>
  );
}


const DnDCalendar = withDragAndDrop(Calendar);
const Calendar2 = () => {
  const today = new Date();
  today.setHours(9, 0, 0, 0);

  const [allEvents, setAllEvents] = useState([
    {
      title: "Installation",
      organizerName: "Organizer 1",
      organizerAvatar: "https://bit.ly/dan-abramov",
      start: new Date(today),
      end: new Date(today.getTime() + (1 * 60 * 60 * 1000)),
    },
    {
      title: "Electrical",
      organizerName: "Organizer 2",
      organizerAvatar: "https://s3-alpha-sig.figma.com/img/854b/8028/adb0d5558f85bb09dd9fe5034a10d8ab?Expires=1695600000&Signature=ifmRiQCWO3Ri8MCTH8HQlhWTixflZkHTK-LDWAKk0zA1nDGmcelSCgUAipl3T8XfQeDLanAG29a51gRBBc3uQnBgF1JgOMP3BOxlV57VLilSgret1bj-p7ueixmcU39-UvzQJMOlp9xcN3fgDZd-zmBKCFux1unMw-pK9q0Pei-cM-0U8lF8yIGirtjeJHuL6uBjzDfO2Bsv66mzD2uznldDbQr~NifdbU-QpdlS~7N6S~EJtqgVhtoJccpmBAebZnuNXzyMNmOokV3anQ61oQQ09De1TlciIv21F-GYySVtyNHcbMckFJpnNBoYlMeBrlcYZQOCkLeAB7HCz0PmQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      start: new Date(today.getTime() + (2 * 60 * 60 * 1000)), 
      end: new Date(today.getTime() + (3 * 60 * 60 * 1000)),
    },

    {
      title: "Plumbing",
      organizerName: "Organizer 2",
      organizerAvatar:"https://s3-alpha-sig.figma.com/img/7d15/6e21/4885cc8d3b9d4df5ba0c5aedcd1430c1?Expires=1695600000&Signature=d~--1eG5DYeJC25PpqydAP0AquVkWGjw9IdiuNrEIT8DvoBqpm0WZuPMW2r0gcfOvWEOZTr9t0o-7d3omi8-A~o1gJdZVdoyovqZXieVrJejdJw0qMbQ8SPKIWtb-RnXFua7TY0HVEIdDEqexmKYWmZ9dswIxMPMYLUovaisXwPgqiziSIHxm1eIPjYSvG7zRBzXA4ghI015Q-O3yBe5Qdx7zo4hISS0R9BgQ6Cnt3Yk9Hipuq5jOTs5bsGsFy9DDBJV-r3C0P0Thc3ppZ-9UAzBzRnZKTKvYpAAfxjOcPw2Wp9wu3qqCt9tzDJs9K6aWuKo89khLNc~rCyIwTKOzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4 ",
      start: new Date(today.getTime() + (4 * 60 * 60 * 1000)), 
      end: new Date(today.getTime() + (5 * 60 * 60 * 1000)),
    },
  ]);
  

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor:"white",
      borderRadius: "5px",
      opacity: 1,
      border: "0px",
      height: "120px",
      color: "black",
      display: "block",
      marginLeft: "5px",
      
    };

    return {
      style,
    };
  };

  return (
    <div >
      <DnDCalendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.DAY}
        toolbar={false}
        selectable
        components={{
          event: EventComponent,
        }}
        eventPropGetter={eventStyleGetter}
        resizable
        style={{ height: 300, width: "100%" }}
        min={new Date(2023, 8, 13, 9, 0, 0)} 
        max={new Date(2023, 8, 13, 17, 0, 0)} 
      />
    </div>
  );
};

export default Calendar2;
