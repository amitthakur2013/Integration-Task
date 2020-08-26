import React from "react";

export const StateManage = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>StateManage</h2>
      <table>
        <tr>
          <th>#</th>
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
            <select name='' id=''>
              <option value=''>option</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Maharashtra</td>
          <td>
            <span className='active'>Active</span>
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
