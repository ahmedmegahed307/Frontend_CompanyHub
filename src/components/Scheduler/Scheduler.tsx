import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

const Scheduler = () => {
   const handleDateClick = (arg:any) => { // bind with an arrow function
    alert(arg.dateStr)
  }

  return (
    <FullCalendar
    plugins={[ dayGridPlugin, interactionPlugin ]}
    dateClick={handleDateClick}
            initialView="dayGridMonth"
        weekends={false}
  events={[
    { title: 'event 1', date: '2023-05-01' },
    { title: 'event 2', date: '2023-05-02' }
  ]}
      />
  )
}

export default Scheduler