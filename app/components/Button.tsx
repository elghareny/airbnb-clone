/** @format */
"use client";
import React from "react";
import {IconType} from "react-icons";

interface IProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: IconType;
	type?: "submit" | "reset" | "button";
	formId?: string;
}
const Button: React.FC<IProps> = ({
	label,
	onClick,
	disabled,
	outline,
	small,
	icon: Icon,
	type = "button",
	formId,
}) => {
	return (
		<button
			form={formId}
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
        ${
					outline
						? "bg-white border-black text-black"
						: "bg-rose-500 border-rose-500 text-white"
				}
        ${
					small
						? "py-1 text-sm font-light border-[1px]"
						: "py-2 text-base font-semibold border-2"
				}`}>
			{Icon && (
				<Icon
					size={24}
					className='absolute left-4 top-2'
				/>
			)}
			{label}
		</button>
	);
};

export default Button;
