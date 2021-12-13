import { useEffect, useState } from "react";

export default function WishCourse({data}) {

  const [wishDataList, setWishDataList] = useState([]);
  useEffect(() => {
    if (data.length === 0) { return } else {
    fetch(`http://localhost:8000/search/course/${data[data.length -1]}/`)
    .then(res => { 
      return res.json();
    })
    .then(course => {
      setWishDataList([...wishDataList, course[0]])
    })
  }}, [data]);
  const wishList = wishDataList.map(data => {
    return (       
    <tr>
      <td>{data.cour_cd}</td>
      <td>{data.cour_cls}</td>
      <td>{data.dept}</td>
      <td>{data.name}</td>
      <td>{data.isu_nm}</td>
      <td>{data.prof_nm}</td>
      <td style={{
        cursor: 'pointer'
      }}>copy</td>
    </tr>
    );
  })
  return(
    <>
      {wishList.length ? wishList : <><td></td><td></td><td></td>
                                    <td>수강신청 희망 과목이 없습니다.</td></>}
    </>
  );
}