import React from "react";
import PageTitle from "../../../Home/Components/PageTitle";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import DummyCard from "./DummyCard";

import BalanceStatus from "./BalanceStatus";
import MyWatchlist from "./MyWatchlist";
import MoneyHistory from "./MoneyHistory";
import MarchentList from "./MarchentList";
import TransactionList from "./TransactionList";
import WalletWidget from "./WalletWidget";

import { BsCurrencyBitcoin, BsCurrencyYen } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import CardWidget from "./CardWidget";

const WalletWidgetData = [
  {
    id: 1,
    icon: <BsCurrencyBitcoin />,
    income: 12500,
    progress: 45, //%
    rate: "1.00 BTC = $48,781.20",
  },
  {
    id: 2,
    icon: <BsCurrencyYen />,
    income: 9250,
    progress: -32, //%
    rate: "1.00 CNY = $0.6",
  },
  {
    id: 3,
    icon: <SiEthereum />,
    income: 14600,
    progress: 32, //%
    rate: "1.00 ETH = $3,783.68",
  },
];

const EWalletMainContent = () => {
  return (
    <div
      className=" full-size dashboard-e-wallet page-main"
      style={{ zIndex: "1" }}
    >
      <div className=" main-content container-fluid w-100">
        <PageTitle title="E-Wallet" />
        <div className=" row">
          <div className=" col-12 col-xl-9">
            <div className=" row">
              <div className=" col-12">
                <div className=" row">
                  <div className=" col-12 col-md-4">
                    <WalletWidget item={WalletWidgetData[0]} />
                  </div>
                  <div className=" col-12 col-md-4">
                    <WalletWidget item={WalletWidgetData[1]} />
                  </div>
                  <div className=" col-12 col-md-4">
                    <WalletWidget item={WalletWidgetData[2]} />
                  </div>
                </div>
              </div>
              <div className=" col-12">
                <BalanceStatus />
              </div>
            </div>
          </div>
          <div className=" col-12 col-xl-3">
            <div className=" row">
              <div className=" col-12 col-md-6 col-lg-12">
                <CardWidget />
              </div>
              <div className=" col-12 col-md-6 col-lg-12">
                <MyWatchlist />
              </div>
            </div>
          </div>
        </div>

        <div className=" row">
          <div className=" col-12 col-md-6 col-xl-3">
            <MoneyHistory />
          </div>
          <div className=" col-12 col-md-6 col-xl-3">
            <MarchentList />
          </div>
          <div className=" col-12 col-md-12 col-xl-6">
            <TransactionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EWalletMainContent;
