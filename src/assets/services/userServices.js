import axios from "axios";

const fetchAllUsers = () => {
	return axios.get("https://reqres.in/api/users?page=0&per_page=10", {
		headers: {
			"x-api-key": "reqres-free-v1",
		},
	});
};

export { fetchAllUsers };
