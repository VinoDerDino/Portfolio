"use client";

import DisplayTile from "@/components/DisplayTile";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectPage() {
	const { projectId } = useParams();
	const [htmlContent, setHtmlContent] = useState("");
	const [subPage, setSubPage] = useState("index.html");

	useEffect(() => {
		if (projectId) {
			fetch(`/projects/${projectId}/${subPage}`)
				.then((res) => res.text())
				.then((html) => setHtmlContent(html));
		}
	}, [projectId, subPage]);

	return (
		<div className="mt-24 px-8">
      <DisplayTile title={`Projekt: ${projectId}`}>
        <nav className="mb-6 space-x-4">
          <button
            onClick={() => setSubPage("index.html")}
            className="text-amber-500 underline hover:text-amber-300"
          >
            Hauptseite
          </button>
          {/* Weitere Unterseiten */}
        </nav>
      </DisplayTile>
      <DisplayTile>
			  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </DisplayTile>
		</div>
	);
}
