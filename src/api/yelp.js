import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer er2qbxnfAnEcepQtc2edOp_S9zpP0BsidWMa1PMih27UKUT-JMBJzQ9AIqiqVDWzk_pkZhJRiq2Lf98wJ7_mDFUvJyWEUkssqgU5aq0V5Ef_Y6U8EzUojfsoBUnRZnYx",
  },
});
