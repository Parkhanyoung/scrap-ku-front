import { useEffect } from "react";

export default function SCCourse({ dataList, onChangeData }) {
    const courseList = dataList.map(data => {
    return (
      <tr>
        <td>{data.cour_cd}</td>
        <td>{data.cour_cls}</td>
        <td>{data.dept}</td>
        <td>{data.name}</td>
        <td>{data.isu_nm}</td>
        <td>{data.prof_nm}</td>
        <td style={{
          fontSize:'20px',
          cursor: 'pointer'
        }} onClick={() => {
          console.log(data.id)
          onChangeData(data.id)
        }} className="register">+</td>
      </tr>
    )
  })


  return (
    <>
      {courseList}
    </>
  );
  }