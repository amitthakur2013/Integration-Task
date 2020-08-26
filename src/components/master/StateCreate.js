import React from "react";

export const StateCreate = () => {
  return (
    <div className='item-create'>
      <h2 className='item-heading'>StateCreate</h2>
      <form action=''>
        <div className='form-element'>
          <label htmlFor=''>State</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Notes</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Status</label>
          <select name='' id=''>
            <option value disabled selected></option>
            <option value=''>In active</option>
          </select>
        </div>
        <div className='center'>
          <button className='Next'>Create</button>
          <button className='Back'>Cancel</button>
        </div>
      </form>
    </div>
  );
};
