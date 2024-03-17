import React from 'react'
import './LoadingAnimation.css'

export const LoadingAnimation = () => {
    function createTable(){
        return(
            <div className='loadingTable'>
                <div className='loadingTableData skeleton'></div>
                <div className='loadingTableData skeleton'></div>
                <div className='loadingTableData skeleton'></div>
                <div className='loadingTableData skeleton'></div>
                <div className='loadingTableData skeleton'></div>
                <div className='loadingTableData skeleton'></div>
            </div>
        )
    }
    function showTable(){
        let loadingTable = [];
        for(let i=0; i<10; i++){
            loadingTable.push(createTable());
        }
        return loadingTable;
    }
    
  return (
    <div>

        <div className='optionBox skeleton'></div>
        <div className='tableLoader'>
        {showTable()}
        </div>
    </div>
  )
}
