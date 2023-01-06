import React from "react";
import Image from "next/image";
import useTrans from "../hooks/useTrans";
export const Footer = () => {
  const trans = useTrans();
  return (
    <div className="bg-gray-50">
      <div className="bd w-[90%] mx-auto max-w-[78.75rem] flex pt-24 pb-12 bd justify-between">
        <div className="w-[25.25rem] bd h-96">
          <Image
            src="/image/logosuzugroup.svg"
            alt="Picture of the author"
            width={88}
            height={70}
          />
          <div className="">
            {trans.footer.contact.map((item, index) => (
              <p
                key={index}
                className="mt-4 text-base font-normal text-gray-500"
              >
                {item.title} : {item.content}
              </p>
            ))}
          </div>
        </div>
        <div className="w-[11.875rem] bd h-96">
          <h3 className="text-sm font-semibold text-gray-400">SuZu Group</h3>
          <ul role="list" className="mt-4 space-y-4">
            {trans.footer.navigation.suzugroup.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[11.875rem] bd h-96 ">
          <h3 className="text-sm font-semibold text-gray-400">
            Liên kết nhanh
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {trans.footer.navigation.lienketnhanh.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[11.875rem] bd h-96">
          <h3 className="text-sm font-semibold text-gray-400">
            Đội ngũ của chúng tôi
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {trans.footer.navigation.doingucuachungtoi.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* LINK */}
        </div>
        <div className="w-[11.875rem] bd h-96">
          <h3 className="text-sm font-semibold text-gray-400">
            Liên kết với chúng tôi
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {trans.footer.navigation.doingucuachungtoi.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* LINK */}
        </div>
      </div>
      <div className="h-[5.5rem] bg-purple-300 flex justify-center items-center">
        <p>{trans.footer.copyright}</p>
      </div>
    </div>
  );
};
