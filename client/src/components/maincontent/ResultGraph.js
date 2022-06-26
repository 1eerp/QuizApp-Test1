import React from 'react'

export default function ResultGraph(props) {
    return (
        <div className="result-graph">
            <div className="x-axis"></div>
            <div className="y-axis"></div>
            <div className={props.resultChar.length >0 ? "alignment-char":"alignment"} style={{
                left: `max(min(calc(calc(50% - max(0.75%, 5px)) + ${3*props.result[0]}%), 100%),0%)`,
                top: `min(max(calc(calc(50% - max(0.75%, 5px)) - ${3*props.result[1]}%), 0%), 100%)`}}>
                {props.resultChar}
            </div>
        </div>
    )
}
