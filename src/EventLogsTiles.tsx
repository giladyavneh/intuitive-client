import React, { useEffect, useState } from "react";
import EventLogs from "./charts/EventLogs";
import IntuitiveTile from "./reusables/IntuitiveTile";
import {Event} from "./models/event"

const EventLogsTile:React.FC=()=>{

    return(
        <IntuitiveTile color="teal" tileName="Events Log">
            <EventLogs width={800} height={400}/>
        </IntuitiveTile>
    )
}

export default EventLogsTile;