import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Dropdown from "../components/Dropdown/dropdown";
import Card from "../components/Card/card";
import Table from "../components/Table/table";
import Header from "../components/Header/header";
import TableWrapper from "../components/TableWrapper"
function Balances() {
  const { sidebarState } = useContext(AppContext);
  return (
    <div className={"container"}>
      <div className={sidebarState ? "balances" : "balances closed"}>
        <Header heading="Balances" />
        <div className={"card-container"}>
          <Card
            positionalClass="left-card"
            heading="Total account balance"
            amount="5,332.18"
            conversion_rate="1USD = 381.97NGN"
            dropdown={
              <Dropdown width={"80px"} />
            }
          />
          <Card
            positionalClass="right-card"
            headingColor="grey"
            heading="Funds on hold"
            amount="5,332.18"
            background="#F5F5F5"
            dividerWidth="80%"
          />
        </div>
        <div className={"table-container"}>
          <TableWrapper/>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Balances;
