import * as moment from 'moment';
import React from 'react';

const styles = {
    bold: {
        fontSize: 16
    }
};

const MomentTime = () => {
    const toDate = moment(new Date());
    // fromDate is a initial joining date
    const fromDate = moment(new Date('2016, 12, 05'));

    const years = toDate.diff(fromDate, 'year');
    fromDate.add(years, 'years');

    const months = toDate.diff(fromDate, 'months');
    fromDate.add(months, 'months');
    // To get Number of Days enable bellow line
    // const days = toDate.diff(fromDate, 'days');
    return (
        <span><b style={styles.bold}>{years}</b> Years
            <b style={styles.bold}> {months} </b> Months</span>
    )
};

export default MomentTime;