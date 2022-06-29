import { Divider } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useRef, useState } from "react";
import { SelectWrapped } from "../components/Select/SelectWrapped";
import { TableWrapped } from "../components/Table/TableWrapped";
import { useGetAllClassesQuery } from "../services/classApi";
import { studentApi, useGetAllStudentByClassIdQuery } from "../services/studentApi";


interface DataStudentType {
    studentId: React.Key;
    firstName: string;
    lastName: string;
    isAssigned: boolean;
}
  
export const SettingsPage = () => {
    const classIdSelected = useRef('');
    const { data: classes, isLoading: isLoadingClasses } = useGetAllClassesQuery({});
    const { data: datasource, isLoading: isLoadingDatasource, isFetching: isFetchingStudent, refetch: refetchStudents } = useGetAllStudentByClassIdQuery(classIdSelected.current, {});

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataStudentType[]) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataStudentType) => ({
          disabled: record.isAssigned === true,
          name: record.studentId,
        }),
    };

    const onChangeDropdown = (val: string) : void => {
      classIdSelected.current = val;
      refetchStudents();
    }

    const columns: ColumnsType<DataStudentType> = [
        {
          title: 'Student ID',
          dataIndex: 'studentId',
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
        },
        {
          title: 'Status',
          dataIndex: 'isAssigned',
          render: (isAssigned: boolean) => <span>{isAssigned ? "true" : "false"}</span>,
        },
      ];

    return (
        <>
            <SelectWrapped onChanged={onChangeDropdown} datasource={classes} isLoading={isLoadingClasses} showSearch={true} style={{width: 400}}/>

            <Divider />

            <TableWrapped rowSelection={rowSelection} columns={columns} data={datasource} isLoading={isLoadingDatasource || isFetchingStudent} getRowKey={() => "studentId"}  />
        </>
    );
};
