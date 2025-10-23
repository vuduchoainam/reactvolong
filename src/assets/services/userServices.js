import axios from "./axios-customize";

const fetchAllUsers = (page, per_page) => {
	return axios.get(`/api/users?page=${page}&per_page=${per_page}`);
};

export { fetchAllUsers };
