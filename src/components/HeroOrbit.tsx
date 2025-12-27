import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
}: PropsWithChildren<{ size: number }>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className="border border-red-500 size-[800px]"
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div className="border border-red-500 inline-flex animate-spin [animation-duration:5s]">
          {children}
        </div>
      </div>
    </div>
  );
};
