import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvDisplay from "./components/CvDisplay";


export default function App() {
  const [hiddenStatus, setHiddenStatus] = useState(false);
  const [userData, setUserData] = useState({});

  function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      setUserData(Object.fromEntries(formData));
      setHiddenStatus(true);
  }

  function handleEdit() {
    setHiddenStatus(false);
  }


  return (
        <>
            <form action="" method="post" id="cvForm" onSubmit={handleSubmit} hidden={hiddenStatus}>
                <GeneralInfo />
                <Education />
                <Experience />
                <button>Submit</button>
            </form>
            {hiddenStatus && 
            <>
              <CvDisplay userData={userData}/>
              <button id="editBtn" type="button" onClick={handleEdit}>Edit</button>
            </>}
        </>
    );
}
