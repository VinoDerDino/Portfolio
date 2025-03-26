import React, { FC } from "react";
import Link from "next/link";
import HoverTile from "./hoverTile";

type Props = {
	id: string;
	date: string;
	category: string;
	title: string;
};

const ArticleTile: FC<Props> = ({id, date, category, title }) => {
	return (
		<Link href={`/${id}`} className="text-neutral-200 group">
			<HoverTile>
				<div className="flex flex-row justify-between mb-4 opacity-70">
					<h3 className="text-left text-[12px]">{date}</h3>
					<h3 className="text-right text-[12px]">{category}</h3>
				</div>
				<span>{title}</span>
			</HoverTile>
		</Link>
	);
};

export default ArticleTile;
