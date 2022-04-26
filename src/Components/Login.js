import { useState , forwardRef } from 'react';
import Button from '@mui/material/Button'
import setLogin from '../services/Login.service';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {

    const [usuario, setUsuario] = useState({username : '', password : ''});
    const [token, setToken] = useState();
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });

    const { status, message, type } = showMessage
    const navigate = useNavigate()

    const handleChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();

            setLogin(usuario)
            .then(res => {
                console.log(res.data)
                setToken(res.data.jwt);
                setShowMessage({
                    status: true,
                    message: 'El usuario se logueo correctamente!',
                    type: 'success'
                })
                localStorage.setItem('jwt', res.data.jwt);
                navigate('/home')
            })
            .catch( err => {
                console.log("Hubo un error en la llamada: ", err)
                setShowMessage({
                    status: true,
                    message: 'Ocurrio un error al loguearse.',
                    type: 'error'
                })
            })
    }

    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    return (
        <>
        <h2>Inicio de sesión</h2>
        <ValidatorForm onSubmit={submitHandler}>
            <label>
                <TextValidator id="standard-basic" label="Correo electrónico" variant="standard" type="email" name="username" value={usuario.username} onChange={handleChange}
                validators={['required', 'isEmail']}
                errorMessages={['Este campo es obligatorio', 'No es un mail valido']}
                />
                <br /><br />
            </label>
            <label>
            <TextValidator id="standard-basic" label="Contraseña" variant="standard" type="password" name="password" value={usuario.password} onChange={handleChange}
              validators={['required']}
              errorMessages={['Este campo es obligatorio']}
            />
            <br /><br />
            </label>
            <Button variant="outlined" type="submit">Ingresar</Button>
        </ValidatorForm>
        <Snackbar open={status} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type}>
                {message}
            </Alert>

        </Snackbar>
        </>
    )
}

export default Login;