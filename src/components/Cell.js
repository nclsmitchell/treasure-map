import React from 'react';
import '../css/cell.css';

const Cell = (props) => {

  const { value } = props;

  return (
		 <div className={"cell " + value.toLowerCase()[0]}>
      <span>{ value.slice(1,) }</span>
     </div>
	);
};

export default Cell;
