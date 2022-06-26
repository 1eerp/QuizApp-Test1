export default function MultipleChoiceButton(props){
    function handleClick(){
        props.handleClick(props.points)
    }
    return (
        <button className="multipleChoice answer" onClick={handleClick}>{props.content}</button>
    )
}