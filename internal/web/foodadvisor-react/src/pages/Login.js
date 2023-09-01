import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, LinearProgress, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { foodAdvisorClient } from '../Axios';
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useState } from 'react';


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
        setShowPassword((show) => !show);
    };

    const [loadingLogin, setLoadingLogin] = useState(false);
    const [showLoading, setshowLoading] = useState(false);

    async function handleLoginRequest() {
        setLoadingLogin(true)
        setTimeout(() => {
            setshowLoading(true)
        }, 1000)
        try {
            const response = await foodAdvisorClient.post("/login");
            console.log(response)
        } catch (error) {
            console.error(error)
        }
        setLoadingLogin(false)
        setshowLoading(false)
    }

    return (
        <div className='login'>
            <Stack component={"form"}>
                <h2>Welcome</h2>
                <TextField
                    label="Username"
                    required
                    id="login-input-username"
                    variant='filled'
                />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                    <FilledInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <p>Don't have an account? Sign up <Link to="/signup">here</Link></p>
                <Button
                    variant='contained'
                    size='large'
                    color='secondary'
                    onClick={handleLoginRequest}>
                    Log in
                </Button>
                
                {loadingLogin && showLoading && <LinearProgress color="secondary" />}
            </Stack>
        </div>
    )
}