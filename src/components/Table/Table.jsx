import React from 'react';

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Email
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-100">

            <td className="px-5 py-5 border-b border-gray-200 text-sm">
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">John Doe</p>
                </div>
              </div>

            </td>
           
            <td className="px-5 py-5 border-b border-gray-200 text-sm">
              <p className="text-gray-900 whitespace-no-wrap">john.doe@example.com</p>
            </td>

            <td className="px-5 py-5 border-b border-gray-200 text-sm">
              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                ></span>
                <span className="relative">view Docs</span>
              </span>
            </td>

          </tr>



         


         



        </tbody>
      </table>
    </div>
  );
};

export default Table;
