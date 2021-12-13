import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function SencondSelect({ courdiv, onChangeData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    onChangeData();
  }, [data])

  useEffect(() => {
    if (courdiv === '전공' || courdiv === '학문의기초') {
      fetch(`http://localhost:8000/search/college/?courdiv=${courdiv}`)
      .then(res => {
        return res.json();
      })
      .then(data => {   
        setData(data);
      })
    } else if (courdiv === '교양') {
      fetch(`http://localhost:8000/search/group/`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      })
    } else {
      setData([])
    }
  }, [courdiv]);

  const SSList = data.map(ele => {
    return <option key={ele.code}>{ele.name}</option>
  });
 
  return(
    <>
      {SSList}
    </>
  );
}