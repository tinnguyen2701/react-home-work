import { Select } from "antd";

export interface ISelectProp {
    label: string,
    value: string
}

interface selectProps<T> {
    datasource: T[],
    onChanged: (value: string) => void
}

export const SelectWrapped = (props: selectProps<ISelectProp>) => {
    const { Option } = Select;

    return (
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
            filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
                .toLowerCase()
                .localeCompare((optionB!.children as unknown as string).toLowerCase())
            }
            onChange={(e) => props.onChanged(e)}
        >
            {
                props.datasource.map((option, index) => <Option key={index} value={option.value}>{option.label}</Option>)
            }
        </Select>
    );
};