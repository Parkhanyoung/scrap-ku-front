import { useEffect, useState } from "react";
import SCCourse from "./SCCourse";
import './css/SearchContent.css'

export default function SearchContent({ courdiv, group, dept, profNm, courNm, onChangeData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = new URL('http://localhost:8000/search/course/');
    const params = (courdiv ==='교양' ) ? {
      courdiv: courdiv,
      group: group,
      dept: dept,
      prof_nm: profNm,
      cour_nm: courNm
    } : {
      courdiv: courdiv,
      dept: dept,
      prof_nm: profNm,
      cour_nm: courNm
    };
    url.search = new URLSearchParams(params);
    
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        setData(data);
      }
    })
    .catch(err => {
      console.log(err)
    })

  }, [courdiv, group, dept, profNm, courNm])

  return (
    <div className="searchContent" style={{
      width: '700px',
      height: '280px',
      overflow: 'auto',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div className="SCBody" >
      <table className="SCTable">

    <thead>
    	<tr className="SCcourseField">
            <th style={{
              width: "120px"}}>학수번호</th>
            <th style={{
              width: "50px"}}>분반</th>
            <th style={{
              width: "90px"}}>학과</th>
            <th style={{
              width: "140px"}}>강의명</th>
            <th style={{
              width: "70px"}}>구분</th>
            <th style={{
              width: "100px"}}>담당교수</th>
            <th style={{
              width: "60px"}}>추가</th>
         </tr>
    </thead>
    <tbody className="SCcourseBody">
      <SCCourse dataList={data} onChangeData={onChangeData}/>
      </tbody>

    </table>
      </div>
    </div>
  );
}