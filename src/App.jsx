import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";


export default function App() {
  return (
        <>
            <h1>CV Application</h1>
            <form action="" method="post" id="cvForm">
                <GeneralInfo />
                <Education />
                <Experience />
                <button>Submit</button>
            </form>
        </>
    );
}
