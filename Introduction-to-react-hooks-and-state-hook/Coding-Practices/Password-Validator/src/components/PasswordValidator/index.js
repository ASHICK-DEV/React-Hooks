import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  Heading,
  Paragraph,
  InputContainer,
  ErrorMessage,
  Own,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, validatePassword] = useState('')

  const onChangePassword = event => validatePassword(event.target.value)

  return (
    <MainContainer>
      <PasswordContainer>
        <Own>Designed by Ashiq</Own>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputContainer
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {password.length < 8 && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
