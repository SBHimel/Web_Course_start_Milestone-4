import { InstalledAppsContext } from "./InstalledAppsContext";



const InstalledAppsProvider = ({children}) => {

    const data = {
        name: "Himel",
        age: 19,
    }

  return <InstalledAppsContext.Provider value={data}>{children}</InstalledAppsContext.Provider>;
};

export default InstalledAppsProvider;
