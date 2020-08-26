import React from "react";

export const CityManage = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>CityManage</h2>
      <table className='item-right-inner'>
        <tr>
          <th>#</th>
          <th>City</th>
          <th>State</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type='text' />
          </td>
          <td>
            <input type='text' />
          </td>
          <td>
            <select name='' id=''></select>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mumbai</td>
          <td>Maharashtra</td>
          <td>
            <span className='active'>active</span>
          </td>
          <td className='actions'>
            <i class='far fa-eye blue'></i>
            <i class='fas fa-pencil-alt orange'></i>
            <i class='fas fa-trash red'></i>
          </td>
        </tr>
      </table>
    </div>
  );
};
