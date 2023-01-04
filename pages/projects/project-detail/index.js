import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Breadcrumbs } from "../../../components/common/Breadcrumbs";
const MiniHero = () => {
  const { pathname } = useRouter();
  console.log("pathname: ", pathname);
  const pathParts = pathname.split("/").filter((part) => part);
  console.log("pathParts: ", pathParts);

  return (
    <div className="bg-purple-200  flex flex-col items-center py-40">
      <Breadcrumbs />
    </div>
  );
};
export default MiniHero;
