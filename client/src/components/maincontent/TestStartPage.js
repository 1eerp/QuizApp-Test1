import React from 'react'

export default function TestStartPage(props) {
    return (
        <div className="test-start-page">
            <div className="test-info">
                <h1 className="test-title">{props.title}</h1>
                <div className="test-description">{props.description}</div>
            </div>
            <button onClick={props.handleClick}>Start Test</button>
        </div>
    )
}
