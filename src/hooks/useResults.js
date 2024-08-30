import { useEffect, useState } from "react";
import { setProxyBusinesses } from "../global-proxies/proxy-businesses";

const useResults = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "oakland",
        },
      });

      setProxyBusinesses(response.data.businesses);
    } catch (error) {
      setErrorMsg("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return {
    errorMsg,
    searchApi,
    setErrorMsg,
  };
};

export default useResults;
