import { title } from "process";
import React, { useEffect, useMemo, useState } from "react";
import courseData from "../../dummy/coursedetails.json";
import SearchCard from "../../components/SearchCard/SearchCard";
import SearchDropdown from "../../components/SearchDropdown/SearchDropdown";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useLocation, useParams } from "react-router-dom";
import { getSearchedCourses } from "../../utils/api";
// import { getSearchedCourses } from "../../utils/api";
// import "./SearchCard.css";

interface SearchCourseProps {
  _id: string;
  title: string;
  imageUrl: string;
  rating: number;
  instructorName: string;
  price: number;
  oldPrice: number;
  popularity: string;
}

function SearchCoursePage() {
  const [searchCourse, setSearchCourse] = useState<SearchCourseProps[]>();
  const useQuery = () => {
    const { search } = useLocation();
    console.log(search);

    return useMemo(() => new URLSearchParams(search), [search]);
  };

  const query = useQuery();
  const searchString = query.get("query");
  console.log(searchString);

  const fetchSearchedResults = async () => {
    const _res = await getSearchedCourses(searchString!);
    if (_res) {
      console.log(_res);
      setSearchCourse(_res);
    }
  };

  // INFO: This useEffect runs when the page is initially loaded and the user comes from some other page
  useEffect(() => {
    console.log("this useffect");
    fetchSearchedResults();
  }, []);

  // INFO: This useEffect runs when the searchString value changes
  useEffect(() => {
    console.log("other useffect");
    fetchSearchedResults();
  }, [searchString]);

  return (
    <>
      <Navbar />
      <div className="container pt-5">
        <div className="d-flex justify-content-between">
          <h4 className="fw-bold ps-2 pb-4">
            {searchCourse?.length} results for "{searchString}"
          </h4>
          <p className="align-items-end">
            <small className="results text-mute fw-bold text-secondary align-items-end">
              {searchCourse?.length} results
            </small>
          </p>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <SearchDropdown />
            <hr />
          </div>
          <div className="col-lg-10">
            {/* INFO: Conditional rendering */}
            {searchCourse?.length! > 0 ? (
              <>
                {searchCourse?.map((item) => {
                  return (
                    <>
                      <SearchCard
                        _id={item?._id}
                        title={item?.title}
                        imageUrl={item?.imageUrl}
                        rating={item?.rating}
                        instructorName={item?.instructorName}
                        price={item?.price}
                        popularity={item?.popularity}
                      />
                      <hr />
                    </>
                  );
                })}
              </>
            ) : (
              <>
                <h1 className="text-center align-items-center">
                  😢 No relevant search results found!
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchCoursePage;
