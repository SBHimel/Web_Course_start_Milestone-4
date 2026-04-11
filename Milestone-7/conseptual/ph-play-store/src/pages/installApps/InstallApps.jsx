import React, { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { toast } from "react-toastify";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);
  console.log(installedApps, "contextData");

  const handleUninstall = (app) => {
    console.log(app, "need to unistall");

    const resApps = installedApps.filter((iApp) => iApp.id != app.id);
    console.log(resApps);

    setInstalledApps(resApps);

    toast.warning(`${app.title} is uninstalled`);
  };

  return (
    <div className="container mx-auto my-10">
      {installedApps.length === 0 ? (
        <h2 className="text-center font-bold text-2xl text-gray-500 mt-10">
          No Installed Apps Found
        </h2>
      ) : (
        installedApps.map((app, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
            >
              <div>
                <img src={app.image} className="h-[120px] w-auto" alt="" />
                <h2 className="font-semibold text-2xl">{app.title}</h2>
              </div>
              <button
                className="btn bg-secondary text-white"
                onClick={() => handleUninstall(app)}
              >
                Uninstal
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default InstallApps;
