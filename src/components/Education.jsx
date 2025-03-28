export default function Education() {

    return (
        <fieldset id="education">
            <legend>Education</legend>
            <label>School:
                <input type="text" name="school" id="school"/>
            </label>
            <label>Title of study: 
                <input type="text" id="study" name="study"/>
            </label>
            <label>Start date: 
                <input type="date" id="startDateEdu" name="startDateEdu"/>
            </label>
            <label>End date: 
                <input type="date" id="endDateEdu" name="endDateEdu"/>
            </label>
        </fieldset>
    );
}