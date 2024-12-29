export const Header = ()=>{
    return (<>
            <header className="header">
        <div className="box"></div>
        <div className="content row justify-content-between">
            <div className="col-lg-6 col-sm-12">
            <h1>Muhammad Hassan</h1>
            </div>
            <ul className="m-0 p-0 col-lg-5 d-flex align-items-center justify-content-end">
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
            </div>
        <div className="box"></div>
        </header>
        </>
    )
}