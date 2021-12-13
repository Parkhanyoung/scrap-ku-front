import useFetch from '../hooks/useFetch';
import './css/SearchForm.css'
import SencondSelect from './SecondSelect';
import ThirdSelect from './ThirdSelect';
import { useState, useEffect, useRef } from 'react';

export default function SearchForm({ onChangeData }) {
  const courdivData = useFetch("http://localhost:8000/search/courdiv/");
  const [opt1, setOpt1] = useState('');
  const [opt2, setOpt2] = useState('');
  const [opt3, setOpt3] = useState('');
  const profNmRef = useRef('');
  const courNmRef = useRef('');

  useEffect(() => {
    setOpt1('전공');
    setOpt2('KU-KIST융합대학원(관)');
  }, [])
  const option1 = courdivData.map(courdiv => {
    return <option key={courdiv.id}>{courdiv.name}</option>;
  });  
  
  const secondInput = document.getElementById('sSecondInput');
  const thirdInput = document.getElementById('sThirdInput');
  if (opt1 === '전공' || opt1 === '학문의기초') {
    secondInput.style.visibility = 'visible';
    thirdInput.style.visibility = 'visible';
  } else if (opt1 === '교양') {
    secondInput.style.visibility = 'visible';
    thirdInput.style.visibility = 'hidden';
  } else if (opt1 === '군사학' || opt1 === '평생교육사' || opt1 === '교직') {
    secondInput.style.visibility = 'hidden';
    thirdInput.style.visibility = 'hidden';
  }
  
  function performSetOpt2() {
    const target = document.getElementById('sSecondInput');
    setOpt2(target.value);
  };
  function performSetOpt3() {
    const target = document.getElementById('sThirdInput');
    setOpt3(target.value);
  };
  
  function doSearch() {
    const profNm = profNmRef.current.value;
    const courNm = courNmRef.current.value;
    onChangeData(opt1, opt2, opt3, profNm, courNm);
  }
  
  return (
    <div className="searchForm">
      <div className="sFormBody">

        <div className="sFirstLine">
          <div className="sFLSection1">
            <p>이수구분</p>
            <select className="sInput" onChange={(e) => {
              setOpt1(e.target.value);
            }}>
              {option1}
            </select>
            <select className="sInput" id="sSecondInput" onChange={(e) => {
              setOpt2(e.target.value)}}>
              <SencondSelect courdiv={opt1} onChangeData={performSetOpt2}/>
            </select>
            <select className="sInput" id="sThirdInput" onChange={(e) => {
              setOpt3(e.target.value)}}>
            <ThirdSelect courdiv={opt1} college={opt2}
                         onChangeData={performSetOpt3}/>
            </select>
          </div>
          <div className="sFLSection2">
            <p>담당교수</p>
            <input className="sInput" ref={profNmRef}></input>
          </div>
        </div>

        <div className="sSecondLine">
        <p>강의명</p>
        <input className="sLongInput" ref={courNmRef}></input>
        <button className="searchButton" onClick={doSearch}>조회</button>
        </div>

        </div>
      </div>
  );
}