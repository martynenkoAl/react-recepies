import React, { useState } from 'react';

export default function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      hanleSubmit();
    }
  };

  const hanleSubmit = (e) => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          id='search-field'
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder='search'
        />
        <button
          className='btn yellow darken-1 black-text'
          style={{ position: 'absolute', top: 0, right: 0 }}
          onClick={hanleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}
