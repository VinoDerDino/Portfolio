import DisplayTile from "@/components/DisplayTile";
import ProjectTile from "@/components/ProjectTile";
import { getProjectFolders } from "@/lib/getProjects";

export default function ProjectsIndex() {
	const folders = getProjectFolders();

	return (
		<main className="mt-24 px-8">
			<DisplayTile title="My projects">
				<div className="flex flex-wrap gap-4 justify-center items-center">
					{folders.map(folder => (
						<ProjectTile key={folder} path={folder} />
					))}
				</div>
			</DisplayTile>
		</main>
	);
}