import React from 'react'

export default function Navbar(props) {
    return (
        <>
            {/* code for navbar*/}

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Welcome</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutText}</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} `} >
                             <input onClick={props.toogleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                 <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
                         </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

// named props type
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string
// }

// default props type
Navbar.defaultProps = {
    title: "Home",
    aboutText: "About"
}
