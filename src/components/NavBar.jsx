import './NavBar.css'

function NavBar({show}){
    return(
        <>
        <div className={show ? 'navBar active' : 'navBar'}>
            <ul>
                <li>
                    <a>About me</a>
                </li>
                <li>
                    <a>Skills</a>
                </li>
                <li>
                    <a>Proyects</a>
                </li>
                <li>
                    <a>Sport</a>
                </li>
            </ul>

        </div>
        </>
    )
}

export default NavBar