import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
    <tr>
      {config.map((headData)=><th>{headData.title}</th>)}
    </tr>
    </thead>
    <tbody>
      {data.map((dataRecord)=><tr>
        {config.map((headData)=>{
          if(headData.component){
            const Componnent = headData.component
            return <Componnent data={dataRecord[headData.field]}/>
          }else{
            return <td>{dataRecord[headData.field]}</td>
          }
          })}
      </tr>
      )}
    </tbody>
  </table>
);

export default Grid;