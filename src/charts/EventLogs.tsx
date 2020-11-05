import React from "react";
import { EventLogsWrapper } from "../reusables/StyledComponents";
import {Event} from "../models/event"
import EventLog from "../reusables/EventLog";

interface EventLogs{
    height:number;
    width:number;
    data:Event[]
}

const EventLogs:React.FC<EventLogs>=({height, width, data})=>{
    return (
        <EventLogsWrapper width={width} height={height}>
            {data.map(event=><EventLog event={event}/>)}
        </EventLogsWrapper>
    )
}

export default EventLogs;