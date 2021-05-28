import React from 'react';
import moment from 'moment'
function CurrentDate(props) {
    return (
        <div className={"date"}>
            {moment().format("[Today, ] Do MMMM YYYY")}
        </div>
    );
}

export default CurrentDate;