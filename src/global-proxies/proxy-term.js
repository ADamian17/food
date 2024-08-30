import { proxy } from "valtio";

export const proxyTerm = proxy({
  term: {
    value: "",
  },
});

export const setTermValue = (newTerm) => {
  proxyTerm.term.value = newTerm;
};

export const setTermSubmit = () => {
  console.log("submitted");
};
