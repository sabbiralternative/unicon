import { useEffect, useState } from "react";
import { API } from "../../../api";
import { useSelector } from "react-redux";
import { userToken } from "../../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { AxiosSecure } from "../../../lib/AxiosSecure";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const token = useSelector(userToken);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (searchText?.length > 2) {
      const getSearchData = async () => {
        const { data } = await AxiosSecure.post(API.searchEvent, {
          name: searchText,
        });

        if (data?.result?.length > 0) {
          setData(data?.result);
        }
      };
      getSearchData();
    }
  }, [searchText, token]);

  /* filter the search value */
  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.eventType)));

    setCategories(categories);
  }, [data]);

  /* hide the search modal */
  const handleHideDropdown = () => {
    setSearchText("");
    setData([]);
  };

  return (
    <div className="relative search-box">
      <div
        id="searchBox"
        className="text-primary relative hidden max-w-[500] font-lato md:block flex-grow"
      >
        <div className=" relative w-full max-w-[450px]">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border-1 peer w-[260px]  appearance-none text-xs pl-9 py-2 border  rounded-full md:text-[14px]  bg-bg_Quaternary  text-text_Ternary pr-6"
            placeholder="Search Events(At least 3 letters)..."
            type="text"
          />
          <svg
            fill="#999"
            className="absolute top-1/2 left-3 -translate-y-1/2"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
          </svg>
        </div>
      </div>

      {data?.length > 0 && searchText && (
        <div className="search-list">
          {categories.map((category) => (
            <>
              <div className="search-game-name">
                <b>{category}</b>
              </div>
              {data
                .filter((item) => item.eventType === category)
                .map((item, i) => (
                  <Link
                    className="group"
                    onClick={handleHideDropdown}
                    key={i}
                    to={`/game-details/${item?.eventTypeId}/${item?.eventId}`}
                  >
                    <div className="search-list-item">
                      <div className="search-tournament-name">
                        <b className="group-hover:underline">{item?.name}</b>
                      </div>
                      <div className="search-game-date group-hover:underline">
                        {item?.openDate}
                      </div>
                    </div>
                  </Link>
                ))}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
