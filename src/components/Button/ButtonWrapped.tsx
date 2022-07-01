import React from 'react';
import { StyledButton } from './styles';
import { isEqual } from 'lodash'

interface buttonProps {
    type?: "link" | "text" | "default" | "ghost" | "primary" | "dashed" | undefined,
    style?: object,
    children: any,
    onClick: () => void
}


export const ButtonWrapped = React.memo(({type, style, children, onClick, ...props}: buttonProps) => {
  return (
      <StyledButton
          type={type}
          style={style}
          onClick={() => onClick()}
          {...props}
      >
          {children}
      </StyledButton>
  );
}, isEqual)

export default ButtonWrapped;