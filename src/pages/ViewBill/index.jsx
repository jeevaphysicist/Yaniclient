import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const ViewBillPage = () => {
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
          className="h-[33px] mb-2.5 w-[33px]"
          src="images/img_television.svg"
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
          className="h-[33px] w-[33px]"
          src="images/img_television_light_green_a700.svg"
          alt="television_One"
        />
      ),
      label: "View Bills",
      href: "/viewbill",
      active: window.location.pathname === "/viewbill",
    },
    {
      icon: (
        <Img
          className="h-[33px] mb-3 w-[33px]"
          src="images/img_television_blue_gray_900.svg"
          alt="television_Two"
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
      <div className="bg-gray-100 flex flex-col font-bramptonserifregulardemo items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[27px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[356px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto rounded-br-[24px] rounded-tr-[24px] shadow-bs1 top-[0]"
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
                  gap: "22px",
                  color: "#2c323b",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "24px",
                  [`&:hover, &.ps-active`]: { color: "#52d22e" },
                },
              }}
              className="flex flex-col font-nunitosans items-center justify-start mt-[71px] w-full"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
            {!collapsed && (
              <div className="flex flex-row font-nunitosans gap-[27px] items-start justify-center ml-[38px] mr-[180px] mt-[332px] w-[39%]">
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
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                  >
                    <Text size="txtNunitoSansBold24">Logout</Text>
                  </a>
                </div>
              </div>
            )}
            {!collapsed && (
              <Line className="bg-gray-300 h-px mb-[922px] mr-[3px] w-full" />
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col font-nunitosans gap-[19px] justify-start md:mt-0 mt-[110px] w-full">
            <Text
              className="ml-3.5 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 tracking-[-0.24px]"
              size="txtNunitoSansBlack40"
            >
              View Bill
            </Text>
            <div className="bg-white-A700 flex flex-col font-sfprotext items-center justify-end p-[51px] md:px-10 sm:px-5 rounded-[25px] shadow-bs1 w-full">
              <div className="flex flex-col justify-start mb-1 mt-[15px] w-[97%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <Input
                    name="searchfield"
                    placeholder="Search"
                    className="font-sfprotext md:text-[22px] p-0 placeholder:text-gray-800_99 sm:text-xl text-2xl text-left tracking-[-0.41px] w-full"
                    wrapClassName="flex md:flex-1 w-[87%] md:w-full"
                    prefix={
                      <div className="h-[33px] mr-5 w-[33px] bg-blue_gray-400">
                        <Img
                          className="h-[33px] my-auto"
                          src="images/img_rewind.svg"
                          alt="rewind"
                        />
                      </div>
                    }
                    color="gray_600_1e"
                    size="xs"
                  ></Input>
                  <Img
                    className="h-[42px] w-[42px]"
                    src="images/img_filteralt.svg"
                    alt="filteralt"
                  />
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[-0.41px]"
                    size="txtNunitoSansSemiBold26"
                  >
                    Filters
                  </Text>
                </div>
                <div className="bg-gray-600_1e flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[94px] mr-[184px] mt-[30px] pl-0.5 py-0.5 rounded-lg w-[69%] md:w-full">
                  <Button
                    className="cursor-pointer font-semibold min-w-[184px] outline outline-[1px] outline-black-900_0a rounded-md text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.24px]"
                    color="white_A700"
                  >
                    All
                  </Button>
                  <div className="flex flex-col items-center justify-end md:ml-[0] ml-[58px]">
                    <Text
                      className="mt-[5px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtSFProTextMedium24"
                    >
                      Completed
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end ml-3 md:ml-[0]">
                    <Text
                      className="mt-1 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtSFProTextMedium24"
                    >
                      Pending
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-300_ad flex md:flex-col flex-row font-nunitosans md:gap-5 items-start justify-start mr-[30px] mt-[45px] p-[9px] rounded-[10px] w-[97%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[13px] md:mt-0 mt-[3px] text-center text-gray-700 text-xl tracking-[-0.24px]"
                    size="txtNunitoSansBold20Gray700"
                  >
                    GRN/RGN
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[139px] text-center text-gray-700 text-xl tracking-[-0.24px]"
                    size="txtNunitoSansBold20Gray700"
                  >
                    Date
                  </Text>
                  <Text
                    className="ml-48 md:ml-[0] md:mt-0 my-0.5 text-center text-gray-700 text-xl tracking-[-0.24px]"
                    size="txtNunitoSansBold20Gray700"
                  >
                    Price
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[137px] text-center text-gray-700 text-xl"
                    size="txtNunitoSansBold20Gray700"
                  >
                    Payment Status
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-nunitosans sm:gap-10 items-end justify-between md:ml-[0] ml-[26px] mt-[17px] w-[86%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start sm:mt-0 mt-[5px]">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24"
                    >
                      GRN-123
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[103px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24Gray500"
                    >
                      1JAN23
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[133px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24"
                    >
                      <span className="text-gray-900_01 font-nunitosans font-semibold">
                        5,00,000
                      </span>
                      <span className="text-gray-900_01 font-nunitosans text-sm font-semibold">
                        {" "}
                        LKR
                      </span>
                    </Text>
                  </div>
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_iconheroicons.svg"
                    alt="iconheroicons"
                  />
                </div>
                <div className="bg-gray-300_84 flex md:flex-col flex-row font-nunitosans md:gap-5 items-start justify-start mr-[30px] mt-3 p-2 rounded-[10px] w-[97%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[18px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold24"
                  >
                    GRN-123
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[103px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold24Gray500"
                  >
                    1JAN23
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[133px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold24"
                  >
                    <span className="text-gray-900_01 font-nunitosans font-semibold">
                      5,00,000{" "}
                    </span>
                    <span className="text-gray-900_01 font-nunitosans text-sm font-semibold">
                      LKR
                    </span>
                  </Text>
                  <Img
                    className="h-[38px] md:ml-[0] ml-[165px] w-[38px]"
                    src="images/img_iconjamicons.svg"
                    alt="iconjamicons"
                  />
                </div>
                <div className="flex sm:flex-col flex-row font-nunitosans sm:gap-10 items-start justify-between md:ml-[0] ml-[26px] mt-[13px] w-[86%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24"
                    >
                      GRN-123
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[103px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24Gray500"
                    >
                      1JAN23
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[133px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24"
                    >
                      <span className="text-gray-900_01 font-nunitosans font-semibold">
                        5,00,000
                      </span>
                      <span className="text-gray-900_01 font-nunitosans text-sm font-semibold">
                        {" "}
                        LKR
                      </span>
                    </Text>
                  </div>
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_iconheroicons.svg"
                    alt="iconheroicons_One"
                  />
                </div>
                <div className="flex sm:flex-col flex-row font-nunitosans sm:gap-10 items-start justify-between md:ml-[0] ml-[26px] mt-[29px] w-[86%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24"
                    >
                      GRN-123
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[103px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24Gray500"
                    >
                      1JAN23
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[133px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24"
                    >
                      <span className="text-gray-900_01 font-nunitosans font-semibold">
                        5,00,000
                      </span>
                      <span className="text-gray-900_01 font-nunitosans text-sm font-semibold">
                        {" "}
                        LKR
                      </span>
                    </Text>
                  </div>
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_iconheroicons.svg"
                    alt="iconheroicons_Two"
                  />
                </div>
                <div className="flex sm:flex-col flex-row font-nunitosans sm:gap-10 items-start justify-between md:ml-[0] ml-[26px] mt-[29px] w-[86%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24"
                    >
                      GRN-123
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[103px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24Gray500"
                    >
                      1JAN23
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[133px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24"
                    >
                      <span className="text-gray-900_01 font-nunitosans font-semibold">
                        5,00,000
                      </span>
                      <span className="text-gray-900_01 font-nunitosans text-sm font-semibold">
                        {" "}
                        LKR
                      </span>
                    </Text>
                  </div>
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_iconheroicons.svg"
                    alt="iconheroicons_Three"
                  />
                </div>
                <div className="flex sm:flex-col flex-row font-nunitosans sm:gap-10 items-start justify-between md:ml-[0] ml-[26px] mt-[29px] w-[86%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24"
                    >
                      GRN-123
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[103px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24Gray500"
                    >
                      1JAN23
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[133px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24"
                    >
                      <span className="text-gray-900_01 font-nunitosans font-semibold">
                        5,00,000
                      </span>
                      <span className="text-gray-900_01 font-nunitosans text-sm font-semibold">
                        {" "}
                        LKR
                      </span>
                    </Text>
                  </div>
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_iconheroicons.svg"
                    alt="iconheroicons_Four"
                  />
                </div>
                <div className="bg-gray-300_84 flex md:flex-col flex-row font-nunitosans md:gap-5 items-start justify-start mr-[30px] mt-2.5 p-2 rounded-[10px] w-[97%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[18px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold24"
                  >
                    GRN-123
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[103px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold24Gray500"
                  >
                    1JAN23
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[133px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold24"
                  >
                    <span className="text-gray-900_01 font-nunitosans font-semibold">
                      5,00,000{" "}
                    </span>
                    <span className="text-gray-900_01 font-nunitosans text-sm font-semibold">
                      LKR
                    </span>
                  </Text>
                  <Img
                    className="h-[38px] md:ml-[0] ml-[165px] w-[38px]"
                    src="images/img_iconjamicons.svg"
                    alt="iconjamicons_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBillPage;
