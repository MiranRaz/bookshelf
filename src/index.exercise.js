/**@jsx jsx */
import {jsx} from '@emotion/core'

import 'bootstrap/dist/css/bootstrap-reboot.css'
import '@reach/dialog/styles.css'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import {Logo} from './components/logo'
import {
  MainContainer,
  Button,
  ButtonSplit,
  Dialog,
  DialogTitle,
  DialogExitButtonContainer,
  Input,
  Form,
  FormGroup,
} from './components/lib.style'

function LoginForm({onSubmit, submitButton}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" type="text" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div> {React.cloneElement(submitButton, {type: 'submit'})}</div>
    </Form>
  )
}
function App() {
  const [openModal, setOpenModal] = useState('none')
  function login(formData) {
    console.log('login', formData)
  }
  function register(formData) {
    console.log('register', formData)
  }

  return (
    <MainContainer>
      <Logo width={80} height={80} />
      <h1>Bookshelf</h1>
      <ButtonSplit>
        <div>
          <Button
            onClick={() => {
              setOpenModal('login')
            }}
          >
            Login
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              setOpenModal('register')
            }}
            variant="secondary"
          >
            Register
          </Button>
        </div>
      </ButtonSplit>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <DialogExitButtonContainer>
          <Button
            onClick={() => {
              setOpenModal('none')
            }}
            variant="rounded"
          >
            x
          </Button>
        </DialogExitButtonContainer>
        <DialogTitle>Login</DialogTitle>
        <LoginForm onSubmit={login} submitButton={<Button>Login</Button>} />
      </Dialog>
      <Dialog aria-label="Register form" isOpen={openModal === 'register'}>
        <DialogExitButtonContainer>
          <Button
            onClick={() => {
              setOpenModal('none')
            }}
            variant="rounded"
          >
            x
          </Button>
        </DialogExitButtonContainer>
        <DialogTitle>Register</DialogTitle>
        <LoginForm
          onSubmit={register}
          text="Register"
          submitButton={<Button variant="secondary">Register</Button>}
        />
      </Dialog>
    </MainContainer>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
