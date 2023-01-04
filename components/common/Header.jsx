import React, { useState, useEffect } from "react";
import { request, gql } from "graphql-request";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
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
    <div className="fixed w-full container bd  bg-transparent flex items-center pt-6">
      <div className="w-[90%] max-w-[79.75rem] bd mx-auto h-[4.75rem] bg-white/20 rounded-3xl p-2">
        <div className="bg-white/70 rounded-xl flex justify-between items-center px-4">
          <Image
            src="/image/logo.svg"
            alt="Picture of the author"
            width={70}
            height={70}
          />
          <div className="flex">
            {data.map((item) => (
              <Link
                href={`/${item.slug}`}
                key={item.slug}
                className="font-semibold px-4 py-4 hover:bg-purple-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="bg-gray-400/50 p-2 rounded-md ">
            <Link
              className={classNames(
                " p-1 rounded",
                locale === "vi" ? "bg-white/70" : " "
              )}
              href={router.pathname}
              locale="vi"
            >
              VN
            </Link>
            <Link
              className={classNames(
                " p-1 rounded",
                locale === "en" ? "bg-white/70" : " "
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
  );
};
