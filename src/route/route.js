import React from "react"
import * as container from "../container/index";
import { Navigate } from "react-router-dom";
import * as Component from "../component/index";
import * as constant from "../common/route.constant";

export const route = [
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.dashboard,
    element: (
      <Component.Layout>
        <container.Dashboard />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.contacts,
    element: (
      <Component.Layout>
        <container.Contacts />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.PRIVATE_ROUTE.order,
    element: (
      <Component.Layout>
        <container.Order />
      </Component.Layout>
    ),
    type: constant.ROUTE_TYPE.private,
  },
  {
    exact: true,
    path: constant.RESTRICTED_ROUTE.login,
    element: <container.Login />,
    type: constant.ROUTE_TYPE.restricted,
  },
  {
    exact: true,
    path: constant.PULBIC_ROUTE.other,
    element: <Navigate to={constant.PRIVATE_ROUTE.dashboard} />,
    type: constant.ROUTE_TYPE.public,
  },
];
