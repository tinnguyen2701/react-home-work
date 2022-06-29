import React from 'react';
import { StyledModal } from './styles';


interface modalProps {
    title: string,
    children: any
    onOk: () => void,
    onCancel: () => void,
    visible?: boolean
    confirmLoading?: boolean
}

export const ModalWrapped = ({title, visible, onOk, onCancel, confirmLoading, children, ...props }: modalProps) => {

  return (
    <div>
        <StyledModal
            title = {title}
            visible = {visible}
            onOk = {() => onOk()}
            onCancel = {() => onCancel()}
            confirmLoading = {confirmLoading}
            {...props}
        >
            {children}
        </StyledModal>
    </div>
  );
};

export default ModalWrapped;