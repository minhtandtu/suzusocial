import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function Breadcrumbs() {
  const { pathname } = useRouter();
  const pathParts = pathname.split("/").filter((part) => part);

  return (
    <div className="text-purple-800 ">
      <Link href="/" className="hover:text-purple-400 font-semibold">
        Home
      </Link>
      {pathParts.map((part, index) => {
        const to = `/${pathParts.slice(0, index + 1).join("/")}`;
        return (
          <React.Fragment key={to}>
            <span className="text-gray-500">
              {index < pathParts.length && " / "}
            </span>
            <Link
              className={classNames(
                "hover:text-purple-400",
                index == pathParts.length - 1
                  ? "pointer-events-none text-gray-500"
                  : ""
              )}
              href={to}
            >
              {part}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}
