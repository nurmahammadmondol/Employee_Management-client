import React from 'react';

const SectionTitle = ({ subTitle, mainTitle }) => {
  return (
    <div className="text-center mb-16">
      <p class="roboto-font text-xs font-semibold tracking-widest  mb-1 uppercase underline">
        {subTitle}
      </p>
      <h3 className="text-4xl font-bold">{mainTitle}</h3>
    </div>
  );
};

export default SectionTitle;
