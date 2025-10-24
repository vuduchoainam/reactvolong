import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { createNewUser } from "@/assets/services/userServices";

const ModalAddNew = ({ children }) => {
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [showDialog, setShowDialog] = useState(false);

	useEffect(() => {}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { name, job };

		const res = await createNewUser(data);
		if (res && res.id) {
			alert("Create new user success");
			setShowDialog(false);
			setName("");
			setJob("");
		} else {
			alert("Create new user failed");
		}
	};

	return (
		<Dialog open={showDialog} onOpenChange={setShowDialog}>
			<DialogTrigger asChild>
				{children || <Button variant="outline">Open Dialog</Button>}
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<form onSubmit={handleSubmit}>
					<DialogHeader>
						<DialogTitle>Add new user</DialogTitle>
						<DialogDescription />
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="name-1">Name</Label>
							<Input
								id="name-1"
								name="name"
								onChange={(e) =>
									setName(e.target.value)
								}
							/>
						</div>
						<div className="grid gap-3">
							<Label htmlFor="job-1">Job</Label>
							<Input
								id="job-1"
								name="job"
								onChange={(e) =>
									setJob(e.target.value)
								}
							/>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button type="submit">Create</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
export default ModalAddNew;
