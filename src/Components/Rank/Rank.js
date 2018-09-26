import React from 'react';


const Rank = (props) => {
  const {name, enteries} = props.user;
  return (
    <div>
      <div className='white f3 pa2'>
        {`${name}, youre enteries number is:`}
      </div>
      <div className='white f2'>
        {`${enteries}`}
      </div>
    </div>
  );
}

export default Rank;
