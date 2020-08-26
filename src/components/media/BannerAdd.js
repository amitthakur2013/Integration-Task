import React from "react";

export const BannerAdd = () => {
  return (
    <div className='item-create'>
      <h2 className='item-heading-create'>ImageAdd</h2>
      <form action='' className='item-right-inner'>
        <div className='form-element'>
          <label htmlFor=''>Config</label>
          <select name='' id=''></select>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Title</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Banner Title</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Banner Sub Title</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Caption</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Redirect URL</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Logo</label>
          <input type='file' />
        </div>

        <div className='form-element'>
          <label htmlFor=''>Position</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Status</label>
          <select name='' id=''></select>
        </div>
        <div className='center'>
          <button className='blue-button'>Create</button>
          <button className='red-button'>Cancel</button>
        </div>
      </form>
    </div>
  );
};
