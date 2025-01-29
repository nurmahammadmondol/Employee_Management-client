import { useQuery } from '@tanstack/react-query';
import useAxiosSecuur from '../../../Axios/useAxiosSecuur';
import Swal from 'sweetalert2';
import SuccessIcon from '../../../../assets/Icon/icons8-success-48.png';

const PayEmployeesSalary = () => {
  const AxiosSeccur = useAxiosSecuur();

  const {
    isPending,
    error,
    refetch,
    data: paymentRequests = [],
  } = useQuery({
    queryKey: ['Payment_Request'],
    queryFn: async () => {
      const res = await AxiosSeccur.get('/Payment_Request');
      const reversedData = res.data.reverse(); // অ্যারের এলিমেন্টগুলোর ক্রম উল্টো করুন
      // console.log(reversedData);
      return reversedData;
    },
  });

  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0'); // দিন
  const month = String(date.getMonth() + 1).padStart(2, '0'); // মাস (0 থেকে শুরু হয়, তাই +1)
  const year = date.getFullYear(); // বছর

  const customDate = `${day}/${month}/${year}`;

  const handlePay = (ID, employeeData) => {
    Swal.fire({
      title: 'Do you want to pay the employee ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Pay Now',
      confirmButtonColor: '#89CFF0',
      denyButtonText: `Reject`,
    }).then(result => {
      if (result.isConfirmed) {
        const addNowDate = {
          approvedTime: customDate,
          request: true,
          salary: employeeData.salary, // Existing salary
        };

        AxiosSeccur.patch(`Payment_Request/${ID}`, addNowDate) // Send only relevant fields
          .then(res => {
            console.log(res.data);
            refetch();

            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: 'Payment!',
                text: `Salary sent successfully.`,
                icon: 'success',
                confirmButtonText: 'Okay',
                confirmButtonColor: '#89CFF0',
              });
            }
          })
          .catch(error => {
            console.error(error);
          });
      } else if (result.isDenied) {
        Swal.fire({
          title: 'I will not pay.',
          showDenyButton: true,
          confirmButtonText: 'Reject',
          confirmButtonColor: '#89CFF0',
        });
      }
    });
  };

  return (
    <div>
      <h3 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-5 flex justify-center items-center gap-3">
        Pay Employees Salary<i class="fa-solid fa-comment-dollar"></i>
      </h3>

      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead>
            <tr className="bg-gray-200 text-base text-cyan-600 font-bold text-center">
              <th>Serial No</th>
              <th>
                <i class="fa-solid fa-user mr-1"></i>Employee Name
              </th>
              <th>
                <i class="fa-solid fa-sack-dollar mr-1"></i>Salary
              </th>
              <th>
                <i class="fa-solid fa-calendar-days mr-1"></i>Year & Month
              </th>
              <th>
                <i class="fa-regular fa-calendar-check mr-1"></i>Payment Date
              </th>
              <th>
                <i class="fa-solid fa-money-check-dollar mr-1"></i>Pay
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentRequests.map((item, i) => (
              <tr className="text-center">
                <td>{i + 1}</td>
                <td className="flex items-center gap-1 md:gap-2">
                  <img
                    className="w-11 h-11 rounded-full border"
                    src={item?.photo}
                    alt=""
                  />

                  <span className="font-semibold"> {item?.name}</span>
                </td>
                <td>${item?.salary || '_ _ _'}</td>
                <td>{item?.date}</td>
                <td>{item?.approvedTime || '_ _ _'}</td>
                <td>
                  {item?.request ? (
                    <div className="flex gap-1 justify-center items-center">
                      <img
                        className="w-4"
                        src={SuccessIcon}
                        alt="Success Icon"
                      />
                      <span className="text-green-500">Payment success</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handlePay(item?._id, item)}
                      className={`btn w-full btn-sm btn-outline text-cyan-600 `}
                    >
                      $ Pay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayEmployeesSalary;
