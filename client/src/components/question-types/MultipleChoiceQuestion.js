import React from "react";
import MultipleChoiceButton from "../answer-types/MultipleChoiceButton";

export default function MultipleChoiceQuestion(props){
    return (
        <div className="question-container">
            <div className="question">{props.question}</div>
            <div className="choices-container">
                {props.choices.map(ans => (
                    <MultipleChoiceButton
                        key={ans.aid}
                        {...ans}
                        handleClick={props.handleAnswer}
                    />
                ))}
            </div>
        </div>
    )
}