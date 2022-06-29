import React from 'react';
import { StyledTable } from './styles';


interface tableProps {
    columns: any[],
    data: any[],
    rowSelection: object
    getRowKey: () => string
    
    selectionType?: 'checkbox' | 'radio'
    isLoading?: boolean,
}

export const TableWrapped = ({columns, data, rowSelection, selectionType = 'checkbox', isLoading, getRowKey, ...props }: tableProps) => {

  return (
    <div>
        <StyledTable 
            columns={columns} 
            dataSource={data} 
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }} 
            loading={isLoading}
            rowKey={getRowKey()}
            {...props}
            />
    </div>
  );
};

export default TableWrapped;