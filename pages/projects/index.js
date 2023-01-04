import React, { useState, useEffect } from "react";
import { ProjectGrid } from "../../components/common/ProjectGrid";
import { MiniHero } from "../../components/common/MiniHero";
import { getNewProjects, getCategories } from "../../services";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { ItemGridWithPagin } from "../../components/common/ItemGridWithPagin";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Projects = ({ projects, categories }) => {
  const [numOfCard, setNumOfCard] = useState(6);

  return (
    <div className="bg-white ">
      <div className="bg-purple-200  pt-40 ">
        <MiniHero pageTitle="Dự án" />
        <div className="flex flex-col items-center justify-center bd">
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      selected
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black",
                      "mr-4 "
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
                        "mr-4 "
                      )}
                    >
                      {category.node.name}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="w-full  bg-red-400">
                  <ItemGridWithPagin
                    projects={projects}
                    numOfCard={numOfCard}
                  />
                </div>
              </Tab.Panel>
              {categories.map((item, index) => (
                <Tab.Panel key={index}>
                  <ItemGridWithPagin
                    projects={item.node.projects}
                    numOfCard={numOfCard}
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Projects;
export async function getStaticProps({ locale }) {
  const projects = await getNewProjects({ locale });
  const categories = await getCategories({ locale });
  return {
    props: { projects, categories },
  };
}