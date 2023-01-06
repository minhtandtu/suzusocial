import React, { useState, useEffect } from "react";
import { request, gql } from "graphql-request";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Bars2Icon } from "@heroicons/react/24/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Header = () => {
  const [data, setData] = useState([{ name: "", slug: "" }]);
  const { locale } = useRouter();
  const router = useRouter();

  useEffect(() => {
    const query = gql`
      query MyQuery($locale: Locale!) {
        navigations(locales: [$locale]) {
          name
          slug
          locale
        }
      }
    `;
    async function dataFetch() {
      const res = await request(
        "https://api-ap-northeast-1.hygraph.com/v2/clc47162f37wq01um739sf1lz/master",
        query,
        { locale }
      );

      setData(res.navigations);
    }
    dataFetch();
  }, [locale]);

  return (
    <div className="container fixed z-50 flex w-full items-center bg-transparent">
      <div className="mx-4 mt-1 flex h-[4.75rem] w-full rounded-3xl bg-white/30 p-2 md:mx-20 md:mt-6">
        <div
          className="mr-2 flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-2xl 
        rounded-br-none bg-gradient-to-br from-primary/30 to-secondary/30 px-4 backdrop-blur-xl"
        >
          <Bars2Icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex w-full items-center justify-between rounded-2xl rounded-bl-none bg-white/80 py-2 px-4 backdrop-blur-xl">
          <Image
            src="/image/logo.svg"
            alt="Picture of the author"
            width={70}
            height={70}
            className="h-auto w-auto"
          />
          <div className="hidden py-2 md:flex">
            {data.map((item) => (
              <Link
                href={`/${item.slug}`}
                key={item.slug}
                className="mx-1 whitespace-nowrap rounded-md 
                from-primary/50 to-secondary/50 px-4 py-2 font-semibold transition-all hover:bg-gradient-to-r "
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="rounded-lg  bg-gray-100/50  p-1">
            <div className=" flex h-[2.75rem] items-center justify-center">
              <Link
                className={classNames(
                  "rounded-lg p-3 ",
                  locale === "vi" ? "bg-white" : " "
                )}
                href={router.pathname}
                locale="vi"
              >
                VN
              </Link>
              <Link
                className={classNames(
                  " rounded  p-3",
                  locale === "en" ? "bg-white" : " "
                )}
                href={router.pathname}
                locale="en"
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
