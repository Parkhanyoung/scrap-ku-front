import { useEffect } from 'react';
import './css/Clock.css'

export default function Clock() {
  const initialTime = new Date();
  const initialClock = initialTime.toLocaleTimeString();

  return (
    <div className="Clock">
      <div className="mainClock">
        <h2 className="main">
          <span className="smallFont">현재 고려대학교 수강신청 서버시간은</span>&nbsp;
          <span id="time">{initialClock}</span>
        </h2>
      </div>
      <div className="selectTime">
        <span>
        <label htmlFor="30">30분전</label>
        <input type="checkbox" id="30" />
        </span>
        <span>
        <label htmlFor="5">5분전</label>
        <input type="checkbox" id="5" />
        </span>
        <span>
        <label htmlFor="3">3분전</label>
        <input type="checkbox" id="3" />
        </span>
        <span>
        <label htmlFor="1">1분전</label>
        <input type="checkbox" id="1" />
        </span>
        <span>
        <label htmlFor="0">정각 알림</label>
        <input type="checkbox" id="0" />
        </span>
      </div>
    </div>
  )
}