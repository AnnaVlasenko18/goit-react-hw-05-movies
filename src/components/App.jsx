import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Blocks } from 'react-loader-spinner';
import React, { Suspense } from 'react';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';

// import { MoviesDetails } from 'pages/MoviesDetails';

export const App = () => {
  return (
    <Suspense
      fallback={
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/movies/moviesId" element={<MoviesDetails />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
