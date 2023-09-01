import { NavLink, useLocation } from "react-router-dom"

export default function NavBar() {
    return (<div className="navbar">
        <h1>Food Advisor</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="login">Log in</NavLink>
        <NavLink to="signup">Sign Up</NavLink>
    </div>)
}