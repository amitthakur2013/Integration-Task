import React from "react";

export const Templates = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  return (
    <div>
      <div className='form-element'>
        <label htmlFor=''>Menu</label>
        <select name='' id=''>
          <option value='' disabled selected></option>
          <option value=''>Sankalp</option>
        </select>
      </div>
      <div className='form-element'>
        <label htmlFor=''>How to Use offer</label>
        <select name='' id=''>
          <option value='' disabled selected></option>
          <option value=''>Sankalp</option>
        </select>
      </div>
      <div className='form-element'>
        <label htmlFor=''>Cancellation Policy</label>
        <select name='' id=''>
          <option value='' disabled selected></option>
          <option value=''>100% refund</option>
          <option value=''>No refund</option>
        </select>
      </div>
      <div className='form-element'>
        <label htmlFor=''>Things To Remember</label>
        <select name='' id=''></select>
      </div>
      <div className='center'>
        <button className='Back' onClick={back}>
          Prev
        </button>
        <button className='Next' onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};
