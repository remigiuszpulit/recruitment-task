import axios from "axios";
import { countryModel } from "../models/countryModel";

const instance = axios.create({
  baseURL: "https://rc-api-test.ex7.pl/api/",
  timeout: 1000,
});

export const useApi = (
  setState: React.Dispatch<React.SetStateAction<countryModel[]>>
) => {
  const getItems = async () => {
    const response = await instance.get("kraje");
    setState(response.data.value);
  };
  const patchItem = async (item: countryModel) => {
    await instance.patch(`kraje(${item.Id})`, {
      Symbol: item.Symbol,
      Nazwa: item.Nazwa,
    });
    const response = await instance.get("kraje");
    setState(response.data.value);
  };

  return { getItems, patchItem };
};
