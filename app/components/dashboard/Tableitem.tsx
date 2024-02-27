'use client';

import Link from "next/link";

const Tableitem = ({sl,item}) => {
  return (
    <td className="px-6 py-4 text-center">
      <Link href="" key={sl}>
        {item}
      </Link>
    </td>
  );
};

export default Tableitem;
