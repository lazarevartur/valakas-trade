import React from "react";
import { BinarProfitTeamMain } from "../../component/BinarProfitTeamGroup/binarProfitTeamMain";

import { MainRow } from "../../layouts/mainRow";

interface BinarProfitTeamProps {}

const BinarProfitTeam: React.FC<BinarProfitTeamProps> = () => {
  return (
    <div>
      <MainRow>
        <BinarProfitTeamMain />
      </MainRow>
    </div>
  );
};

BinarProfitTeam.defaultProps = {};

export default BinarProfitTeam;
