import React from "react";

export const CityCreate = () => {
  return (
    <div>
      <div className='item-create'>
        <h2 className='item-heading'>City Create</h2>
        <form action=''>
          <div className='form-element'>
            <label htmlFor=''>City</label>
            <input type='text' />
          </div>
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
    </div>
  );
};
