import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import AppCard from "../../components/ui/AppCard";
import useApps from "../../hooks/useApps";

/* TrendingApps er baki gula soho sob dekhebe ar eta TrendingApps.jsx thekei eseche */

const Apps = () => {

    /* eta useApps.jsx e use kora hooks ehane eseche */
    const {apps, loading} = useApps();


  return (
    <div className="container mx-auto my-10">
      {/* Section header */}
      <div className="mb-12 text-center max-w-[50%] mx-auto">
        <h2 className="font-bold text-4xl">Trending apps</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>

      <p className="mb-4 font-semibold">Total apps: {apps.length}</p>
      {loading ? (
        /* ei spinner ta react spinner theke ana hoyeche
         */
        <div className="flex justify-center items-center">
          <HashLoader color="#ad46ff" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app, ind) => (
            <AppCard app={app} key={ind}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
