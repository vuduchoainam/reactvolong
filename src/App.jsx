import "./assets/css/App.css";
import Header from "./assets/components/Header";
import TableUser from "./assets/components/TableUser";

export default function App() {
	return (
		<div className="app-container">
			<Header />
			<main>
				<div className="table-wrapper">
					<TableUser />
				</div>
			</main>
		</div>
	);
}
