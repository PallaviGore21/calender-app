import React, { useState } from 'react'
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState()
    const [inp, setInp] = useState([
        { title: "Learn React", date: "2023-04-01" },
        { title: "Learn Redux", date: "2023-04-03" }
    ])
    const [events, setEvents] = useState(inp)
    const createEvent = () => {
        setEvents([...events, { title: inp, date: selectedDate }])
    }
    return <div className="container">

        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={arg => {
                const m = new bootstrap.Modal("#eventModal")
                m.show()
                setSelectedDate(arg.dateStr)
                // console.log(arg)
            }}
            events={events}
        />

        <div class="modal fade" id="eventModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input
                            type="text"
                            className='form-control'
                            onChange={e => setInp(e.target.value)} /> <br />
                        <button
                            data-bs-dismiss="modal"
                            onClick={createEvent}
                            type="button"
                            class="btn btn-primary">Add Event</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
}

export default Dashboard