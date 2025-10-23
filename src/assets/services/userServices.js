import axios from "./axios-customize";

const fetchAllUsers = () => {
	return axios.get("/api/users?page=0&per_page=10");
};

export { fetchAllUsers };
