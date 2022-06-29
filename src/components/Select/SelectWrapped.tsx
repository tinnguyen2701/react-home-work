import { Select } from "antd";
import { StyledSelect } from "./styles";

export interface ISelectProp {
    label: string,
    value: string
}

interface selectProps<T> {
    datasource: T[],
    onChanged: (value: any) => void,
    
    isLoading?: boolean;
    showSearch?: boolean
    style?: object
    isFilter?: boolean
    placeholder?: string
}

export const SelectWrapped = ({
    datasource,
    onChanged,
    isLoading,
    style,
    isFilter,
    placeholder="Search to Select",
    ...props
}: selectProps<ISelectProp>) => {
    
    const { Option } = Select;

    const propFilter = (isFilter ? {
        optionFilterProp: "children", 
        filterOption: (input: string, option: any) => (option!.children as unknown as string).includes(input), 
        filterSort: (optionA: any, optionB: any) =>
            (optionA!.children as unknown as string)
            .toLowerCase()
            .localeCompare((optionB!.children as unknown as string).toLowerCase())
        } : {})

    return (
        <StyledSelect 
            style={style}
            loading = {isLoading}
            placeholder={placeholder}
            onChange = {e => onChanged(e)}
            {...propFilter} 
            {...props}
        >
            {
                datasource && datasource.length > 0 && datasource.map((option, index) => <Option key={index} value={option.value}>{option.label}</Option>)
            }
        </StyledSelect>
    );
};