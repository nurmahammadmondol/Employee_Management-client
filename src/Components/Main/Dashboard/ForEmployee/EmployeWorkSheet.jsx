import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAxionPublic from '../../../Axios/useAxionPublic';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecuur from '../../../Axios/useAxiosSecuur';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const EmployeWorkSheet = () => {
  const { User } = useContext(AuthContext);

  const PublicAxios = useAxionPublic();
  const AxiosSecuur = useAxiosSecuur();

  const [startDate, setStartDate] = useState(new Date());
  const [tasks, setTasks] = useState(null);

  // [Employee Only] work-sheet :
  const [workSheet, setworkSheet] = useState([]);

  const FilterEmployeeWorkSheet = workSheet
    .filter(data => data?.EmployeEmail === User?.email)
    .reverse();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['/WorkSheet'],
    queryFn: () =>
      AxiosSecuur.get('/WorkSheet').then(res => {
        setworkSheet(res.data);
      }),
  });

  const handleTasksForm = e => {
    e.preventDefault();

    // ফর্মের রেফারেন্স
    const form = e.target;

    // ইনপুট থেকে ডেটা সংগ্রহ
    const WorkingTime = form.WorkingTime.value;

    const EmployeWorkSheet = {
      tasks,
      WorkingTime,
      startDate,
      EmployeName: User?.displayName,
      EmployeEmail: User?.email,
    };

    if (tasks) {
      PublicAxios.post('/WorkSheet', EmployeWorkSheet)
        .then(res => {
          console.log(res.data);
          refetch();

          // ফর্ম রিসেট করা
          form.reset();
          setTasks(null);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      alert('Error: Bad Request');
    }
  };

  const handleTasks = e => {
    e.preventDefault();
    setTasks(e.target.value);
  };

  const [editItem, setEditItem] = useState(null);

  const handleEditButtonOpen = Item => {
    setEditItem(Item);
    document.getElementById('my_modal_4').showModal();
  };

  const handleUpdateTasks = (e, ID) => {
    e.preventDefault();

    const form = e.target;
    const WorkingTime = form.EditWorkingTime.value;
    const Tarks = form.Tasks.value;

    const UpdateData = { tasks: Tarks, WorkingTime, startDate };
    console.log(ID);
    console.log(UpdateData);
    AxiosSecuur.patch(`/WorkSheet/${ID}`, UpdateData)
      .then(res => {
        console.log(res.data);
        refetch();

        if (res.data.modifiedCount > 0) {
          document.getElementById('my_modal_4').close();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDeleteTasks = ID => {
    console.log('delete', ID);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        AxiosSecuur.delete(`/WorkSheet/${ID}`)
          .then(res => {
            console.log(res.data);
            refetch();
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          })
          .catch(error => {
            console.log(error.message);
          });
      }
    });
  };

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
                required
              >
                <option disabled selected value="">
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
                required
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
                className="bg-cyan-200 w-full text-white md:text-xs lg:text-lg lg:font-bold px-3 lg:px-4 py-1 rounded"
              >
                Add
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-2/3 border mt-10 md:mt-0">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full table overflow-x-auto bg-white rounded ">
              <thead>
                <tr className="bg-gray-200 text-center">
                  <th className="p-2">Task</th>
                  <th className="p-2">Working Hours</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>

              {User && FilterEmployeeWorkSheet.length > 0 ? (
                <tbody>
                  {FilterEmployeeWorkSheet.map(item => (
                    <tr
                      key={item._id}
                      className=" text-center hover:bg-gray-100"
                    >
                      <td>{item?.tasks}</td>
                      <td>{item?.WorkingTime} hours</td>
                      <td>{item?.startDate}</td>
                      <td className="md:flex justify-center items-center gap-4">
                        <button onClick={() => handleEditButtonOpen(item)}>
                          <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button onClick={() => handleDeleteTasks(item?._id)}>
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr className=" text-center">
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                  </tr>
                </tbody>
              )}

              {/* You can open the modal using document.getElementById('ID').showModal() method */}
            </table>
          </div>

          {/* work sheet Modal */}
          <dialog
            id="my_modal_4"
            className="modal flex justify-center items-center"
          >
            <div className="modal-box w-11/12 py-28 max-w-5xl flex flex-col items-center justify-center">
              <h3 className="font-bold text-lg">Update this Tasks</h3>

              <div className="modal-action">
                <form
                  onSubmit={e =>
                    handleUpdateTasks(e, editItem._id, editItem?.tasks)
                  }
                  className=" bg-white p-4 rounded grid grid-cols-1 md:grid-cols-2 items-center gap-5"
                >
                  <div className="w-full">
                    <label>Tasks :</label>
                    <select
                      onChange={handleTasks}
                      value={tasks || editItem?.tasks}
                      defaultValue={editItem?.tasks}
                      name="Tasks"
                      className="border rounded w-full p-2"
                      required
                    >
                      <option disabled value="">
                        Tasks
                      </option>
                      <option value="Sales">Sales</option>
                      <option value="Support">Support</option>
                      <option value="Content">Content</option>
                      <option value="Paper-work">Paper-work</option>
                    </select>
                  </div>

                  <div className="w-full">
                    <label>Working Time :</label>
                    <input
                      type="number"
                      name="EditWorkingTime"
                      required
                      defaultValue={editItem?.WorkingTime}
                      // onChange={e => setWorkingTime(e.target.value)}
                      placeholder="Hours Worked"
                      className="border rounded p-2 w-full"
                    />
                  </div>

                  <div className="w-full">
                    <DatePicker
                      showIcon
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                      className="border p-3 w-full rounded"
                      // popperPlacement="right-start"
                    />
                  </div>

                  <div className="w-full">
                    <button className="bg-cyan-300 btn btn-sm w-full  text-white py-2 px-5 md:px-10 rounded hover:bg-cyan-500 transition">
                      Update
                    </button>
                  </div>
                </form>
              </div>
              <form method="dialog">
                <div className="flex items-center gap-5 mt-5">
                  <button className="text-cyan-300 btn btn-sm btn-outline py-2 px-5 md:px-10 rounded hover:bg-cyan-500 transition">
                    Back
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default EmployeWorkSheet;
