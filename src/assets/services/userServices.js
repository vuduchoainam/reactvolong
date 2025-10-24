import axios from "./axios-customize";

const fetchAllUsers = (page, per_page) => {
	return axios.get(`/api/users?page=${page}&per_page=${per_page}`);
};

const createNewUser = (data) => {
	return axios.post(`/api/users?name=${data.name}&job=${data.job}`);
};

export { fetchAllUsers, createNewUser };
