import React, { useState } from "react";
import { Event } from "../models/event";
import { EventLogContainer, EventLogHeader, EventTable } from "./StyledComponents";

const EventLog:React.FC<{event:Event}>=({event})=>{
    const [open, setOpen]=useState<boolean>(false)
    return (
        <EventLogContainer open={open}>
            <EventLogHeader>
                <div></div>
                <div>{event.distinct_user_id}</div>
                <div>{event.name}</div>
                <div style={{cursor:"pointer"}} onClick={()=>setOpen(open=>!open)}>^</div>
            </EventLogHeader>
            <EventTable>
    {Object.keys(event).map(key=><div>{key}: {JSON.stringify(event[key as keyof Event])}</div>)}
            </EventTable>
        </EventLogContainer>
    )
}

export default EventLog;