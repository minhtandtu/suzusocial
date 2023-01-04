import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import useTrans from "../hooks/useTrans";
export const MiniHero = (prop) => {
  const { pageTitle } = prop;
  const { pathname } = useRouter();
  const trans = useTrans();

  const pathParts = pathname.split("/").filter((part) => part);
  return (
    <div className="bg-purple-200  flex flex-col items-center py-4">
      <p className="text-6xl text-white mb-5">{trans.home.content}</p>
      <Breadcrumbs />
    </div>
  );
};
