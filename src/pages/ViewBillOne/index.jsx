import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const ViewBillOnePage = () => {
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
          className="h-[33px] mb-[9px] w-[33px]"
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
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-bramptonserifregulardemo sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[356px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-br-[24px] rounded-tr-[24px] shadow-bs1 top-[0]"
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
            className="flex flex-col font-nunitosans items-center justify-start mt-[73px] w-full"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          {!collapsed && (
            <div className="flex flex-row font-nunitosans gap-[27px] items-start justify-center ml-[38px] mr-[180px] mt-[330px] w-[39%]">
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
        <div className="flex flex-1 font-nunitosans h-[1024px] md:h-[1594px] sm:h-[1806px] justify-end md:px-5 relative w-full">
          <div className="flex flex-col gap-[19px] h-full justify-start mb-8 mt-auto mx-auto w-[94%]">
            <Text
              className="ml-3.5 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 tracking-[-0.24px]"
              size="txtNunitoSansBlack40"
            >
              View Bill
            </Text>
            <div className="bg-white-A700 flex flex-col font-sfprotext items-center justify-end p-[51px] md:px-10 sm:px-5 rounded-[25px] shadow-bs1 w-full">
              <div className="flex flex-col items-start justify-start mb-1 mt-[15px] w-[97%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <div className="bg-gray-600_1e flex md:flex-1 flex-row font-sfprotext gap-5 items-start justify-start p-3 rounded-[10px] w-[87%] md:w-full">
                    <Img
                      className="h-[33px] ml-[3px] mt-[5px] w-[33px]"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                    <Text
                      className="mt-1.5 text-2xl md:text-[22px] text-gray-800_99 sm:text-xl tracking-[-0.41px]"
                      size="txtSFProTextRegular24"
                    >
                      Search
                    </Text>
                  </div>
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
                <div className="bg-gray-600_1e flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[94px] mt-[30px] pl-0.5 py-0.5 rounded-lg w-[69%] md:w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-end outline outline-[1px] outline-black-900_0a p-3 rounded-md shadow-bs">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtSFProTextSemibold24"
                    >
                      All
                    </Text>
                  </div>
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
                <div className="bg-gray-300_ad flex md:flex-col flex-row font-nunitosans md:gap-5 items-start justify-start mt-[45px] p-[9px] rounded-[10px] w-[97%] md:w-full">
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
                <div className="bg-gray-300_84 flex md:flex-col flex-row font-nunitosans md:gap-5 items-start justify-start mt-3 p-2 rounded-[10px] w-[97%] md:w-full">
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
                <List
                  className="flex flex-col font-nunitosans gap-[29px] md:ml-[0] ml-[26px] mt-[13px] w-[86%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
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
                      alt="iconheroicons"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
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
                      alt="iconheroicons"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
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
                      alt="iconheroicons"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
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
                      alt="iconheroicons"
                    />
                  </div>
                </List>
                <div className="bg-gray-300_84 flex md:flex-col flex-row font-nunitosans md:gap-5 items-start justify-start mt-2.5 p-2 rounded-[10px] w-[97%] md:w-full">
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
          <div className="absolute bg-black-900_91 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[141px] md:px-10 sm:px-5 w-full">
            <div className="bg-gray-100 flex flex-col items-center justify-end mt-[37px] p-[25px] sm:px-5 rounded-[25px] w-[84%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                <div className="flex flex-row font-nunitosans items-start justify-between w-full">
                  <Img
                    className="h-[33px] mt-[3px] w-[33px]"
                    src="images/img_iconjamicons_gray_900_02_33x33.svg"
                    alt="iconjamicons_Two"
                  />
                  <Text
                    className="mb-[3px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold24Black900"
                  >
                    Bill
                  </Text>
                  <Img
                    className="h-[33px] mt-[3px] w-[33px]"
                    src="images/img_iconjamicons_33x33.svg"
                    alt="iconjamicons_Three"
                  />
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-nunitosans h-[536px] items-center justify-start mt-2 pl-1.5 py-1.5 w-[62%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_group16691.svg')",
                  }}
                >
                  <div className="flex flex-col justify-start mb-[49px] mt-[27px] w-full">
                    <div className="flex flex-row gap-[7px] items-start justify-start md:ml-[0] ml-[19px] w-[38%] md:w-full">
                      <Text
                        className="mt-0.5 text-base text-blue_gray-900 text-center tracking-[-0.24px]"
                        size="txtNunitoSansSemiBold16"
                      >
                        Date:
                      </Text>
                      <Text
                        className="text-black-900 text-center text-lg tracking-[-0.24px]"
                        size="txtNunitoSansSemiBold18"
                      >
                        01/01/2023
                      </Text>
                    </div>
                    <Line className="bg-gray-400_01 h-px mt-4 w-full" />
                    <div className="flex flex-row items-center justify-between ml-3 md:ml-[0] mt-[51px] w-[95%] md:w-full">
                      <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
                        <Text
                          className="text-base text-center text-gray-500_02 tracking-[-0.24px] w-auto"
                          size="txtNunitoSansSemiBold16Gray50002"
                        >
                          GRN/RGN No:
                        </Text>
                        <Text
                          className="text-base text-center text-gray-500_02 tracking-[-0.24px] w-auto"
                          size="txtNunitoSansSemiBold16Gray50002"
                        >
                          Item Code:
                        </Text>
                        <Text
                          className="text-base text-center text-gray-500_02 tracking-[-0.24px] w-auto"
                          size="txtNunitoSansSemiBold16Gray50002"
                        >
                          Product Name:
                        </Text>
                        <Text
                          className="text-base text-center text-gray-500_02 tracking-[-0.24px] w-auto"
                          size="txtNunitoSansSemiBold16Gray50002"
                        >
                          Quantity:
                        </Text>
                        <Text
                          className="text-base text-center text-gray-500_02 tracking-[-0.24px] w-auto"
                          size="txtNunitoSansSemiBold16Gray50002"
                        >
                          Price in LKR:
                        </Text>
                        <Text
                          className="text-base text-center text-gray-500_02 tracking-[-0.24px] w-auto"
                          size="txtNunitoSansSemiBold16Gray50002"
                        >
                          Cheque No:
                        </Text>
                        <Text
                          className="text-base text-center text-gray-500_02 tracking-[-0.24px] w-auto"
                          size="txtNunitoSansSemiBold16Gray50002"
                        >
                          Check Amount:
                        </Text>
                        <Text
                          className="text-base text-center text-gray-500_02 tracking-[-0.24px] w-auto"
                          size="txtNunitoSansSemiBold16Gray50002"
                        >
                          Bank in Date:
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[28%]">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-blue_gray-900 text-center text-lg tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold18Bluegray900"
                          >
                            002
                          </Text>
                          <Text
                            className="mt-[19px] text-blue_gray-900 text-center text-lg tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold18Bluegray900"
                          >
                            #567
                          </Text>
                          <Text
                            className="mt-[23px] text-blue_gray-900 text-center text-lg tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold18Bluegray900"
                          >
                            Onion
                          </Text>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-start mt-[23px]">
                          <Text
                            className="text-blue_gray-900 text-center text-lg tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold18Bluegray900"
                          >
                            1000kg
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-center text-lg tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold18Bluegray900"
                          >
                            443
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-center text-lg tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold18Bluegray900"
                          >
                            002
                          </Text>
                          <Text
                            className="text-blue_gray-900 text-center text-lg tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold18Bluegray900"
                          >
                            4,00,000
                          </Text>
                        </div>
                        <Text
                          className="mt-[21px] text-blue_gray-900 text-center text-lg tracking-[-0.24px]"
                          size="txtNunitoSansSemiBold18Bluegray900"
                        >
                          01/01/2023
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold font-sfprotext leading-[normal] min-w-[330px] mt-[25px] rounded-[13px] text-center text-xl tracking-[-0.24px]"
                  color="black_900"
                  variant="outline"
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBillOnePage;
