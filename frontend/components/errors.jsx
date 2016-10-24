import React from 'react';

const Errors = ({errors}) => (
  <div>
    {
      errors.map((error, i) => (<div key={i} className="alert alert-danger" role="alert"><strong>Error!</strong> {error}</div>))
    }
  </div>
);

export default Errors;