import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useParams } from 'react';
import { useHistory } from 'react-router-dom';
import Heading from '../components/Heading';

const TeamForm = () => {

    const [formData, setFormData] = useState([]);

    return (
        <div className="page teamForm">
            <Heading name="New Team"/>
            <Paper>
                <Box p={3}>
                    
                </Box>
            </Paper>
        </div>
    );
};

export default TeamForm;