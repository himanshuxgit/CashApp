import React from "react";
import ContainerCard from "../components/ContainerCard";
import FilteredCardFormContainer from "../components/FilteredCardFormContainer";
import PaymentForm from "../components/PaymentForm";
import BankingForm from "../components/BankingForm";
import CashCardBoostContainer from "../components/CashCardBoostContainer";
import InvestingSectionContainer from "../components/InvestingSectionContainer";

const CashApp = () => {
  const componentWidth = "100%"; // Adjust the width as needed

  return (
    <div className="relative bg-light-white w-full h-[3695px] overflow-hidden">
      <div className="absolute w-full top-[-27px] right-[0px] left-[0px] bg-black h-[721px]">
        <div className="absolute top-[calc(50%-_309.65px)] right-[62.5px] overflow-hidden flex flex-row items-center justify-start">
          <img className="relative w-16 h-9" alt="" src="/layer-2.svg" />
        </div>
        <div className="absolute top-[calc(50%_-_299.5px)] left-[calc(50%_-_383px)] overflow-hidden flex flex-row items-center justify-start gap-[20px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[0.5px] leading-[18px] uppercase font-hero-text text-light-white text-left inline-block">
            Sign In
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[0.5px] leading-[18px] uppercase font-hero-text text-light-white text-left inline-block">
            Legal
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[0.5px] leading-[18px] uppercase font-hero-text text-light-white text-left inline-block">
            Licenses
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[0.5px] leading-[18px] uppercase font-hero-text text-light-white text-left inline-block">
            Security
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[0.5px] leading-[18px] uppercase font-hero-text text-light-white text-left inline-block">
            Careers
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[0.5px] leading-[18px] uppercase font-hero-text text-light-white text-left inline-block">
            Press
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[0.5px] leading-[18px] uppercase font-hero-text text-light-white text-left inline-block">
            Support
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[0.5px] leading-[18px] uppercase font-hero-text text-light-white text-left inline-block">
            Status
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[0.5px] leading-[18px] uppercase font-hero-text text-light-white text-left inline-block">
            Codeblog
          </button>
        </div>
        <img
          className="absolute top-[calc(50%-_315.5px)] left-[60px] w-[30px] h-11"
          alt=""
          src="/cashapp--logo.svg"
        />
        <ContainerCard width={componentWidth} />
        <FilteredCardFormContainer width={componentWidth} />
      </div>
      <PaymentForm width={componentWidth} />
      <BankingForm width={componentWidth} />
      <CashCardBoostContainer width={componentWidth} />
      <InvestingSectionContainer width={componentWidth} />
    </div>
  );
};

export default CashApp;
