import {useState} from "react"
import test from "../../data/questions";
import TestStartPage from "./TestStartPage";
import ResultGraph from "./ResultGraph";
import MultipleChoiceQuestion from "../question-types/MultipleChoiceQuestion";

export default function AlignmentTest() {
    //Test State carries
    const [testState, setTestState] = useState({
        curQ: -1,
        x: 0,
        y: 0,
        z: 0,
        questions: test.questions.map((q)=>(
                        <MultipleChoiceQuestion
                            key={q.id}
                            {...q}
                            handleAnswer={handleNext}
                        />
                        )
                    ),
        testComplete: false
    })
    
    function handleStart(){
        setTestState(prevState => {
            return {
                ...prevState,
                curQ: 0
            }
        })
    }
    function handleNext(weights){
        setTestState(prevState => {
            return {
                ...prevState,
                curQ: prevState.curQ + 1,
                x: prevState.x + weights[0],
                y: prevState.y + weights[1],
                z: prevState.z + weights[2],
                testComplete: !(prevState.curQ + 1 < prevState.questions.length)
            }
        })
    }
    //LOG STATEMENT
    console.log(testState)
    //QUESTIONS
    return (
        <div className="alignment-test">
            {(testState.curQ < 0 && <TestStartPage 
            title={test.title} 
            description={test.descripton} 
            handleClick={handleStart}/>) || 
            (!testState.testComplete && testState.questions[testState.curQ]) ||
            (testState.testComplete && <ResultGraph resultChar={test.alignmentChar} result={[testState.x, testState.y, testState.z]}/>)}
        </div>
    )
}
