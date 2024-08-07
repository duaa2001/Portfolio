import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="https://drive.google.com/uc?export=download&id=19rZf6-JZ7S2CLdn3dNOyB88izfNec8JI
    " download="DuaaTariq_Resume.pdf" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume