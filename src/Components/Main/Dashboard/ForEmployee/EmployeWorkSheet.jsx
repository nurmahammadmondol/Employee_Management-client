import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAxionPublic from '../../../Axios/useAxionPublic';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecuur from '../../../Axios/useAxiosSecuur';

const EmployeWorkSheet = () => {
  const { User } = useContext(AuthContext);

  const PublicAxios = useAxionPublic();
  const AxiosSecuur = useAxiosSecuur();

  const [startDate, setStartDate] = useState(new Date());
  const [tasks, setTasks] = useState(null);

  const handleTasksForm = e => {
    e.preventDefault();

    const WorkingTime = e.target.WorkingTime.value;

    const EmployeWorkSheet = {
      tasks,
      WorkingTime,
      startDate,
      EmployeName: User?.displayName,
      EmployeEmail: User?.email,
    };
    // console.log(EmployeWorkSheet);

    PublicAxios.post('/WorkSheet', EmployeWorkSheet)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleTasks = e => {
    e.preventDefault();
    setTasks(e.target.value);
  };

  // [Employee Only] work-sheet :
  const [workSheet, setworkSheet] = useState([]);

  const FilterEmployeeWorkSheet = workSheet
    .filter(data => data?.EmployeEmail === User?.email)
    .reverse();

  useEffect(() => {
    AxiosSecuur.get('/WorkSheet').then(res => {
      setworkSheet(res.data);
    });
  }, []);

  return (
    <>
      <div className="md:flex gap-14 min-h-screen">
        <div className="w-full md:w-1/3 border">
          {/* Form */}
          <form
            onSubmit={handleTasksForm}
            className="space-y-4 md:space-y-5  bg-white p-4 rounded "
          >
            <div className="w-full ">
              <select
                onChange={handleTasks}
                value={tasks}
                className="border rounded w-full p-2 flex-grow"
              >
                <option disabled selected>
                  Tasks
                </option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Content">Content</option>
                <option value="Paper-work">Paper-work</option>
              </select>
            </div>

            <div className="w-full">
              <input
                type="number"
                name="WorkingTime"
                placeholder="Hours Worked"
                className="border rounded p-2 w-full flex-grow"
              />
            </div>

            <div className="w-full flex items-center gap-4">
              <DatePicker
                showIcon
                selected={startDate}
                onChange={date => setStartDate(date)}
                icon="fa fa-calendar"
                className="border p-3"
              />

              <button
                type="submit"
                className="bg-cyan-200 w-full text-white text-lg font-bold px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-2/3 border mt-10 md:mt-0">
          {/* Table */}
          <div>
            <table className="w-full table overflow-x-auto bg-white rounded ">
              <thead>
                <tr className="bg-gray-200 text-center">
                  <th className="p-2">Task</th>
                  <th className="p-2">Working Hours</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {FilterEmployeeWorkSheet.map(item => (
                  <tr key={item._id} className=" text-center">
                    <td>{item?.tasks}</td>
                    <td>{item?.WorkingTime} hours</td>
                    <td>{item?.startDate}</td>
                    <td className="md:flex justify-center items-center gap-4">
                      <button>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button>
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
                {/* <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>🖊 ❌</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeWorkSheet;
