import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='login'>
            <h2>Welcome</h2>
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
            <Button
                variant='contained' size='large' color='secondary'>
                Log in
            </Button>
            <p>Don't have an account? Sign up <Link to="/signup">here</Link></p>

        </div>
    )
}