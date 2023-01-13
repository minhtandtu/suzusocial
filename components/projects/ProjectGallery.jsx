// Project Gallery With Pagination
import React from "react";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { ItemGridWithPagin } from "../../components/common/ItemGridWithPagin";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const ProjectGallery = ({ projects, categories, defaultNumCard }) => {
  return (
    <div>
      <Tab.Group>
        <div className="flex justify-center">
          <Tab.List>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={classNames(
                    selected ? "bg-blue-500 text-white" : "bg-white text-black",
                    "mr-4 mb-8 rounded-sm px-4 py-2 "
                  )}
                >
                  All
                </button>
              )}
            </Tab>
            {categories.map((category, index) => (
              <Tab as={Fragment} key={index}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      selected
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black",
                      "mr-4 rounded-sm px-4 py-2 "
                    )}
                  >
                    {category.node.name}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="w-full">
              <ItemGridWithPagin
                projects={projects}
                defaultNumCard={defaultNumCard}
              />
            </div>
          </Tab.Panel>
          {categories.map((item, index) => (
            <Tab.Panel key={index}>
              <ItemGridWithPagin
                projects={item.node.projects}
                defaultNumCard={defaultNumCard}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
