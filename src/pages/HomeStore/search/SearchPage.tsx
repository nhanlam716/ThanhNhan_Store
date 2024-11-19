import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { axiosClient } from "../../../api/axiosClient";
import { IProduct } from "../../../types/types";
import Cards from "../../../components/card/Cards";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (!searchQuery) return;

    const fetchSearchResults = async () => {
      try {
        const response: any = await axiosClient.get("/productsCards", {
          params: { searchQuery },
        });

        const searchFilter = response.filter((item: any) => {
          return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        });

        setSearchResults(searchFilter);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto my-8">
      <h1 className="text-3xl font-bold">
        Kết quả tìm kiếm cho: "{searchQuery}"
      </h1>
      {searchResults.length > 0 ? (
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map((item) => (
              <Cards key={item.id} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-4">Không tìm thấy sản phẩm nào phù hợp.</p>
      )}
    </div>
  );
};

export default SearchPage;
