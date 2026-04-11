import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { HashLoader } from "react-spinners";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  console.log(typeof id, "id");

  const { apps, loading } = useApps();
  console.log(apps, loading, "apps", "loading");

  const expectedApp = apps.find((app) => String(app.id) === id);
  console.log(expectedApp, "expectedApp");


  const {installedApps, setInstalledApps} = useContext(InstalledAppsContext)

  const handleInstallApp = ()=>{
    setInstalledApps([...installedApps, expectedApp]);
    toast.success(`${expectedApp.title} is installed`)
  }
  console.log(installedApps);

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <HashLoader color="#ad46ff" />
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="shadow p-6 space-y-2 text-center">
        <img
          src={expectedApp.image}
          alt=""
          className="mx-auto h-[250px] w-auto"
        />
        <h2 className="font-semibold text-3xl">{expectedApp.title}</h2>
        <p>
          Developed by:{" "}
          <span className="font-semibold text-3xl text-purple-500">
            {expectedApp.companyName}
          </span>{" "}
        </p>

        <button className="btn bg-purple-500 text-white" onClick={handleInstallApp}>Install now</button>
      </div>
    </div>
  );
};

export default AppDetails;
