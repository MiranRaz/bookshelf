import styled from '@emotion/styled'
import {Dialog as ReactDialog} from '@reach/dialog'

const MainContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: window.innerHeight,
})

const buttonVariants = {
  primary: {
    background: '#3f51b5',
    color: 'white',
  },
  secondary: {
    background: '#f1f2f7',
    color: '#434449',
  },
  rounded: {
    borderRadius: '26px',
    background: '#f1f2f7',
    color: '#434449',
  },
}
const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  },
  ({variant = 'primary'}) => buttonVariants[variant],
)
const ButtonSplit = styled.div({
  display: 'flex',
  gridTemplateColumns: 'repeat (2, minmax(0, 1fr))',
  gridGap: '0.75rem',
})

const Dialog = styled(ReactDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 10px 30px -5px',
  margin: '20vh auto',
})
const DialogTitle = styled.h2({
  display: 'flex',
  justifyContent: 'center',
})
const DialogExitButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
})

const Input = styled.input({
  borderRadius: '3px',
  border: '1px solid #f1f1f4',
  background: '#f1f2f7',
  padding: '8px 12px',
})
const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  '> div': {margin: '10px auto', width: '100%', maxWidth: '300px'},
})
const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

export {
  MainContainer,
  Button,
  ButtonSplit,
  Dialog,
  DialogTitle,
  DialogExitButtonContainer,
  Input,
  Form,
  FormGroup,
}
