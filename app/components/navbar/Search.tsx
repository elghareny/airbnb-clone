/** @format */
"use client";
import React from "react";
import {BiSearch} from "react-icons/bi";

const Search = () => {
	return (
		<div className='border-[1px] w-full md:w-auto py-1 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
			<div className='flex items-center justify-between'>
				<div className='text-sm font-semibold px-4 lg:px-6'> AnyWhere</div>
				<div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
					AnyWeek
				</div>
				<div className='text-sm pl-4 lg:pl-6 pr-2 text-gray-600 flex flex-row items-center gap-2 lg:gap-3'>
					<div className='hidden sm:block'>Add Guests</div>{" "}
					<div className='p-1 bg-rose-500 rounded-full text-white'>
						<BiSearch size={16} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
