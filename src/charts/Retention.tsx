import React from "react";
import {weeklyRetentionObject} from "../models/event"
import { PrecentageTile, RetentionRightSide } from "../reusables/StyledComponents";

interface RetentionProps{
    // data:weeklyRetentionObject[]
}

const Retention:React.FC<RetentionProps>=({})=>{
    return(
        <RetentionRightSide maxWeeks={4}>
            <PrecentageTile precentage={100}>what</PrecentageTile>
            <PrecentageTile precentage={60}>what</PrecentageTile>
            <PrecentageTile precentage={75}>what</PrecentageTile>
            <PrecentageTile precentage={30}>what</PrecentageTile>
            <PrecentageTile precentage={90}>what</PrecentageTile>
        </RetentionRightSide>
    )
}

export default Retention;