import axios from "axios";

const TEAMS_REST_API_URL = 'http://localhost:8080/api/teams';
const MEMBERS_REST_API_URL = 'http://localhost:8080/api/members';
const ORGANIZATIONS_REST_API_URL = 'http://localhost:8080/api/organizations';

const getTeams = () => {
    axios.get(TEAMS_REST_API_URL + "/all");
}

const getMembers = () => {
    axios.get(MEMBERS_REST_API_URL + "/all");
}

const getOrganizations = () => {
    axios.get(ORGANIZATIONS_REST_API_URL = "/all");
}