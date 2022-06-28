import { SelectWrapped } from "../components/SelectWrapped";
import { useGetAllClassesQuery } from "../services/classApi";

export const SettingsPage = () => {
    const { data: classes, isLoading } = useGetAllClassesQuery({});

    const onChangeDropdown = (val: string) : void => {
        console.log(val)
    }

    return (
        <>
            {
                <SelectWrapped onChanged={onChangeDropdown} datasource={classes} isLoading={isLoading} />
            }
        </>
    );
};