import { getLastArticles, getLatestArticle } from "../../lib/articles";
import ArticleTile from "../../components/article";
import Image from "next/image";
import SineWaves from "../../components/sineWave";
import HoverTile from "../../components/hoverTile";
import Link from "next/link";
import DislpayTile from "../../components/DisplayTile";

const Home = () => {
  const articles = getLatestArticle();

  return (
    <>
      <section className="relative w-full mt-40">
        <div className="absolute inset-0 z-10 flex items-center justify-center ">
          <Image className="border-4 border-amber-700" src="/profilePicture.jpg" alt="Profile Picture" width={450} height={450} />
        </div>
        <SineWaves />
      </section>

			{/* Section for About Myself */}
			<DislpayTile title="About Myself">
				<p>
					My name is Vincent Berger. I'm a 21-year-old Business Informatics student living in Halle (Saale), Germany.
					<br />
					I genuinely enjoy programming — from conceptualizing to implementing and analyzing. Currently, I'm developing a small game for the Playdate console in C!
				</p>
				<p>
					I'm passionate about embedded software, web development, and game design.
					<br />
					I love building things that are both functional and fun!
				</p>
				<p>
					<b>Fun fact:</b> I hold a 2nd Dan black belt in Taekwondo — discipline and focus are in my DNA.
				</p>
			</DislpayTile>

			{/* Section for Career */}
			<DislpayTile title="Career">
				<HoverTile>
					<Link href="https://www.hs-merseburg.de/studium/studiengaenge/wirtschaftsinformatik/">
						<div className="flex flex-row justify-between mb-4">
							<h2 className="text-xl font-semibold mb-2">
								Bachelor's in Business Informatics — Hochschule Merseburg
							</h2>
							<h2 className="text-sm text-right opacity-70">2023 – Present</h2>
						</div>
						<ul className="list-disc list-inside ml-4 space-y-1 text-sm text-stone-300">
							<li>Focus on business and computer science</li>
							<li>Dual program in cooperation with <b>Mitteldeutsche Netzgesellschaft (E.ON Group)</b></li>
							<li>Hands-on experience through continuous employment during studies</li>
						</ul>
					</Link>
				</HoverTile>

				<HoverTile>
					<Link href="https://www.pharmazie.uni-halle.de/?lang=en">
						<div className="flex flex-row justify-between mb-4">
							<h2 className="text-xl font-semibold mb-2">
								Pharmacy Studies — Martin Luther University Halle-Wittenberg
							</h2>
							<h2 className="text-sm text-right opacity-70">2022 – 2023</h2>
						</div>
						<ul className="list-disc list-inside ml-4 space-y-1 text-sm text-stone-300">
							<li>Studied Pharmaceutical Sciences for one year</li>
							<li>Developed foundational scientific and analytical skills</li>
							<li>Decided to shift towards a more technical career path</li>
						</ul>
					</Link>
				</HoverTile>

				<HoverTile>
					<Link href="https://www.igs-halle.de/front_content.php">
						<div className="flex flex-row justify-between mb-4">
							<h2 className="text-xl text-left font-semibold mb-2">
								High School Diploma — IGS.Halle Am Steintor
							</h2>
							<h2 className="text-sm text-right opacity-70">2022</h2>
						</div>
						<ul className="list-disc list-inside ml-4 space-y-1 text-sm text-stone-300">
							<li>Graduated with the Abitur</li>
							<li>Final grade: 1.8</li>
							<li>Member of <b>Schülerfirma SMdigs</b> (student company)</li>
						</ul>
					</Link>
				</HoverTile>

				<HoverTile>
					<a href="/documents/Vincent_Berger_CV.pdf" download >
						<p className="text-center">
							Download my CV!
						</p>
					</a>
				</HoverTile>
			</DislpayTile>

			{/* Section for Knowledge */}
			<DislpayTile title="Knowledge">
				<p>Test</p>
			</DislpayTile>

			{/* Section for Newest Article */}
			<DislpayTile title="Newest Article">
				{articles !== null &&
					<ArticleTile {...articles} />
				}
			</DislpayTile>

			<div className="m-20"/>
    </>
  );
};

export default Home;
