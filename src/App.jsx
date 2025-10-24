import "./assets/css/App.css";
import Header from "./assets/components/Header";
import TableUser from "./assets/components/TableUser";
import { Button } from "@/components/ui/button";
import AddNew from "./assets/components/Modal/AddNew";

export default function App() {
	return (
		<div className="app-container">
			<Header />
			<main>
				<div className="table-wrapper">
					<div className="text-right">
						<AddNew>
							<Button variant="outline" className="mb-4">
								Add New User
							</Button>
						</AddNew>
					</div>
					<TableUser />
				</div>
			</main>
		</div>
	);
}
