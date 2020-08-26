import React from "react";

export const Enquiry = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>Enquiry </h2>
      <table>
        <tr>
          <th>#</th>

          <th> Contact Person Name</th>
          <th> Contact Number</th>
          <th>Email</th>
          <th>Business Name</th>
          <th>More Info </th>
          <th> Date & Time </th>
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
            <input type='text' />
          </td>

          <td>
            <input type='text' />
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td>prashant mehta</td>
          <td>123457996</td>
          <td>prm7earth@gmail.com</td>
          <td>all4you india </td>
          <td>enquiry to get listed as restaurant chain owner</td>

          <td>
            {" "}
            <span className=''>26 Jul 2020 11:14 am</span>
          </td>
        </tr>
      </table>
    </div>
  );
};
