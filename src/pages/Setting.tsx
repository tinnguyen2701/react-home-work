import { useEffect, useState } from "react";
import { ISelectProp, SelectWrapped } from "../components/SelectWrapped";

interface IClass extends ISelectProp {

}

export const SettingsPage = () => {
    var [classes, setClasses] = useState<IClass[]>([]);

    useEffect(() => {
        setClasses([{label: "01", value: "1"}, {label: "02", value: "2"}, {label: "03", value: "3"}])
    }, []);


    const onChangeDropdown = (val: string) : void => {
        console.log(val)
    }

    return (
        <SelectWrapped onChanged={onChangeDropdown} datasource={classes} />
    );
};