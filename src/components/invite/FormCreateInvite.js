import React from "react";

export const FormCreateInvite = () => {
  return (
    <div className='item-create'>
      <h2 className='item-heading'>
        <i class='fas fa-cog'></i> Create
      </h2>
      <div className='item-right-inner'>
        <h1>Create Invite Code</h1>
        <form action=''>
          <div className='form-element'>
            <label htmlFor=''> Invite Code</label>
            <input type='text' />
          </div>
          <div className='form-element'>
            <label htmlFor=''>Mobile</label>
            <input type='text' />
          </div>
        </form>
      </div>
    </div>
  );
};
