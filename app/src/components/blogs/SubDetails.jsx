import React from "react";

function SubDetails({ subDetails }) {
  return (
    <React.Fragment>
      <h2 className="font-bold font-20 mt-2 text-brown">{subDetails.heading}</h2>
      {subDetails.paragraph.map((subParagraghDetails, index) => {
        return <p key={index} className="font-regular font-16 text-brown">{subParagraghDetails}</p>;
      })}
    </React.Fragment>
  );
}

export default SubDetails;
