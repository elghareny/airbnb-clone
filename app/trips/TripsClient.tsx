/** @format */
"use client";

import {useRouter} from "next/navigation";
import Container from "../components/Container";
import Heading from "../components/Heading";
import {TSafeReservation, TSafeUser} from "../types";
import {useCallback, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

interface IProps {
	reservations: TSafeReservation[];
	currentUser?: TSafeUser | null;
}

const TripsClient: React.FC<IProps> = ({reservations, currentUser}) => {
	const router = useRouter();

	const [deletingId, setDeletingId] = useState("");

	const onCancel = useCallback(
		(id: string) => {
			setDeletingId(id);
			axios
				.delete(`/api/reservations/${id}`)
				.then(() => {
					toast.success("Reservation cancelled");
					router.refresh();
				})
				.catch((error) => {
					toast.error(error?.response?.data?.error);
				})
				.finally(() => {
					setDeletingId("");
				});
		},
		[router],
	);

	return (
		<Container>
			<Heading
				title='Trips'
				subtitle="Where you've been and where you're going"
			/>
			<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
				{reservations.map((reservation) => (
					<ListingCard
						key={reservation.id}
						data={reservation.listing}
						reservation={reservation}
						currentUser={currentUser}
						onAction={onCancel}
						actionId={reservation.id}
						actionLabel='Cancel reservation'
						disabled={deletingId === reservation.id}
					/>
				))}
			</div>
		</Container>
	);
};

export default TripsClient;
