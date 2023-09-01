import {
    NavLink,
    Outlet
} from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootLayout() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>

    )
}