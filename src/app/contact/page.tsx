import Link from "next/link";
import { FC } from "react";

const ContactPage: FC = () => {
    return (
        <section className="mx-auto w-11/12 md:w-1/2 mt-40 flex flex-col">
				<div className="flex flex-col gap-8 items-center">
					<div className="border-2 border-stone-500 rounded-md min-w-full p-8 space-y-4 text-base leading-relaxed text-stone-300">
						<h1 className="font-bold text-xl mb-4">Links</h1>
                        <p>
                            <Link className="text-blue-500 font-bold hover:text-amber-700 transition duration-500" href="https://github.com/VinoDerDino">GitHub</Link>
                        </p>
                        <h1 className="font-bold text-xl pt-8 mb-4">E-Mail</h1>
                        <p>
                            <a className="text-blue-500 font-bold hover:underline hover:text-amber-700 transition duration-500" href="mailto:berger-vinc@web.de">Send a Mail</a>
                        </p>
					</div>
				</div> 
			</section>
    );
}

export default ContactPage;
