import { ReactNode } from "react"

type Props = {
  title?: string;
  children: ReactNode;
}

const DislpayTile = ({ title, children }: Props) => {
  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-40 flex flex-col">
				<div className="flex flex-col gap-8 items-center">
					{title && 
            (<h1 className="font-extrabold text-4xl tracking-wide text-center text-amber-700">
              { title }
            </h1>) 
          }
					<div className="border-2 border-stone-500 rounded-md min-w-full p-8 space-y-4 text-base leading-relaxed text-stone-300">
            { children }
          </div>
      </div>
    </section>
  )
}

export default DislpayTile