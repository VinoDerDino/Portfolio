import { ReactNode } from 'react';

interface HoverTileProps {
  children: ReactNode;
}

const HoverTile = ({ children }: HoverTileProps) => {
  return (
    <div className="group relative border border-dashed rounded-sm p-2 overflow-hidden transition-border duration-300">
				<span className="absolute inset-0 bg-amber-700 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100 opacity-70"></span>
        <div className="relative z-10">
          {children}
        </div>
    </div>
  )
}

export default HoverTile