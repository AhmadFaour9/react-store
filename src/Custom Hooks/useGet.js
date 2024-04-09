import axios from "axios";
import { useEffect, useState } from "react";
import config from "../Constants/enviroment";

const useGet = (endPoint, isLimit, isID,isSort) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${config.baseUrl1}/${endPoint}${isID ?`/${isID.id}` : ""}${isLimit ? `?limit=${isLimit.limit}` : ""}${isSort ? `?sort=${isSort.Sort}`:''}`
      )
      .then((res) => {
        setLoading(false);
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  }, [isSort&& isSort.Sort]);
  return [data, loading];
};

export default useGet;
