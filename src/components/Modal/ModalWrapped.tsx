import React from 'react';
import { StyledModal } from './styles';
import { isEqual } from 'lodash'

interface modalProps {
    title: string,
    children: any
    onOk: () => void,
    onCancel: () => void,
    visible?: boolean
    confirmLoading?: boolean
}

export const ModalWrapped = React.memo(({
  title, 
  visible, 
  onOk, 
  onCancel, 
  confirmLoading, 
  children, 
  ...props 
}
  : modalProps) => {
  return (
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
  );
}, isEqual);

export default ModalWrapped;