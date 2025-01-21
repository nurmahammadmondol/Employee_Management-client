import React from 'react';
import SectionTitle from '../Title/SectionTitle';

const OurProcesses = () => {
  return (
    <div className="bg-gray-50 h-full lg:h-[500px] p-10">
      <SectionTitle
        subTitle="Delivering the Highest Standards"
        mainTitle="Our Processes"
      ></SectionTitle>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  md:gap-10 lg:gap-14">
        <div className="p-10 bg-white relative ">
          <h4 className="text-xl font-semibold mb-3">Initial Consultation</h4>
          <p className="text-gray-500">
            We begin with a consultation to understand your specific business
            needs and HR challenges.
          </p>

          <div className="bg-cyan-400 py-4 px-6 rounded-full absolute -top-5 -right-5">
            <h5 className="text-white font-bold text-xl">1</h5>
          </div>
        </div>

        <div className="p-10 bg-white relative ">
          <h4 className="text-xl font-semibold mb-3">
            Customized Strategy Development
          </h4>
          <p className="text-gray-500">
            Team develops a tailored HR strategy that aligns with your goals and
            addresses your requirements.
          </p>

          <div className="bg-cyan-400 py-4 px-6 rounded-full absolute -top-5 -right-5">
            <h5 className="text-white font-bold text-xl">2</h5>
          </div>
        </div>

        <div className="p-10 bg-white relative ">
          <h4 className="text-xl font-semibold mb-3">
            Implementation & Support
          </h4>
          <p className="text-gray-500">
            We implement the agreed-upon solutions and provide ongoing support
            to ensure their success and adaptability.
          </p>

          <div className="bg-cyan-400 py-4 px-6 rounded-full absolute -top-5 -right-5">
            <h5 className="text-white font-bold text-xl">3</h5>
          </div>
        </div>

        <div className="p-10 bg-white relative ">
          <h4 className="text-xl font-semibold mb-3">Continuous Improvement</h4>
          <p className="text-gray-500">
            We continually assess and refine our strategies to ensure they
            remain effective and aligned with your evolving needs.
          </p>

          <div className="bg-cyan-400 py-4 px-6 rounded-full absolute -top-5 -right-5">
            <h5 className="text-white font-bold text-xl">4</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcesses;
