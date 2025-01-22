import React from 'react';

const SectionTitle = ({ subTitle, mainTitle }) => {
  return (
    <div className="text-center mb-16">
      <p class="roboto-font text-sm font-semibold tracking-widest  mb-1 uppercase underline">
        {subTitle}
      </p>
      <h3 className="text-3xl md:text-5xl font-bold">{mainTitle}</h3>
    </div>
  );
};

export default SectionTitle;
