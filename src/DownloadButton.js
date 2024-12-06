import React from "react";
import { toPng } from "html-to-image"; // Library to convert DOM to PNG
import { useNavigate } from "react-router-dom";

const DownloadButton = ({ reactFlowRef }) => {
  const navigate = useNavigate();

  const handleDownload = async () => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      alert("You need to sign up before downloading the pipeline.");
      navigate("/signup");
      return;
    }

    try {
      if (reactFlowRef?.current) {
        // Temporarily hide minimap and controls
        const minimap = reactFlowRef.current.querySelector(".react-flow__minimap");
        const controls = reactFlowRef.current.querySelector(".react-flow__controls");
        
        if (minimap) minimap.style.display = "none";
        if (controls) controls.style.display = "none";

        // Generate PNG
        const dataUrl = await toPng(reactFlowRef.current);

        // Restore minimap and controls
        if (minimap) minimap.style.display = "";
        if (controls) controls.style.display = "";

        // Trigger download
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "pipeline-structure.png";
        link.click();
      } else {
        alert("Pipeline structure not found.");
      }
    } catch (error) {
      console.error("Error while downloading the pipeline:", error);
      alert("An error occurred while trying to download the pipeline.");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600"
    >
      Download Pipeline
    </button>
  );
};

export default DownloadButton;
