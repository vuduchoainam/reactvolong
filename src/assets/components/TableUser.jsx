import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../services/userServices";
import Pagination from "@/components/ui/pagination";

const TableUser = () => {
	const [listUser, setListUser] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		getUsers(1);
	}, []);

	const getUsers = async (page = 1, PER_PAGE = 5) => {
		const res = await fetchAllUsers(page, PER_PAGE);
		if (res) {
			setListUser(res.data || []);
			setTotalPages(res.total_pages || 1);
		}
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
		getUsers(page + 1);
	};

	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>ID</TableHead>
						<TableHead>First Name</TableHead>
						<TableHead>Last Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Avatar</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{listUser.map((user) => (
						<TableRow key={user.id}>
							<TableCell className="font-medium">
								{user.id}
							</TableCell>
							<TableCell>{user.first_name}</TableCell>
							<TableCell>{user.last_name}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>
								<img
									src={user.avatar}
									alt={`${user.first_name} ${user.last_name}`}
									className="w-12 h-12 rounded-full"
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<Pagination
				currentPage={currentPage}
				pageCount={totalPages}
				onPageChange={handlePageChange}
			/>
		</>
	);
};

export default TableUser;
