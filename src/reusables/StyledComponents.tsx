import styled from "styled-components";
import IntuitiveTile from "./IntuitiveTile";

interface FrameHeaderProps{
    textColor?:string
}

export const Frame=styled.div`
    border-radius:5px;
    border:2px solid ${props=>props.color};
    padding:0px;
    min-height:200px;
    width:fit-content;
    position:relative;
`

export const FrameHeader=styled.div<FrameHeaderProps>`
    border-radius:3px 0px;
    background-color:${props=>props.color};
    color:${props=>props.textColor?props.textColor:'white'};
    font-size:36px;
    font-weight: bold;
    height: 45px;
`

export const IntuitiveGrid=styled.div`
    display:grid;
    grid-gap: 5px;
    grid-template-columns:repeat(auto-fit,5px);
    grid-row: 5px;
`

export const FilterBoard=styled.div`
    display: flex;
    justify-content:flex-start;
    height:35px;
`

export const SizeController=styled.div`
    height:20px;
    width:20px;
    position:absolute;
    right:0px;
    bottom:0px;
    color:${props=>props.color};
    font-weight:bold;
    text-shadow:0px 0px 5px white;
    background-color:rgba(100,100,100,0.5);
    /* border-radius:40%; */
    cursor: se-resize;
`
interface RetentionStyledProps{
    maxWeeks:number
}

interface PrecentageTileProps{
    precentage:number
}

export const RetentionWrapper=styled.div`
    display:grid;
    grid-template-columns:fit-content auto;
`

export const RetentionRightSide=styled.div<RetentionStyledProps>`
    display:grid;
    grid-template-columns:repeat(${props=>props.maxWeeks}, auto);
    grid-gap:5px;
`
export const PrecentageTile=styled.div<PrecentageTileProps>`
    height:40px;
    background-color: ${props=>{
        let op=props.precentage/100
        return `rgba(0,0,160, ${op})`}};
    
`
