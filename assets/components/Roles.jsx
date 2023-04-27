/*  ./components/Roles.jsx     */
import { useState } from 'react';

export const Roles = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <>
      <div className={isActive ? 'leaderboardSidebarBlock' : 'leaderboardSidebarBlock open'}>
        <h1 onClick={handleClick}>Role Rewards</h1>
        <div className="leaderboardSidebarBlockContentWrapper">
          <div className="leaderboardSidebarBlockSeparator"></div>
          <div className="leaderboardSidebarBlockContent">
            <div className="flex flexColumn bottom10">
              <h5>LEVEL 25</h5>
              <div className="flex flexRow flexWrap">
                <div className="leaderboardRole" style={{ borderColor: '#5ae4d9' }, { color: '#5ae4d9' }}>Lil Clucker
                </div>
              </div>
            </div>
            <div className="flex flexColumn bottom10">
              <h5>LEVEL 50</h5>
              <div className="flex flexRow flexWrap">
                <div className="leaderboardRole" style={{ borderColor: '#4bd4d9' }, { color: '#4bd4d9' }}>Clucker
                </div>
              </div>
            </div>
            <div className="flex flexColumn bottom10">
              <h5>LEVEL 75</h5>
              <div className="flex flexRow flexWrap">
                <div className="leaderboardRole" style={{ borderColor: '#3dc3d9' }, { color: '#3dc3d9' }}>Gangsta
                </div>
              </div>
            </div>
            <div className="flex flexColumn bottom10">
              <h5>LEVEL 100</h5>
              <div className="flex flexRow flexWrap">
                <div className="leaderboardRole" style={{ borderColor: '#1cb2cd' }, { color: '#1cb2cd' }}>High Roller
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};