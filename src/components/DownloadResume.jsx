import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="https://docs.google.com/document/d/1sk9U8iC_kfdREnKyMC7iOOhasd_fsN28tMEY-rWsxdU/export?format=pdf" download="DuaaTariq_Resume.pdf" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume