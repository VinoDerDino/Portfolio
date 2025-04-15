"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  path: string;
};

const ProjectTile = ({ path }: Props) => {
  const imagePath = `/projects/${path}/assets/thumbnail.png`;

  const [hideImage, setHideImage] = useState(false);

  return (
    <Link
      href={`/projects/${path}`}
      className="border border-stone-500 w-44 h-44 flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-105"
    >
      {!hideImage && (
        <img
          className="absolute opacity-25"
          src={imagePath}
          alt={`${path} thumbnail`}
          onError={() => setHideImage(true)}
        />
      )}
      <span className="text-amber-700 font-bold">
        {path}
      </span>
    </Link>
  );
};

export default ProjectTile;
