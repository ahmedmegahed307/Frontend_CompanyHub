import React, { useEffect, useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
let id = 0;
const Calendar = () => {
  const [events, setEvents] = useState<Array<any>>([]);
  const [initialEvents] = useState([
    {
      id: String(20002),
      title: "Initial Value",
      start: new Date().toISOString().split("T")[0] + "T10:00:00",
    },
  ]);
  const [eventToDelete, setEventToDelete] = useState<any | null>(null);
  const [eventToEdit, setEventToEdit] = useState<any | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventTime, setEventTime] = useState("");

  useEffect(() => {
    console.log("events", events);
  }, [events]);

  const handleEvents = (events: any[]) => {
    setEvents(events);
  };
  useEffect(() => {
    if (eventToEdit) {
      setEventTime(eventToEdit.startStr);
    }
  }, [eventToEdit]);
  const renderEventContent = (eventContent: any) => {
    const eventStyle: React.CSSProperties = {
      whiteSpace: "nowrap",
      overflow: "hidden",
      height: "auto",
      lineHeight: "1.2",
      padding: "2px",
      position: "relative",
      textOverflow:
        eventContent.event.title.length > 15 ? "ellipsis" : "initial",
    };

    const deleteButtonStyle: React.CSSProperties = {
      position: "absolute",
      top: "2px",
      right: "2px",
      padding: "2px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
    };

    const handleDeleteClick = (event: any) => {
      setEventToDelete(event);
      onOpen();
    };

    return (
      <div style={eventStyle}>
        <button
          className="delete-button"
          style={deleteButtonStyle}
          onClick={() => handleDeleteClick(eventContent.event)}
        >
          X
        </button>
        <b>{eventContent.timeText}</b>
        <b style={{ color: "black" }}>{eventContent.event.title}</b>
      </div>
    );
  };

  const handleEventClick = (clickInfo: any) => {
    const event = clickInfo.event;
    const target = clickInfo.el;

    if (target.classList.contains("delete-button")) {
      // Clicked on the delete button
      setEventToDelete(event);
      onOpen();
    } else {
      // Clicked on the event itself
      if (!target.classList.contains("edit-button")) {
        setEventToEdit(event);
        setEventTitle(event.title);
        setEventTime(event.start!.toISOString().slice(0, -1)); // Updated line
        setIsModalOpen(true);
      }
    }
  };

  const handleDeleteConfirmation = () => {
    if (eventToDelete) {
      eventToDelete.remove();
      setEventToDelete(null);
    }
    onClose();
  };

  const handleDateSelect = (selectInfo: any) => {
    setIsModalOpen(true);
    setEventToEdit(null);
    setEventTitle("");
    const selectedDate = new Date(
      selectInfo.start.getTime() - selectInfo.start.getTimezoneOffset() * 60000
    );
    setEventTime(selectedDate.toISOString().slice(0, -8));
    setSelectInfo(selectInfo);
  };

  const [selectInfo, setSelectInfo] = useState<any | null>(null);

  const handleEventCreation = () => {
    if (selectInfo) {
      let calendarApi = selectInfo.view.calendar;
      calendarApi.unselect();

      if (eventToEdit) {
        // Editing an existing event
        eventToEdit.setProp("title", eventTitle);
        eventToEdit.setStart(selectInfo.start);
        eventToEdit.setEnd(selectInfo.end);
        eventToEdit.setAllDay(selectInfo.allDay);
      } else {
        // Adding a new event
        if (eventTitle) {
          calendarApi.addEvent({
            id: String(id++),
            title: eventTitle,
            start: selectInfo.start,
            end: selectInfo.end,
            allDay: selectInfo.allDay,
          });
        }
      }
    }

    setIsModalOpen(false);
    setEventToEdit(null);
    setEventTitle("");
    setEventTime("");
  };
  return (
    <>
      <div style={{ width: "180vh", marginLeft: "70px", marginTop: "20px" }}>
        <div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            selectable={true}
            dateClick={(selectInfo: any) => {
              console.log("Date selected: ", selectInfo);
            }}
            editable={true}
            height={"60vh"}
            slotMinTime="09:00:00"
            slotMaxTime="18:00:00"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            select={handleDateSelect}
            initialEvents={initialEvents}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
            eventContent={renderEventContent}
            eventRemove={(e) => {
              console.log("event removed");
            }}
            eventAdd={(e) => {
              console.log(" event added", e);
            }}
            eventBorderColor={"green"}
            eventDragStop={(e) => {
              console.log("StopDrag");
            }}
          />
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {eventToEdit ? "Edit Event" : "Add Event"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Event Name</FormLabel>
                <Input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Event Time</FormLabel>
                <Input
                  type="datetime-local"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleEventCreation}>
                {eventToEdit ? "Update" : "Add"}
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Event
            </AlertDialogHeader>{" "}
            <AlertDialogBody>
              Are you sure you want to delete this event?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={handleDeleteConfirmation}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default Calendar;
