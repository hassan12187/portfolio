import { NavLink } from "react-router-dom"

export const Header = ()=>{
    return (<>
            <header className="header">
        <div className="box"></div>
            <div>
            <h1>Muhammad Hassan</h1>
            </div>
            <ul className="m-0 p-0">
                <li>
                    <a href="#about-me" style={{'--i':"1"}}>About Me</a>
                </li>
                <li>
                    <a href="#service" style={{'--i':"2"}}>Service</a>
                </li>
                <li>
                    <a href="#contact-me" style={{'--i':"3"}}>Contact Me</a>
                </li>
            </ul>
            <h3 className="text-white p-2 bars">=</h3>
        <div className="box"></div>
        </header>
        </>
    )
}