"use client";

import { FaTimes } from "react-icons/fa";
import { SearchProps } from "../types";

export const Search = ({ value, _onChangeData, _onCancel }: SearchProps) => {
  return (
    <div className="flex relative">
      <input
        name="search"
        type="text"
        placeholder="Search"
        className="search-body !pr-10"
        onChange={_onChangeData}
        value={value}
      />
      {value && (
        <FaTimes
          className="absolute right-8 top-7 text-white cursor-pointer"
          onClick={_onCancel}
        />
      )}
    </div>
  );
};
