import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Heading from '../components/Heading'
import ApiServices from '../services/ApiServices';

const Team = (props) => {

    const params = useParams();

    const [team, setTeam] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        ApiServices.getTeamById(params.id).then((response) => {
            console.log(response.data);
            setTeam(response.data);
        });
        ApiServices.getMembersByTeamId(params.id).then((response) => {
            console.log(response.data);
            setMembers(response.data);
        });
    }, []);

    return (
        <div>
            <Heading name={team.teamDescription} />
        </div>
    );
};

export default Team;