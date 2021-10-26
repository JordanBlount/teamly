import { useEffect } from 'react';
import Typography from '@mui/material/Typography';

import Heading from '../components/Heading';

const Employee = () => {

    useEffect(() => {
        // Make sure that the data is displayed here!
    }, []);

    return (
        <div className="page employee">
            <Heading name="Employees" />
            <p>Test</p>
        </div>
    );
};

export default Employee;