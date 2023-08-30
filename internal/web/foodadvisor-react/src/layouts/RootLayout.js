import {
    NavLink,
    Outlet
} from "react-router-dom";

export default function RootLayout() {
    return (
        <div>
            <header>
                <h1>Food Advisor</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>

    )
}