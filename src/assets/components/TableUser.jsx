import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import { fetchAllUsers } from "../services/userServices";

const TableUser = () => {
	const [listUser, setListUser] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		let res = await fetchAllUsers();
		if (res && res.data) {
			setListUser(res.data);
		}
	};
	return (
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
				{listUser &&
					listUser.length > 0 &&
					listUser.map((user, index) => {
						return (
							<TableRow key={`usser-${index}`}>
								<TableCell className="font-medium">
									{user.id}
								</TableCell>
								<TableCell>
									{user.first_name}
								</TableCell>
								<TableCell>
									{user.last_name}
								</TableCell>
								<TableCell>{user.email}</TableCell>
								<TableCell>
									<img
										src={user.avatar}
										alt={`${user.first_name} ${user.last_name}`}
										className="w-15 h-15 rounded-full"
									/>
								</TableCell>
							</TableRow>
						);
					})}
			</TableBody>
		</Table>
	);
};

export default TableUser;
