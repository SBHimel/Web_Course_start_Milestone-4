import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';


const InstallApps = () => {

    const contextData = useContext(InstalledAppsContext)
    console.log(contextData, "contextData");

    return (
        <div>
            Installed apps
        </div>
    );
};

export default InstallApps;