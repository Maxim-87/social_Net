import React from 'react';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {RootAppStoreType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

export const Login = () => {

    const dispatch = useDispatch();

    const isAuth = useSelector<RootAppStoreType, boolean>((state) => state.auth.isAuth);
    const captchaUrl = useSelector<RootAppStoreType, null | string>((state) => state.auth.captchaUrl);

    const formik = useFormik({
        validate: (values) => {
            if(!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.password) {
                return {
                    password: 'Password is required'
                }
            }
        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: values => {
            dispatch(login(values))
            alert(JSON.stringify(values));
        },
    });

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            {/*callback берущий данные с initilaVAlues*/}
            <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                                    </FormLabel>
                <FormGroup>
                    <TextField
                        type='password'
                        label="Email"
                        margin="normal"
                        // formik получает данные с инпутов и при нажатии на кнопку даёт их нам
                        {...formik.getFieldProps('email')}/>
                    {/*ошибка при не правильном email*/}
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <TextField type="password"
                               label="Password"
                               margin="normal"
                        /* formik получает данные с инпутов и при нажатии на кнопку даёт их нам*/
                               {...formik.getFieldProps('password')}
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <FormControlLabel label={'Remember me'}
                                      control={<Checkbox
                                          /* formik получает данные с инпутов и при нажатии на кнопку даёт их нам*/
                                      {...formik.getFieldProps('rememberMe')}
                                          /* formik получает данные с инпутов и при нажатии на кнопку даёт их нам*/
                                      checked={formik.values.rememberMe}/>}
                    />
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
            </FormControl>
            </form>
        </Grid>
    </Grid>
}
