import React from 'react';
import { StyledButton } from './styles';


interface buttonProps {
    type?: "link" | "text" | "default" | "ghost" | "primary" | "dashed" | undefined,
    style?: object,
    children: any,
    onClick: () => void
}

export const ButtonWrapped = ({type, style, children, onClick, ...props }: buttonProps) => {

  return (
    <div>
        <StyledButton
            type={type}
            style={style}
            onClick={() => onClick()}
            {...props}
        >
            {children}
        </StyledButton>
    </div>
  );
};

export default ButtonWrapped;