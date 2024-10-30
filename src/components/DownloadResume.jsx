import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="https://docs.google.com/document/d/1ksCi1dG5p63SSE9HrhREOoUJ50CIuxeMWdFVRfmRpyU/export?format=pdf
    ">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume