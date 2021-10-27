import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ApiServices from '../services/ApiServices';

const Employee = () => {

    const params = useParams();

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        ApiServices.getMemberById(params.id).then((response) => {
            console.log(response.data);
            setEmployee(response.data);
        });
    }, []);

    return (
        <div>
            {employee.firstName}
        </div>
    );
};

export default Employee;