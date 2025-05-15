import React from 'react';
import CountUp from 'react-countup';

const Statistical = () => {
  return (
    <div class="bg-blue-50 h-full md:h-[300px] rounded-lg p-5 md:p-10 lg:p-0 w-full flex items-center justify-center">
      <div className=" p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {/* Legal Compliance */}
        <div className="space-y-2">
          <h3 className=" md:text-xl font-bold mb-2 ">
            <i class="fa-solid fa-business-time text-lg  p-2 text-white bg-cyan-400 rounded-full mr-1"></i>
            Legal Compliance
          </h3>
          <CountUp
            start={0}
            end={63}
            duration={3} // 2 সেকেন্ডে সম্পন্ন হবে
            suffix="%"
            className="text-4xl font-bold text-[#22d3ee]"
          />
          <p className="text-gray-600">Legal compliance statistics</p>
        </div>

        {/* Recruitment and Staffing */}
        <div className="space-y-2">
          <h3 className=" md:text-xl font-bold mb-2 ">
            <i class="fa-brands fa-squarespace  text-lg   p-2 text-white bg-cyan-400 rounded-full mr-1"></i>
            Recruitment and Staffing
          </h3>
          <CountUp
            start={0}
            end={4.8}
            duration={3} // 2.5 সেকেন্ডে সম্পন্ন হবে
            decimals={1} // দশমিক দেখানোর জন্য
            suffix="+"
            className="text-4xl font-bold text-[#22d3ee]"
          />
          <p className="text-gray-600">Quality of recruitment and staffing.</p>
        </div>

        {/* Employee Training */}
        <div className="space-y-2">
          <h3 className=" md:text-xl font-bold mb-2 ">
            <i class="fa-solid fa-users-gear text-lg   p-2 text-white bg-cyan-400 rounded-full mr-1"></i>
            Employee Training
          </h3>
          <CountUp
            start={0}
            end={72000}
            duration={4} // 3 সেকেন্ডে সম্পন্ন হবে
            separator="," // কমা দিয়ে আলাদা করা
            suffix="K"
            className="text-4xl font-bold text-[#22d3ee]"
          />
          <p className="text-gray-600">Number of staff trainings</p>
        </div>

        {/* Performance Management */}
        <div className="space-y-2">
          <h3 className=" md:text-xl font-bold mb-2 ">
            <i class="fa-solid fa-address-card  text-lg   p-2 text-white bg-cyan-400 rounded-full mr-1"></i>
            Performance Management
          </h3>
          <CountUp
            start={0}
            end={12}
            duration={3}
            suffix="M"
            className="text-4xl font-bold text-[#22d3ee]"
          />
          <p className="text-gray-600">Employee performance management.</p>
        </div>
      </div>
    </div>
  );
};

export default Statistical;
