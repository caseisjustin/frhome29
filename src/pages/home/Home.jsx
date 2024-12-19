import { request } from "@/api";
import Carousel from "@/components/carousel/Carousel";
import Movies from "@/components/movies/Movies";
import React, { memo, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Genre from "@/components/genre/Genre";

const Home = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState("")

  console.log(data);
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(()=>{
    request
      .get("/genre/movie/list")
      .then(res => setGenres(res.data.genres))
  }, [])

  useEffect(() => {
    request("/discover/movie", {
      params: {
        page,
        without_genres: "18,10749,99",
        with_genres: selectedGenre
      },
    }).then((res) => {
      setData(res.data);
    });
  }, [page, selectedGenre]);

  return (
    <div className="dark:bg-secondary dark:text-white bg-white text-black ">
      <h2>Home</h2> 
      <Carousel data={data} />
      <Genre data={genres} setSelectedGenre={setSelectedGenre}/>
      <Movies data={data} />
      <div className="flex justify-center py-6">
        <Pagination page={page} onChange={handleChange} count={data?.total_pages <= 500 ? data?.total_pages : 500} />
      </div>
    </div>
  );
};

export default memo(Home);
