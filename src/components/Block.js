
import React from 'react';
import '../css/block.css'

const Block = ({ contesnts,row=[1],col=[1] }) => {
    const RowTemp = row.map(r=>r+'fr').join(' ');
    const colTemp = row.map(r=>r+'fr').join(' ');

    return (
        <div className='nooroongy-block' style={{ 
            gridTemplateRows: RowTemp,
            gridTemplateColumns: colTemp,
         }}>
            {contesnts}
        </div>
    )
}

export default Block;