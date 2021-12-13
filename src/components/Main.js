import { useEffect, useState } from 'react'
import './css/Main.css'
import TabFire from './TabFire';
import TabWish from './TabWish';

export default function Main() {
  const [tabOpt, setTabOpt] = useState('wish');
  console.log(tabOpt === 'wish')

  function selectTab(e) {
    try {setTabOpt(e.target.id);} catch {}
    const wishDom = document.getElementById('wish');
    const fireDom = document.getElementById('fire');
    if (tabOpt === 'wish') {
    fireDom.classList.remove('selected');
    wishDom.classList.add('selected');
  } else if (tabOpt === 'fire'){
    wishDom.classList.remove('selected');
    fireDom.classList.add('selected');
   }
  }
  useEffect(selectTab)

  return (
    <div className="Main">
      <div className="mainBody">

        <div className="tabMenu">
          <div className="tabOption" onClick={selectTab} id="wish">
            📝 수강신청 희망 과목
          </div>
          <div className="tabOption" onClick={selectTab} id="fire">
            🔥 급한 불 끄기
          </div>
        </div>
      {(tabOpt === 'wish') && <TabWish />}
      {(tabOpt === 'fire') && <TabFire />}
      </div>
    </div>
  )
}