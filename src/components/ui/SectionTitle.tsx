import React from "react";

const SectionTitle = ({
  title,
  underline,
}: {
  title: string;
  underline?: boolean;
}) => {
  return (
    <React.Fragment>
      <h1 className="text-4xl font-semibold text-center text-gray-900">
        {title}
      </h1>
      {!underline && (
        <div className="h-[3px] bg-black w-10 my-5 lg:my-10 md:my-6 mx-auto"></div>
      )}
    </React.Fragment>
  );
};

export default SectionTitle;
