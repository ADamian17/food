import { proxy } from "valtio";

export const proxyBusinesses = proxy({
  data: {
    businesses: [],
  },
});

export const setProxyBusinesses = (newBusinesses) => {
  proxyBusinesses.data.businesses = newBusinesses;
};
