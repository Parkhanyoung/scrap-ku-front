import { useState } from 'react';
import './css/TabWish.css'
import WishCourse from './WishCourse';
import WishModal from './WishModal';

export default function TabWish() {
  const [modalOnOff, setModalOnOff] = useState('off');
  function openModal() {
    document.querySelector('.wishModal').style.display = 'block';
    setModalOnOff('on');
  }

  const [wishCourse, setWishCourse] = useState([]);

  function addWishCourse(course) {
    console.log('전달됨');
    setWishCourse([...wishCourse, course]);
  }

  window.onclick = (e) => {
    if ((e.target.className === "wishModal" || 
         e.target.className === "closeIcon" ||
         e.target.className ===  "register") &&
         modalOnOff === 'on') {
      document.querySelector(".wishModal").style.display = "none";
      setModalOnOff('off');
    }
  }
  return (
    <div className="tabWish">
      <div className="wishBody">
      <table className="table">
    <thead>
    	<tr className="courseField">
            <th >학수번호</th>
            <th style={{
              width: "80px"}}>분반</th>
            <th style={{
              width: "150px"}}>학과</th>
            <th style={{
              width: "270px"}}>강의명</th>
            <th style={{
              width: "110px"}}>구분</th>
            <th style={{
              width: "140px"}}>담당교수</th>
            <th style={{
              width: "100px"}}>복사하기</th>
         </tr>
    </thead>
    <tbody>
      <WishCourse data={wishCourse}/>
    </tbody>
</table>
      <div className="fromEnd">
      <h2 className="plusIcon" onClick={openModal}>+</h2>
      </div>
      < WishModal onChangeData={addWishCourse}/>
      </div>
    </div>
  );
}