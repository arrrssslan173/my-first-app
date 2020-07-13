import React from "react";

function AccountSummary() {
    return(
        <div className='summary-container'>
            <span id='green'><h3>INCOME<br />$1000.00</h3></span> <hr/>
            <span id='red'><h3>EXPENSE <br /> $200.00</h3></span>
        </div>
    );
}

export default AccountSummary;