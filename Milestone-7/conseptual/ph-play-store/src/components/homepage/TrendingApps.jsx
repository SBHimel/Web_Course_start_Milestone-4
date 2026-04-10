import React, { use, useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import AppCard from "../ui/AppCard";
import { HashLoader } from "react-spinners";
import useApps from "../../hooks/useApps";

// const appsPromise = fetch("data.json").then((res) => res.json());

const TrendingApps = () => {
  /* eta useApps.jsx e use kora hooks ehane eseche */
    const {apps, loading} = useApps();

  return (
    <div className="container mx-auto my-[60px]">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending apps</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>

      <p className="mb-4 font-semibold">Total apps: {apps.length}</p>

      {/* Responsive grid */}
      {loading ? (
        /* ei spinner ta react spinner theke ana hoyeche
         */
        <div className="flex justify-center items-center">
            <HashLoader  color="#ad46ff"/>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.slice(0,9).map((app, ind) => (
            <AppCard app={app} key={ind}></AppCard>
          ))}
        </div>
      )}

      <div className="text-center mt-4">

        <Link to={"/apps"}>

        <button className="btn bg-purple-500 text-white">View All</button>

        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
