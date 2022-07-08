import React from 'react'
import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material'

function Button({ children, ...props }) {
   return <StyledButton {...props}>{children}</StyledButton>
}

export default Button

const StyledButton = styled(MuiButton)`
   &.MuiButton-contained {
      background: #2ca803;
   }
`
