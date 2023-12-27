import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[33px] w-[33px]"
          src="images/img_barchart4bars.svg"
          alt="barchart4bars"
        />
      ),
      label: "Dashboard",
      href: "/dashboardmain",
      active: window.location.pathname === "/dashboardmain",
    },
    {
      icon: (
        <Img
          className="h-[33px] mb-1 w-[33px]"
          src="images/img_receiptlong.svg"
          alt="receiptlong"
        />
      ),
      label: "Transactions",
    },
    {
      icon: (
        <Img
          className="h-[33px] w-[33px]"
          src="images/img_television_light_green_a700_02.svg"
          alt="television"
        />
      ),
      label: "Create Bills",
      href: "/createbill",
      active: window.location.pathname === "/createbill",
    },
    {
      icon: (
        <Img
          className="h-[33px] mb-[9px] w-[33px]"
          src="images/img_receiptlong.svg"
          alt="receiptlong_One"
        />
      ),
      label: "View Bills",
      href: "/viewbill",
      active: window.location.pathname === "/viewbill",
    },
    {
      icon: (
        <Img
          className="h-[33px] mb-[13px] w-[33px]"
          src="images/img_television_blue_gray_900.svg"
          alt="television_One"
        />
      ),
      label: "Add  Farm Product",
      href: "/addfarmproductsthree",
      active: window.location.pathname === "/addfarmproductsthree",
    },
    {
      icon: (
        <Img
          className="h-[33px] mb-2.5 w-[33px]"
          src="images/img_home.svg"
          alt="home"
        />
      ),
      label: "Add Produced Product",
      href: "/addproducedproducts",
      active: window.location.pathname === "/addproducedproducts",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Text
          className="ml-[91px] mr-[94px] mt-8 sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
          size="txtBramptonSerifRegularDemo40"
        >
          Yani Lanka
        </Text>
        <Menu
          menuItemStyles={{
            button: {
              padding: "17px 17px 17px 25px",
              gap: "18px",
              color: "#2c323b",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "24px",
              fontFamily: "Nunito Sans",
              [`&:hover, &.ps-active`]: { color: "#52d22f" },
            },
          }}
          className="flex flex-col items-center justify-start mt-[71px] w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        {!collapsed && (
          <div className="flex flex-row gap-[27px] items-start justify-center ml-[38px] mr-[180px] mt-[332px] w-[39%]">
            <div className="flex flex-col gap-[21px] items-center justify-start w-[24%]">
              <Img
                className="h-[33px] w-[33px]"
                src="images/img_iconionicons.svg"
                alt="iconionicons"
              />
              <Img
                className="h-[33px] w-[33px]"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start mt-1">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                size="txtNunitoSansBold24"
              >
                Profile
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                size="txtNunitoSansBold24"
              >
                Logout
              </Text>
            </div>
          </div>
        )}
        {!collapsed && (
          <Line className="bg-gray-300 h-px mb-[922px] mr-[3px] w-full" />
        )}
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
