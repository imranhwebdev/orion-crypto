import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Faq from '../components/Faq';
import Investment_objectives from '../components/InvestmentObjectives';
import RoundUp from '../components/RoundUp';
import Whatamc from '../components/WhatAmc';
import Capital_protected from '../components/CapitalProtected';
import Inovative_trading from '../components/InovativeTrading';
import Investment_universe from '../components/InvestmentUniverse';
import Invest from '../components/Invest';
import Roadmap from '../components/Roadmap';
import TokenOrion from '../components/TokenOrion';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import Tokenomics from '../components/Tokenomics';

function index() { 
  return (
    <>
      <Hero />
      <Investment_objectives />
      <RoundUp />
      <Whatamc />
      <Capital_protected />
      <Inovative_trading />
      <Investment_universe />
      <Portfolio />
      <Invest />
      <Roadmap />
      <TokenOrion />
      <Tokenomics />
      <Team />
      <Faq />
      <Brands />
    </>
  );
}

export default index;
