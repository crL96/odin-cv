export default function GeneralInfo() {

    return (
        <fieldset id="generalInfo">
            <legend>General Info</legend>
            <label>Name:
                <input type="text" name="name" id="name"/>
            </label>
            <label>Email: 
                <input type="email" name="email" id="email" />
            </label>
            <label>Phone: 
                <input type="tel" id="phone" name="phone"/>
            </label>
        </fieldset>
    );
}