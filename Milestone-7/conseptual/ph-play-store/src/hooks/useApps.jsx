import React, { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      /* iccha kore loading time 2s kora hoyeche */
      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  console.log(apps, "apps");
  console.log(loading, "loading");

  return{apps, loading};
};

export default useApps;
