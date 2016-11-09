import React, {Component, PropTypes} from 'react';

const Create = (props) => {

    return (
        <form>
            <textarea
                name="textarea"
                rows="10"
                placeholder="Apple"
                minLength="1"
                onChange={props.onTextAreaChange}/>
            <button
                onClick={props.onSubmitForm}
                type="submit">
                Save
            </button>
        </form>
    );

};

export default Create;
