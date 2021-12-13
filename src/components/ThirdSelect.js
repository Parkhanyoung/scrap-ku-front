import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function ThirdSelect({ courdiv, college, onChangeData }) {
  const [data, setData] = useState([]);
  const TSList = data.map(ele => {
    return <option key={ele.id}>{ele.name}</option>;
  });
  useEffect(() => {
    onChangeData();
  }, [data]);

  useEffect(() => {
    if ((courdiv === '전공' && college) || (courdiv === '학문의기초' && college)) {
      fetch(`http://localhost:8000/search/dept/?courdiv=${courdiv}&college=${college}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      setData([]);
    }
  }, [courdiv, college]);  

  return(
      <>
      {TSList}
      </>
  );
}