import { Button, Divider, Modal } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useRef, useState } from "react";
import ButtonWrapped from "../components/Button/ButtonWrapped";
import ModalWrapped from "../components/Modal/ModalWrapped";
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

      const [visible, setVisible] = useState(false);

      const showModal = () => {
        setVisible(true);
      };

      const [confirmLoading, setConfirmLoading] = useState(false);
      const [modalText, setModalText] = useState('Content of the modal');

      const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);
        }, 2000);
      };
    
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
      };

    return (
        <>
            <SelectWrapped onChanged={onChangeDropdown} datasource={classes} isLoading={isLoadingClasses} showSearch={true} style={{width: 400}}/>

            <ButtonWrapped type={"primary"} style={{float: "right"}} onClick={showModal}>Add new student</ButtonWrapped>

            <ModalWrapped title="Title" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
              <p>{modalText}</p>
            </ModalWrapped >

            <Divider />

            <TableWrapped rowSelection={rowSelection} columns={columns} data={datasource} isLoading={isLoadingDatasource || isFetchingStudent} getRowKey={() => "studentId"}  />
        </>
    );
};
