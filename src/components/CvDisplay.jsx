import "../styles/CvDisplay.css";

export default function CvDisplay({userData}) {
    return (
        <div id="cvDisplay">
            <div id="displayGeneral">
                <h2>{userData.name}</h2>
                <p>{userData.email}</p>
                <p>{userData.phone}</p>
            </div>
            <div id="displayEducation">
                <h2>Education</h2>
                <h3>{userData.study}</h3>
                <h4>{userData.school}</h4>
                <p>{userData.startDateEdu} - {userData.endDateEdu}</p>
            </div>
            <div id="displayExperience">
                <h2>Practical Experience</h2>
                <h3>{userData.jobTitle}</h3>
                <h4>{userData.company}</h4>
                <p>{userData.responsibility}</p>
                <p>{userData.startDateJob} - {userData.endDateJob}</p>
            </div>
        </div>
    );
}