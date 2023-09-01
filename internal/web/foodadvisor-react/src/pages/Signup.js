import { LinearProgress, TextField } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function SignUp() {
    return (
        <div className="signup">
            <h2>Welcome to Food Advisor</h2>
            <TextField
                label="Username"
                required
                id="login-input-username"
                variant='filled'
            />
            <TextField
                label='Password'
                required
                id="login-input-password"
                variant='filled'
            />
            <p>Already have an account? Log in <Link to="/login">here</Link></p>
            <Button
                variant='contained' size='large' color='secondary'>
                Sign up
            </Button>
            
            <LinearProgress color="secondary" />
        </div>
    )
}