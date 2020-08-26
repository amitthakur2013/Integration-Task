import React from "react";

export const AreaCreate = () => {
  return (
    <div>
      <div className='item-create'>
        <h2 className='item-heading'>Area Create</h2>
        <form action=''>
          <div className='form-element'>
            <label htmlFor=''>Area</label>
            <input type='text' />
          </div>
          <div className='form-element'>
            <label htmlFor=''>City</label>
            <input type='text' />
          </div>
          <div className='form-element'>
            <label htmlFor=''>Notes</label>
            <input type='text' />
          </div>
          <div className='form-element'>
            <label htmlFor=''>Status</label>
            <select name='' id=''>
              <option value=''>In active</option>
            </select>
          </div>
          <div className='center'>
            <button className='Next'>Create</button>
            <button className='Back'>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};
