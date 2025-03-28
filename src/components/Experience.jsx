export default function Experience() {

    return (
        <fieldset id="experience">
            <legend>Practical Experience</legend>
            <label>Company name:
                <input type="text" id="company" name="company"/>
            </label>
            <label>Job title: 
                <input type="text" id="jobTitle" name="jobTitle"/>
            </label>
            <label>Main responsibilities: 
                <textarea id="responsibilty" name="responsibility"/>
            </label>
            <label>Start date: 
                <input type="date" id="startDateJob" name="startDateJob"/>
            </label>
            <label>End date: 
                <input type="date" id="endDateJob" name="endDateJob"/>
            </label>
        </fieldset>
    );
}