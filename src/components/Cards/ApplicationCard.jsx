import React from "react";
import axiosInstance from "../../instence/axiosinstance";

const ApplicationCard = ({ applicant }) => {
  const { userId, position, experience, education, applyDate, resume } =
    applicant;
  const { name, email, phone } = userId || {};

  const downloadCV = async () => {
    try {
      const response = await axiosInstance.get(`/assets/${resume}`, {
        responseType: 'blob', // Ensure the response is of type blob
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", resume);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file", error);
    }
  };

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <div className="flex items-center">
        <div className="bg-gray-300 rounded-full w-12 h-12 mr-4"></div>
        <div>
          <h3 className="text-lg font-bold">{name || "N/A"}</h3>
          <p className="text-sm text-gray-600">{email || "N/A"}</p>
          <p className="text-sm text-gray-600">{phone || "N/A"}</p>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm">Experience: {experience} Years</p>
        <p className="text-sm">Education: {education}</p>
        <p className="text-sm">
          Applied: {new Date(applyDate).toLocaleString()}
        </p>
      </div>
      <div className="mt-4">
        <button className="text-blue-500" onClick={downloadCV}>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default ApplicationCard;
