import { useState } from 'react';
import './css/WishModal.css'
import SearchContent from './SearchContent';
import SearchForm from './SearchForm';

export default function WishModal({ onChangeData }) {
  const [courdiv, setCourdiv] = useState('');
  const [group, setGroup] = useState('');
  const [dept, setDept] = useState('');
  const [profNm, setProfNm] = useState('');
  const [courNm, setCourNm] = useState('');

  return (
    <div className="wishModal">
      <div className="modalBody">
        <h3 className="modalTitle">
          <span>과목 조회/추가</span><span className="closeIcon">x</span>
        </h3>
        <SearchForm onChangeData={(courdiv, group, dept, profNm, courNm) => {
          setCourdiv(courdiv);
          setGroup(group);
          setDept(dept);
          setProfNm(profNm);
          setCourNm(courNm);
        }}/>
        <SearchContent courdiv={courdiv} group={group} dept={dept} 
                       profNm={profNm} courNm={courNm} onChangeData={(course) => { 
                        onChangeData(course);
                      }} />
            <p style={{
              fontSize: '12px',
              marginLeft: '40px',
              marginTop: '8px',
              color: 'red'
            }}>* 교과목명 검색 시 이수구분 조건은 무시됩니다.</p>
      </div>
    </div>
  );
}