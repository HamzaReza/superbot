"use client";

import { useEffect, useState } from "react";
import { Navigation as NavBar } from "../../components/navigation";
import { Search } from "../../components/search";
import { allData, categories } from "../../data";
import { Category, Data } from "../../types";

export default function Home() {
  const [filterData, setFilterData] = useState<Data[]>(allData);
  const [activeCategory, setActiveCategory] = useState<string>("All Templates");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    let filteredResults = allData;

    if (activeCategory !== "All Templates") {
      filteredResults = filteredResults.filter(
        (item: Data) => item.category === activeCategory
      );
    }

    if (searchQuery) {
      filteredResults = filteredResults.filter((item: Data) =>
        item.allcontents.some((content) =>
          content.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    setFilterData(filteredResults);
  }, [activeCategory, searchQuery]);

  const _onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <Search
        value={searchQuery}
        _onChangeData={_onSearch}
        _onCancel={() => setSearchQuery("")}
      />
      <div className="flex flex-nowrap gap-5 mx-4 pb-4 py-2 rounded-lg overflow-x-scroll">
        {categories.map((category: Category) => (
          <div
            key={category.title}
            onClick={() => setActiveCategory(category.title)}
            className={`min-w-36 p-1 text-white rounded-3xl text-center text-base cursor-pointer ${
              activeCategory === category.title
                ? "bg-cyan-800 font-bold"
                : "bg-card"
            }`}
          >
            {category.title}
          </div>
        ))}
      </div>
      <div className="p-4">
        {filterData.length === 0 ? (
          <div className="flex justify-center items-center h-[200px] text-gray-400 font-bold text-3xl">
            No data found
          </div>
        ) : (
          categories.map((category: Category) => {
            const categoryItems = filterData.filter(
              (item: Data) => item.category === category.title
            );

            if (categoryItems.length === 0) return null;

            return (
              <div key={category.title} className="mb-8">
                <div className="text-base font-semibold text-white">
                  {category.title}
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  {category.description}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categoryItems.map((item: Data) =>
                    item.allcontents.map((content) => (
                      <div
                        className="w-full p-4 mb-2 text-center bg-card rounded-xl text-white cursor-pointer"
                        key={`${item.id}-${content.id}`}
                      >
                        <div>{content.name}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
