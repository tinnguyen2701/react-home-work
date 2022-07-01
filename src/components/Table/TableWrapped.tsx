import React from 'react';
import { StyledTable } from './styles';
import { isEqual } from 'lodash'


interface tableProps {
    columns: any[],
    data: any[],
    rowSelection: object
    getRowKey: () => string
    
    selectionType?: 'checkbox' | 'radio'
    isLoading?: boolean,
}

export const TableWrapped = React.memo(({columns, data, rowSelection, selectionType = 'checkbox', isLoading, getRowKey, ...props }: tableProps) => {
  console.log("table");
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
}, isEqual);

export default TableWrapped;