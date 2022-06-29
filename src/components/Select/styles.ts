import { Select } from "antd";
import styled from "styled-components";


export const StyledSelect = styled(Select)`
    border: 1px solid pink;
    width: ${props => props.style?.width ? props.style.width : 200}px;
`