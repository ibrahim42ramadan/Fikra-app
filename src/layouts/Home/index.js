import React from "react";
import Navpar from "../../componentes/Navpar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Navpar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
