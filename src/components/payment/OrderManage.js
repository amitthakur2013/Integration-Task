import React from "react";

export const OrderManage = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>Order Manage</h2>
      <table>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Order ID</th>
          <th>Code</th>
          <th>Status</th>
          <th> Quick Actions</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>prashant mehta</td>
          <td>AFUC-2008-BARB-0001</td>
          <td>AFUC-BARB-5F30-2367-****</td>
          <td></td>
          <td>
            <span className='active'>ACTIVE</span>
          </td>
          <td>09 Aug 20 21:55:11 PM</td>
          <td className='actions'>
            <i class='far fa-eye blue'></i>
            <i class='fas fa-trash red'></i>
          </td>
        </tr>
      </table>
    </div>
  );
};
