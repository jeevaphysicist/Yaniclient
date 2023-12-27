import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, SelectBox, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const thisWeekOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardmainPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[33px] w-[33px]"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: (
        <>
          <Text className="my-auto md:text-[22px] sm:text-xl tracking-[-0.24px]">
            Dashboard
          </Text>
          <Line className="bg-light_green-A700 h-[39px] my-[13px] rotate-[-90deg] w-2" />
        </>
      ),
      href: "/dashboardmain",
      active: window.location.pathname === "/dashboardmain",
    },
    {
      icon: (
        <Img
          className="h-[33px] w-[33px]"
          src="images/img_receiptlong.svg"
          alt="receiptlong"
        />
      ),
      label: (
        <Text className="my-auto md:text-[22px] sm:text-xl tracking-[-0.24px]">
          Transactions
        </Text>
      ),
    },
    {
      icon: (
        <Img
          className="h-[33px] mb-2 w-[33px]"
          src="images/img_television.svg"
          alt="television"
        />
      ),
      label: (
        <Text className="my-auto md:text-[22px] sm:text-xl tracking-[-0.24px]">
          Create Bills
        </Text>
      ),
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
      label: (
        <Text className="my-auto md:text-[22px] sm:text-xl tracking-[-0.24px]">
          View Bills
        </Text>
      ),
      href: "/viewbill",
      active: window.location.pathname === "/viewbill",
    },
    {
      icon: (
        <Img
          className="h-[33px] mb-3 w-[33px]"
          src="images/img_television_blue_gray_900.svg"
          alt="television_One"
        />
      ),
      label: (
        <Text className="my-auto md:text-[22px] sm:text-xl tracking-[-0.24px]">
          Add Farm Product
        </Text>
      ),
      href: "/addfarmproductsthree",
      active: window.location.pathname === "/addfarmproductsthree",
    },
    {
      icon: (
        <Img
          className="h-[33px] mb-[9px] w-[33px]"
          src="images/img_home.svg"
          alt="home"
        />
      ),
      label: (
        <Text className="my-auto md:text-[22px] sm:text-xl tracking-[-0.24px]">
          Add Produced Product
        </Text>
      ),
      href: "/addproducedproducts",
      active: window.location.pathname === "/addproducedproducts",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-bramptonserifregulardemo items-center justify-start mx-auto pb-[3px] pr-[3px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 sm:grid items-start justify-start mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[356px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto rounded-br-[24px] rounded-tr-[24px] shadow-bs1 top-[0]"
          >
            <Text
              className="mt-[29px] mx-2.5 sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
              size="txtBramptonSerifRegularDemo40"
            >
              Yani Lanka
            </Text>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "18px 18px 18px 25px",
                  gap: "18px",
                  color: "#2c323b",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "24px",
                  [`&:hover, &.ps-active`]: {
                    color: "#52d22e",
                    fontWeight: "600 !important",
                  },
                },
              }}
              className="flex flex-col font-nunitosans items-center justify-start mt-[69px] w-full"
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
          <div className="flex flex-1 flex-col font-nunitosans gap-12 items-center justify-start md:ml-[0] ml-[21px] md:mt-0 mt-[101px] w-full">
            <div className="flex flex-col gap-[27px] items-center justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900_01"
                  size="txtNunitoSansBlack36"
                >
                  Dashboard
                </Text>
                <SelectBox
                  className="leading-[normal] mt-0.5 text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.24px] w-[30%] sm:w-full"
                  placeholderClassName="text-white-A700"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_ionicons_sharp_caretdownsharp.svg"
                      alt="icon / ionicons / sharp / caret-down-sharp"
                    />
                  }
                  isMulti={false}
                  name="frame16636"
                  options={thisWeekOptionsList}
                  isSearchable={false}
                  placeholder="This Week"
                  shape="round"
                  size="xs"
                />
              </div>
              <div className="bg-light_green-A700 flex flex-col items-center justify-start p-[46px] md:px-10 sm:px-5 rounded-[25px] shadow-bs1 w-full">
                <div className="flex flex-col md:grid-cols-3 md:grid-rows-1 items-center md:justify-center justify-start mb-3 w-[87%] md:w-full">
                  <div className="flex flex-row gap-[104px] md:gap-[] md:gap-x-[] md:gap-y-[] md:grid-cols-3 md:grid-rows-1 md:items-center items-start justify-between w-auto md:w-full">
                    <Button
                      className="flex items-center justify-center rounded-lg w-14"
                      color="green_50"
                    >
                      <Img
                        className="h-9"
                        src="images/img_user_light_green_a700.svg"
                        alt="user_One"
                      />
                    </Button>
                    <Button
                      className="flex items-center justify-center rounded-lg w-14"
                      color="green_50"
                      size="sm"
                    >
                      <Img
                        className="h-[38px]"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                    </Button>
                    <div className="bg-green-50 flex flex-col items-center justify-end p-[15px] rounded-lg w-14">
                      <Button
                        className="flex h-[25px] items-center justify-center mt-0.5 w-[25px]"
                        shape="square"
                        size="xs"
                      >
                        <Img
                          className="h-5"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row md:gap-5 md:grid-cols-3 md:grid-rows-1 items-center justify-between mt-8 w-full">
                    <Text
                      className="leading-[87.00%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtNunitoSansBold24WhiteA700"
                    >
                      <>
                        Total
                        <br /> Amount
                      </>
                    </Text>
                    <Text
                      className="leading-[87.00%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtNunitoSansBold24WhiteA700"
                    >
                      <>
                        Cleared
                        <br /> Amount
                      </>
                    </Text>
                    <Text
                      className="leading-[89.00%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtNunitoSansBold24WhiteA700"
                    >
                      <>
                        Pending <br />
                        Amount
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row md:grid-cols-4 md:grid-rows-1 items-center justify-between md:m-[] md:mb-[] md:ml-[] md:mr-[] mt-6 md:mt-[] w-[95%] md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                      size="txtNunitoSansBlack30"
                    >
                      300k
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                      size="txtNunitoSansBlack30"
                    >
                      300k
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                      size="txtNunitoSansBlack30"
                    >
                      300k
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-col justify-start p-[7px] rounded-[25px] shadow-bs1 w-full">
                <Text
                  className="md:ml-[0] ml-[19px] mt-1.5 text-blue_gray-900 text-center text-xl tracking-[-0.24px]"
                  size="txtNunitoSansBold20"
                >
                  Recent Bills
                </Text>
                <div className="bg-gray-300_ad flex sm:flex-col flex-row md:gap-5 md:grid md:grid-cols-4 md:grid-rows-1 items-start justify-end md:m-[] sm:m-auto ml-[15px] mt-2.5 md:mx-auto p-2.5 md:p-[] md:pb-[] md:pl-[] md:pr-[] md:pt-[] rounded-[10px] w-[98%] md:w-full">
                  <Text
                    className="sm:mt-0 mt-[3px] text-center text-gray-700 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansBold14"
                  >
                    GRN/RGN
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[92px] text-[15px] text-center text-gray-700 tracking-[-0.24px]"
                    size="txtNunitoSansBold15"
                  >
                    Date
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[114px] sm:mt-0 mt-[3px] text-center text-gray-700 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansBold14"
                  >
                    Price
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[70px] mr-[7px] sm:mt-0 mt-1 text-center text-gray-700 text-sm"
                    size="txtNunitoSansBold14"
                  >
                    Payment Status
                  </Text>
                </div>
                <div className="flex flex-row md:gap-5 md:grid md:grid-cols-4 md:grid-rows-1 items-start justify-between md:m-[] ml-10 sm:ml-[0] mt-4 md:mx-auto w-[86%] md:w-full">
                  <Text
                    className="mt-[5px] text-[15px] text-center text-gray-900_01 tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold15"
                  >
                    GRN-123
                  </Text>
                  <Text
                    className="mt-[5px] text-center text-gray-500 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14"
                  >
                    1JAN23
                  </Text>
                  <Text
                    className="sm:m-[] mt-[5px] sm:mt-[] text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    5,00,000 LKR
                  </Text>
                  <Img
                    className="h-[27px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
                <div className="bg-gray-300_84 flex flex-row sm:gap-5 sm:grid sm:grid-cols-4 sm:grid-rows-1 items-start justify-between md:ml-[0] ml-[15px] mt-5 p-[5px] rounded-[10px] w-[98%] md:w-full">
                  <Text
                    className="ml-[21px] mt-[3px] text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    GRN-123
                  </Text>
                  <Text
                    className="mt-[3px] text-center text-gray-500 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14"
                  >
                    1JAN23
                  </Text>
                  <Text
                    className="mt-[3px] text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    5,00,000 LKR
                  </Text>
                  <Img
                    className="h-6 mr-[39px] w-6"
                    src="images/img_iconjamicons.svg"
                    alt="iconjamicons"
                  />
                </div>
                <div className="flex flex-row sm:gap-5 sm:grid sm:grid-cols-4 sm:grid-rows-1 items-start justify-between md:ml-[0] ml-[41px] mt-5 w-[85%] md:w-full">
                  <Text
                    className="mt-[7px] text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    GRN-123
                  </Text>
                  <Text
                    className="mt-[7px] text-center text-gray-500 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14"
                  >
                    1JAN23
                  </Text>
                  <Text
                    className="mt-[7px] text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    5,00,000 LKR
                  </Text>
                  <Img
                    className="h-[27px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark_One"
                  />
                </div>
                <div className="flex flex-row sm:gap-5 sm:grid sm:grid-cols-4 sm:grid-rows-1 items-start justify-between md:ml-[0] ml-[41px] mt-[19px] w-[85%] md:w-full">
                  <Text
                    className="mt-[5px] text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    GRN-123
                  </Text>
                  <Text
                    className="mt-[5px] text-center text-gray-500 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14"
                  >
                    1JAN23
                  </Text>
                  <Text
                    className="mt-1 text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    5,00,000 LKR
                  </Text>
                  <Img
                    className="h-[27px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark_Two"
                  />
                </div>
                <div className="bg-gray-300_84 flex flex-row sm:gap-5 sm:grid sm:grid-cols-4 sm:grid-rows-1 items-start justify-between md:ml-[0] ml-[15px] mt-5 p-[5px] rounded-[10px] w-[98%] md:w-full">
                  <Text
                    className="ml-[21px] mt-[3px] text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    GRN-123
                  </Text>
                  <Text
                    className="mt-[3px] text-center text-gray-500 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14"
                  >
                    1JAN23
                  </Text>
                  <Text
                    className="mt-[3px] text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    5,00,000 LKR
                  </Text>
                  <Img
                    className="h-6 mr-[39px] w-6"
                    src="images/img_iconjamicons.svg"
                    alt="iconjamicons_One"
                  />
                </div>
                <div className="flex flex-row sm:gap-5 sm:grid sm:grid-cols-4 sm:grid-rows-1 items-start justify-between md:ml-[0] ml-[41px] mt-5 w-[85%] md:w-full">
                  <Text
                    className="mt-[5px] text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    GRN-123
                  </Text>
                  <Text
                    className="mt-[5px] text-center text-gray-500 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14"
                  >
                    1JAN23
                  </Text>
                  <Text
                    className="mt-1 text-center text-gray-900_01 text-sm tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold14Gray90001"
                  >
                    5,00,000 LKR
                  </Text>
                  <Img
                    className="h-[27px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark_Three"
                  />
                </div>
                <Button
                  className="sm:bg-colors2 cursor-pointer flex items-center sm:items-start justify-center sm:justify-start mb-2 min-w-[115px] md:ml-[0] ml-[403px] mr-[43px] mt-3.5 rounded-[18px] sm:text-white-A700"
                  rightIcon={
                    <div className="h-[19px] mt-0.5 mb-px ml-[5px] w-[19px] rounded-[9px]">
                      <Img
                        className="h-[19px] rounded-[9px]"
                        src="images/img_arrowright.svg"
                        alt="arrow_right"
                      />
                    </div>
                  }
                  size="sm"
                >
                  <div className="leading-[normal] sm:bg-colors2 sm:items-start sm:justify-start sm:text-white-A700 text-base text-center tracking-[-0.24px]">
                    View Bills
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col font-poppins gap-[26px] items-center justify-start md:ml-[0] ml-[43px] md:mt-0 mt-[183px] w-full">
            <div className="bg-white-A700 flex flex-col gap-[13px] items-start justify-start ml-5 md:ml-[0] p-[27px] sm:px-5 rounded-[25px] shadow-bs1 w-[99%] md:w-full">
              <Text
                className="md:ml-[0] ml-[13px] text-blue_gray-800 text-xl tracking-[0.01px]"
                size="txtPoppinsBold20"
              >
                Product Wastage{" "}
              </Text>
              <List
                className="flex flex-col font-roboto gap-[18px] items-center mb-1 md:ml-[0] ml-[13px] w-[92%]"
                orientation="vertical"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-[13px] text-blue_gray-800"
                        size="txtRobotoBold13"
                      >
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          648
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-normal">
                          of{" "}
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          751
                        </span>
                      </Text>
                      <Text
                        className="mt-0.5 text-blue_gray-900 text-right text-xs"
                        size="txtRobotoMedium12"
                      >
                        Carrots
                      </Text>
                    </div>
                    <div className="h-1.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-indigo_50 rounded-[2px]"></div>
                      <div
                        className="h-full absolute bg-light_green_A700_01  rounded-[2px]"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-[13px] text-blue_gray-800"
                        size="txtRobotoBold13"
                      >
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          215
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-normal">
                          {" "}
                          of{" "}
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          651
                        </span>
                      </Text>
                      <Text
                        className="mt-0.5 text-blue_gray-900 text-right text-xs"
                        size="txtRobotoMedium12"
                      >
                        Onion
                      </Text>
                    </div>
                    <div className="h-1.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-indigo_50 rounded-[2px]"></div>
                      <div
                        className="h-full absolute bg-light_green_A700  rounded-[2px]"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-[13px] text-blue_gray-800"
                        size="txtRobotoBold13"
                      >
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          84
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-normal">
                          of
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          120
                        </span>
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-right text-xs"
                        size="txtRobotoMedium12"
                      >
                        Garlic
                      </Text>
                    </div>
                    <div className="h-1.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-indigo_50 rounded-[2px]"></div>
                      <div
                        className="h-full absolute bg-light_green_A700  rounded-[2px]"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-[13px] text-blue_gray-800"
                        size="txtRobotoBold13"
                      >
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          846
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-normal">
                          of
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          804
                        </span>
                      </Text>
                      <Text
                        className="mt-0.5 text-blue_gray-900 text-right text-xs"
                        size="txtRobotoMedium12"
                      >
                        Beans
                      </Text>
                    </div>
                    <div className="h-1.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-indigo_50 rounded-[2px]"></div>
                      <div
                        className="h-full absolute bg-light_green_A700  rounded-[2px]"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="mb-0.5 text-[13px] text-blue_gray-800"
                        size="txtRobotoBold13"
                      >
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          458
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-normal">
                          of
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          901
                        </span>
                      </Text>
                      <Text
                        className="mt-[3px] text-blue_gray-900 text-right text-xs"
                        size="txtRobotoMedium12"
                      >
                        Chickpeas
                      </Text>
                    </div>
                    <div className="h-1.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-indigo_50 rounded-[2px]"></div>
                      <div
                        className="h-full absolute bg-light_green_A700  rounded-[2px]"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-[13px] text-blue_gray-800"
                        size="txtRobotoBold13"
                      >
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          215
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-normal">
                          {" "}
                          of{" "}
                        </span>
                        <span className="text-blue_gray-800 font-roboto text-left font-bold">
                          651
                        </span>
                      </Text>
                      <Text
                        className="mt-0.5 text-blue_gray-900 text-right text-xs"
                        size="txtRobotoMedium12"
                      >
                        Corn
                      </Text>
                    </div>
                    <div className="h-1.5 overflow-hidden relative w-full">
                      <div className="w-full h-full absolute bg-indigo_50 rounded-[2px]"></div>
                      <div
                        className="h-full absolute bg-light_green_A700  rounded-[2px]"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[25px] sm:px-5 rounded-[25px] shadow-bs2 w-full">
                <div className="flex flex-col justify-start w-[95%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[13px] text-base text-blue_gray-800 tracking-[0.01px]"
                    size="txtPoppinsBold16"
                  >
                    Overall
                  </Text>
                  <div className="font-roboto h-[191px] md:h-[213px] sm:m-[] md:ml-[0] ml-[30px] sm:ml-[] mt-[22px] relative w-[73%]">
                    <div className="absolute h-[191px] inset-y-[0] my-auto right-[4%] w-[191px]">
                      <div className="!w-[191px] h-[191px] m-auto sm:m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[191px] h-[191px] m-auto sm:m-auto overflow-visible"
                          value={21}
                          counterClockwise
                          strokeWidth={18}
                          styles={{
                            trail: { strokeWidth: 18, stroke: "#52d22e" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(90deg)",
                              stroke: "#ef0101",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <div className="!w-[191px] absolute h-[191px] hidden inset-[0] justify-center m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[191px] absolute h-[191px] hidden inset-[0] justify-center m-auto overflow-visible"
                          value={21}
                          counterClockwise
                          strokeWidth={18}
                          styles={{
                            trail: { strokeWidth: 18, stroke: "#ffbd40" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(90deg)",
                              stroke: "#ef0101",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[34%]">
                      <Text
                        className="sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800 text-center"
                        size="txtPoppinsBold28"
                      >
                        398
                      </Text>
                      <Text
                        className="text-[10px] text-center text-gray-600 tracking-[0.42px] uppercase"
                        size="txtRobotoMedium10"
                      >
                        Bills
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[26px] items-center justify-start p-1 right-[0] top-[6%]"
                      style={{
                        backgroundImage: "url('images/img_tooltip.svg')",
                      }}
                    >
                      <Text
                        className="mb-[3px] text-blue_gray-800 text-center text-xs tracking-[0.50px] uppercase"
                        size="txtRobotoMedium12Bluegray800"
                      >
                        32%
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[22%] flex flex-col h-[26px] items-center justify-start p-1 right-[4%]"
                      style={{
                        backgroundImage: "url('images/img_tooltip.svg')",
                      }}
                    >
                      <Text
                        className="hidden mb-[3px] text-blue_gray-800 text-center text-xs tracking-[0.50px] uppercase"
                        size="txtRobotoMedium12Bluegray800"
                      >
                        32%
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[26px] items-center justify-start left-[0] p-1 top-[22%]"
                      style={{
                        backgroundImage: "url('images/img_tooltip.svg')",
                      }}
                    >
                      <Text
                        className="mb-[3px] text-blue_gray-800 text-center text-xs tracking-[0.50px] uppercase"
                        size="txtRobotoMedium12Bluegray800"
                      >
                        32%
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row font-nunitosans gap-[19px] grid grid-cols-2 justify-center mt-[53px] w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-orange-300 flex-col hidden items-center justify-center px-[17px] py-[7px] rounded-lg w-auto">
                      <Text
                        className="leading-[87.00%] text-center text-sm text-white-A700"
                        size="txtNunitoSansBold14WhiteA700"
                      >
                        <>
                          Total
                          <br /> Amount
                        </>
                      </Text>
                    </div>
                    <div className="bg-light_green-A700 flex flex-col items-center justify-center px-[17px] py-[7px] rounded-lg w-auto">
                      <Text
                        className="leading-[87.00%] text-center text-sm text-white-A700"
                        size="txtNunitoSansBold14WhiteA700"
                      >
                        <>
                          Cleared
                          <br /> Amount
                        </>
                      </Text>
                    </div>
                    <div className="bg-red-A700 flex flex-col items-center justify-center px-[17px] py-[7px] rounded-lg w-auto">
                      <Text
                        className="leading-[89.00%] text-center text-sm text-white-A700"
                        size="txtNunitoSansBold14WhiteA700"
                      >
                        <>
                          Pending <br />
                          Amount
                        </>
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardmainPage;
