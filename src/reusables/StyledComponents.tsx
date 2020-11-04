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

export interface PrecentageTileProps{
    precentage:number
}

interface RetentionWrapperProps{
    height:number;
    width:number;
    maxWeeks:number;
}

export const RetentionWrapper=styled.div<RetentionWrapperProps>`
    height: ${props=>props.height}px;
    width:${props=>props.width}px;
    display:grid;
    grid-template-columns:repeat(${props=>props.maxWeeks}, auto);
    grid-gap:3px;
`
export const PrecentageTile=styled.div<PrecentageTileProps>`
    background-color: ${props=>{
        let op=props.precentage/100
        return `rgba(0,0,160, ${op})`}};
`
export const GrayTile=styled.div`
    background-color: rgba(0,0,0,0.25);
`