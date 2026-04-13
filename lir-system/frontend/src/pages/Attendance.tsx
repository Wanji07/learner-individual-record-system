import { useState } from 'react'

export default function Attendance() {

    const [month, setMonth] = useState(4);
    const [year, setYear] = useState(2026);

    const absentDays = [10, 11, 20];

    return(
        <>
            <div id="attendance-container">

            </div>
        </>
    )
}