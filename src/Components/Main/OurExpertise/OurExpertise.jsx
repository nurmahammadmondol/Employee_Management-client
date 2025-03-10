import React from 'react';

const OurExpertise = () => {
  return (
    <section class="  py-16 px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Our Expertise</h2>
        <p class="text-lg mb-8">Complete HR Suite: Our Services Explained</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-cyan-50 p-6 rounded-lg text-center hover:shadow-lg">
            <div class="text-blue-400 text-4xl mb-4">💼</div>
            <h3 class="font-semibold text-xl mb-2">Executive Coaching</h3>
            <p class="text-sm">
              Professional coaching for leadership and growth.
            </p>
          </div>
          <div class="bg-cyan-50 p-6 rounded-lg text-center hover:shadow-lg">
            <div class="text-blue-400 text-4xl mb-4">🔗</div>
            <h3 class="font-semibold text-xl mb-2">Inclusion Programs</h3>
            <p class="text-sm">Building inclusive and diverse workplaces.</p>
          </div>
          <div class="bg-cyan-50 p-6 rounded-lg text-center hover:shadow-lg">
            <div class="text-blue-400 text-4xl mb-4">📊</div>
            <h3 class="font-semibold text-xl mb-2">Employee Surveys</h3>
            <p class="text-sm">
              Analyzing employee feedback for better outcomes.
            </p>
          </div>
          <div class="bg-cyan-50 p-6 rounded-lg text-center hover:shadow-lg">
            <div class="text-blue-400 text-4xl mb-4">👥</div>
            <h3 class="font-semibold text-xl mb-2">Employee Relations</h3>
            <p class="text-sm">Strengthening bonds within your workforce.</p>
          </div>
          <div class="bg-cyan-50 p-6 rounded-lg text-center hover:shadow-lg">
            <div class="text-blue-400 text-4xl mb-4">📈</div>
            <h3 class="font-semibold text-xl mb-2">Performance Management</h3>
            <p class="text-sm">Enhancing productivity and performance.</p>
          </div>
          <div class="bg-cyan-50 p-6 rounded-lg text-center hover:shadow-lg">
            <div class="text-blue-400 text-4xl mb-4">🔍</div>
            <h3 class="font-semibold text-xl mb-2">Talent Acquisition</h3>
            <p class="text-sm">Hiring the best talents for your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
