import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SuccessIcon from '../../../../assets/Icon/icons8-success-48.png';
import { Helmet } from 'react-helmet';

const WorkRecords = () => {
  const LoaderData = useLoaderData();
  const [workSheet, setWorkSheet] = useState([...LoaderData].reverse());
  const [name, setName] = useState('All Employee'); // Default "All Employee"
  const [date, setDate] = useState(''); // Default no month filter

  const FilterEmployeeName = [
    ...new Set(LoaderData.map(item => item.EmployeName)),
  ];

  const handleFilter = () => {
    let FilterData = LoaderData;

    // যদি "Month" সিলেক্ট করা হয়, তাহলে মাস ফিল্টার অ্যাপ্লাই হবে
    if (date) {
      FilterData = FilterData.filter(item => {
        const itemMonth = new Date(item.startDate).getMonth() + 1; // Extract the month
        return itemMonth === parseInt(date);
      });
    }

    // যদি নির্দিষ্ট নাম সিলেক্ট করা হয় এবং "All Employee" না হয়
    if (name && name !== 'All Employee') {
      FilterData = FilterData.filter(item => item.EmployeName === name);
    }

    setWorkSheet(FilterData);

    if (FilterData.length === 0) {
      console.log('No matching data found!');
    }
  };

  return (
    <div>
      <Helmet>
        <title>EmpowerHub || WorkRecords</title>
      </Helmet>
      <div className="mb-5 md:mb-10">
        <h4 className="w-full text-xl md:text-2xl font-bold">
          All job records posted by employees are displayed on this page.
        </h4>
        <div className="mt-5 flex items-center gap-5 md:gap-10">
          {/* Employee Name Filter */}
          <select
            onChange={e => setName(e.target.value)}
            value={name}
            className="border rounded w-full p-2 flex-grow"
            required
          >
            <option value="All Employee">All Employee</option>
            {FilterEmployeeName.map((Name, index) => (
              <option key={index} value={Name}>
                {Name}
              </option>
            ))}
          </select>

          {/* Month Filter */}
          <select
            onChange={e => setDate(e.target.value)}
            value={date}
            className="border rounded w-full p-2 flex-grow"
            required
          >
            <option value="">All Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          {/* Filter Button */}
          <button
            onClick={handleFilter}
            className="btn btn-outline px-7 md:px-10 text-cyan-400"
          >
            Filter
          </button>
        </div>
      </div>

      <div className="w-full h-[500px] overflow-x-auto overflow-y-auto">
        <table className="table border overflow-x-auto">
          {/* Table Header */}
          <thead className="bg-gray-200 border-gray-300">
            <tr className="text-center  text-base font-bold text-cyan-700">
              <th>Serial No</th>
              <th>Tasks</th>
              <th>Employee Name</th>
              <th>Working Time</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {workSheet.map((progress, index) => (
              <tr key={progress._id} className="text-center ">
                <th>{index + 1}</th>
                <td>{progress?.tasks}</td>
                <td className="flex justify-center items-center gap-2">
                  {name && name === progress?.EmployeName && (
                    <img className="w-5" src={SuccessIcon} alt="Success Icon" />
                  )}
                  {progress?.EmployeName}
                </td>
                <td>{progress?.WorkingTime}</td>
                <td className="flex justify-center items-center gap-2">
                  {/* Check if the selected month matches the progress month */}
                  {date &&
                    new Date(progress?.startDate).getMonth() + 1 ===
                      parseInt(date) && (
                      <img
                        className="w-5"
                        src={SuccessIcon}
                        alt="Success Icon"
                      />
                    )}
                  {/* Display the start date in YYYY-MM-DD format */}
                  {progress?.startDate?.split('T')[0]}
                </td>

                {/* <td>{progress?.startDate?.split('T')[0]}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkRecords;
