import React, { useState, useEffect, useRef, useCallback } from "react";
import { EventLogsWrapper } from "../reusables/StyledComponents";
import { Event } from "../models/event";
import EventLog from "../reusables/EventLog";

let mockGeo: Event[] = [
  
  
  {
    _id: "PeXMEptFWao",
    session_id: "4cc054eb-a77e-4381-b6d9-158ea0ecd6c0",
    name: "signup",
    distinct_user_id: "ILMcLjORs9",
    date: 1601717780742,
    os: "linux",
    browser: "ie",
    geolocation: {
      location: {
        lat: 66,
        lng: 129,
      },
      accuracy: 48,
    },
    url: "http://localhost3000/signup",
  },
  {
    _id: "XXA15yu4goc",
    session_id: "bf87680f-3e65-495c-90e8-091f95024287",
    name: "signup",
    distinct_user_id: "RZTx223nP2",
    date: 1603699632302,
    os: "other",
    browser: "ie",
    geolocation: {
      location: {
        lat: 35,
        lng: 88,
      },
      accuracy: 26,
    },
    url: "http://localhost3000/signup",
  },
];

interface EventLogs {
  height: number;
  width: number;
}

const EventLogs: React.FC<EventLogs> = ({ height, width }) => {
  const [ammount, setAmmount] = useState<number>(10);
  const [data, setData] = useState<{more:boolean,events:Event[]}>({more:true,events:[]});
  
  useEffect(() => {
    fetch(`http://localhost:3001/events/all-filtered?offset=${ammount}`)
    .then(res=>res.json())
    .then(res=>setData(res))
    // setData(data=>{
    //   let usedata=[...data.events]
    //   while (usedata.length<ammount){
    //     usedata=usedata.concat(mockGeo)
    //   }
    //   return {more:true,events:usedata}
    // });
  }, [ammount]);

  const fetchData=():void=>{
    if (data.more) setAmmount(ammount+10)
  }

  return (
    <EventLogsWrapper width={width} height={height}>
      {data.events.map((event, index) =>
        data.events.length-1===index ? (
          <EventLog key={event._id} event={event} reffed={true} fetchData={()=>fetchData()}/>
        ) : (
          <EventLog key={event._id} event={event} reffed={false} fetchData={()=>fetchData()}/>
        )
      )}
    </EventLogsWrapper>
  );
};

export default EventLogs;
