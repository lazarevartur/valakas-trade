import React from "react";
import { BinarProfitTeamMain } from "../../component/BinarProfitTeamGroup/binarProfitTeamMain";

import { MainRow } from "../../layouts/mainRow";
import { FullWidthRow } from "../../layouts/fullWidthRow";
import { InvestmentPackages } from "../../component/BinarProfitTeamGroup/InvestmentPackages";
import { ProfitCalculator } from "../../component/homePageLandingGroup/profitСalculator";

interface BinarProfitTeamProps {}

const BinarProfitTeam: React.FC<BinarProfitTeamProps> = () => {
  return (
    <div>
      <MainRow>
        <BinarProfitTeamMain />
      </MainRow>
      <FullWidthRow>
        <InvestmentPackages />
      </FullWidthRow>
      <FullWidthRow>
        <ProfitCalculator />
      </FullWidthRow>
    </div>
  );
};

export default BinarProfitTeam;
