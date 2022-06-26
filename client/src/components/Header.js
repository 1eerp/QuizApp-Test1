import NavBar from './NavBar'

export default function Header(props){
    return(
        <header>
            <NavBar title={props.title}/>
        </header>
    )
}