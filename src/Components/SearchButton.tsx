import React from "react";
import Image from "next/image";

const SearchButton = ({ otherClass }: { otherClass: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying-glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchButton;
