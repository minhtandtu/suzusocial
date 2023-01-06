import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
export const MiniHero = (prop) => {
  const { pageTitle } = prop;
  const { pathname } = useRouter();
  console.log(pageTitle);
  const pathParts = pathname.split("/").filter((part) => part);
  return (
    <div className="flex  flex-col items-center bg-purple-200 py-4">
      <p className="bdd mb-5 text-6xl text-white">{pageTitle}</p>
      <Breadcrumbs />
    </div>
  );
};
