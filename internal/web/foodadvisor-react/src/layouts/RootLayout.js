import { NavLink } from "react-router-dom";

export default function RootLayout() {
    return (
        <div>
            <h1>Food Advisor</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
        </div>
    )
}