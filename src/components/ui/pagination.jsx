import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, pageCount, onPageChange }) {
	return (
		<div className="flex items-center justify-center gap-2 mt-4">
			<Button
				variant="outline"
				size="icon"
				disabled={currentPage === 0}
				onClick={() => onPageChange(currentPage - 1)}
			>
				<ChevronLeft className="w-4 h-4" />
			</Button>

			{Array.from({ length: pageCount }, (_, i) => (
				<Button
					key={i}
					variant={currentPage === i ? "default" : "outline"}
					onClick={() => onPageChange(i)}
					className="w-8 h-8"
				>
					{i + 1}
				</Button>
			))}

			<Button
				variant="outline"
				size="icon"
				disabled={currentPage === pageCount - 1}
				onClick={() => onPageChange(currentPage + 1)}
			>
				<ChevronRight className="w-4 h-4" />
			</Button>
		</div>
	);
}
