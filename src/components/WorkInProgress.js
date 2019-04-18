import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
        <h4>Add Information of the Item Here</h4>
        <h5>Pull the data from database through the query </h5>
      <Progress animated color="warning" value={15}  />
    </div>
  );
};

export default Example;