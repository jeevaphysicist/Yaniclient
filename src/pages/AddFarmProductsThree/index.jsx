import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const AddFarmProductsThreePage = () => {
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
      label: (
        <Text className="mb-[3px] md:text-[22px] sm:text-xl">Dashboard</Text>
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
        <Text className="mb-[3px] md:text-[22px] sm:text-xl tracking-[-0.24px]">
          Transactions
        </Text>
      ),
    },
    {
      icon: (
        <Img
          className="h-[33px] w-[33px]"
          src="images/img_television.svg"
          alt="television"
        />
      ),
      label: (
        <Text className="mb-[3px] md:text-[22px] sm:text-xl tracking-[-0.24px]">
          Create Bills
        </Text>
      ),
      href: "/createbill",
      active: window.location.pathname === "/createbill",
    },
    {
      icon: (
        <Img
          className="h-[33px] w-[33px]"
          src="images/img_receiptlong.svg"
          alt="receiptlong_One"
        />
      ),
      label: (
        <Text className="mb-[3px] md:text-[22px] sm:text-xl tracking-[-0.24px]">
          View Bills
        </Text>
      ),
      href: "/viewbill",
      active: window.location.pathname === "/viewbill",
    },
    {
      icon: (
        <Img
          className="h-[33px] mb-[5px] w-[33px]"
          src="images/img_television_blue_gray_900.svg"
          alt="television_One"
        />
      ),
      label: (
        <Text className="mb-1 md:text-[22px] sm:text-xl tracking-[-0.24px]">
          Add Farm Product
        </Text>
      ),
      href: "/addfarmproductsthree",
      active: window.location.pathname === "/addfarmproductsthree",
    },
    {
      icon: (
        <Img
          className="h-[33px] w-[33px]"
          src="images/img_home_light_green_a700.svg"
          alt="home"
        />
      ),
      label: (
        <>
          <Text className="md:text-[22px] sm:text-xl tracking-[-0.24px]">
            Add Produced Product
          </Text>
          <Line className="bg-light_green-A700 h-[39px] rotate-[-90deg] w-2" />
        </>
      ),
      href: "/addproducedproducts",
      active: window.location.pathname === "/addproducedproducts",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-bramptonserifregulardemo items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[26px] items-start justify-between mx-auto md:px-5 w-full">
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
                  padding: "16px 16px 16px 25px",
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
              <div className="flex flex-row font-nunitosans gap-[27px] items-start justify-center ml-[38px] mr-[180px] mt-[326px] w-[39%]">
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
          <div className="flex flex-1 flex-col font-nunitosans gap-[18px] items-start justify-start md:mt-0 mt-[111px] w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.24px]"
              size="txtNunitoSansBlack40Black900"
            >
              Add Products
            </Text>
            <div className="bg-white-A700 flex flex-col font-sfprotext md:gap-10 gap-[71px] items-center justify-start p-[29px] sm:px-5 rounded-[25px] w-full">
              <div className="bg-gray-600_1e flex sm:flex-col flex-row sm:gap-5 items-center justify-center p-[3px] rounded-lg w-[61%] md:w-full">
                <div className="flex flex-col items-center justify-end p-1">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center tracking-[-0.24px]"
                    size="txtSFProTextSemibold30"
                  >
                    Create Purchases
                  </Text>
                </div>
                <Text
                  className="bg-white-A700 h-[46px] justify-center outline outline-[1px] outline-black-900_0a pt-2 sm:px-5 px-[35px] rounded-md text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center text-shadow-ts tracking-[-0.24px] w-[283px]"
                  size="txtSFProTextSemibold30"
                >
                  Inventory
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mb-[34px] w-[90%] md:w-full">
                <div className="bg-gray-300_ad flex sm:flex-col flex-row font-nunitosans sm:gap-10 items-start justify-between p-2 rounded-[10px] w-full">
                  <Text
                    className="ml-3.5 sm:ml-[0] sm:mt-0 mt-[5px] text-center text-gray-700 text-xl tracking-[-0.24px]"
                    size="txtNunitoSansBold20Gray700"
                  >
                    Product Name
                  </Text>
                  <Text
                    className="sm:mt-0 my-[3px] text-center text-gray-700 text-xl tracking-[-0.24px]"
                    size="txtNunitoSansBold20Gray700"
                  >
                    Item Code
                  </Text>
                  <Text
                    className="sm:mt-0 mt-1.5 text-center text-gray-700 text-xl tracking-[-0.24px]"
                    size="txtNunitoSansBold20Gray700"
                  >
                    Product Quantity
                  </Text>
                  <Text
                    className="mr-[17px] sm:mt-0 my-[3px] text-center text-gray-700 text-xl"
                    size="txtNunitoSansBold20Gray700"
                  >
                    Current Price In LKR
                  </Text>
                </div>
                <div className="bg-gray-300_84 flex md:flex-col flex-row font-nunitosans md:gap-5 items-start justify-start mt-[13px] p-[9px] rounded-[10px] w-full">
                  <Text
                    className="md:ml-[0] ml-[17px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                    size="txtNunitoSansSemiBold24"
                  >
                    Nitrogen
                  </Text>
                  <div className="h-[33px] md:h-[35px] mb-0.5 md:ml-[0] ml-[130px] relative w-[6%] md:w-full">
                    <Text
                      className="m-auto text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold24Gray500"
                    >
                      #01
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px] w-max"
                      size="txtNunitoSansSemiBold24Gray500"
                    >
                      #01
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[162px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                    size="txtNunitoSansSemiBold24Gray500"
                  >
                    10kg
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[167px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
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
                <div className="font-nunitosans h-[360px] sm:h-[365px] md:h-[756px] md:ml-[0] ml-[27px] mt-[5px] relative w-[92%] md:w-full">
                  <div className="flex flex-col gap-[34px] h-full items-center justify-start ml-auto my-auto w-[17%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
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
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
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
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
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
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
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
                  </div>
                  <div className="absolute flex flex-col font-nunito h-full inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtNunitoMedium24"
                        >
                          Potash
                        </Text>
                        <Text
                          className="mt-[26px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtNunitoMedium24"
                        >
                          Potash
                        </Text>
                        <Text
                          className="mt-[37px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtNunitoMedium24"
                        >
                          Potash
                        </Text>
                        <Text
                          className="mt-[37px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtNunitoMedium24"
                        >
                          Potash
                        </Text>
                        <Text
                          className="mt-[30px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtNunitoMedium24"
                        >
                          Potash
                        </Text>
                        <Text
                          className="mt-8 text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                          size="txtNunitoMedium24"
                        >
                          Potash
                        </Text>
                      </div>
                      <div className="font-nunitosans h-[351px] relative w-[71%] md:w-full">
                        <Text
                          className="absolute right-[0] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl top-[0] tracking-[-0.24px]"
                          size="txtNunitoSansSemiBold24"
                        >
                          <span className="text-gray-900_01 font-nunitosans font-semibold">
                            5,00,000{" "}
                          </span>
                          <span className="text-gray-900_01 font-nunitosans text-sm font-semibold">
                            LKR
                          </span>
                        </Text>
                        <div className="flex flex-col h-full items-start justify-start ml-[202px] mt-0.5">
                          <Text
                            className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold24Gray500"
                          >
                            50kg
                          </Text>
                          <Text
                            className="ml-1 md:ml-[0] mt-[25px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold24Gray500"
                          >
                            5kg
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] mt-[34px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold24Gray500"
                          >
                            5kg
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] mt-[34px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold24Gray500"
                          >
                            5kg
                          </Text>
                          <Text
                            className="mt-7 text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                            size="txtNunitoSansSemiBold24Gray500"
                          >
                            10kg
                          </Text>
                        </div>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                              size="txtNunitoSansSemiBold24Gray500"
                            >
                              #01
                            </Text>
                            <Text
                              className="mt-[25px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                              size="txtNunitoSansSemiBold24Gray500"
                            >
                              #01
                            </Text>
                            <Text
                              className="mt-[34px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                              size="txtNunitoSansSemiBold24Gray500"
                            >
                              #01
                            </Text>
                            <Text
                              className="mt-[34px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                              size="txtNunitoSansSemiBold24Gray500"
                            >
                              #01
                            </Text>
                            <Text
                              className="mt-[29px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                              size="txtNunitoSansSemiBold24Gray500"
                            >
                              #01
                            </Text>
                            <div className="flex flex-row items-start justify-between mt-7 w-full">
                              <Text
                                className="mb-[3px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                                size="txtNunitoSansSemiBold24Gray500"
                              >
                                #01
                              </Text>
                              <Text
                                className="mt-[3px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl tracking-[-0.24px]"
                                size="txtNunitoSansSemiBold24Gray500"
                              >
                                50kg
                              </Text>
                              <Text
                                className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl tracking-[-0.24px]"
                                size="txtNunitoSansSemiBold24"
                              >
                                <span className="text-gray-900_01 font-nunitosans font-semibold">
                                  5,00,000{" "}
                                </span>
                                <span className="text-gray-900_01 font-nunitosans text-sm font-semibold">
                                  LKR
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold font-sfprotext leading-[normal] md:ml-[0] ml-[9px] mt-[74px] rounded-[13px] text-center text-xl tracking-[-0.24px] w-[210px]"
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

export default AddFarmProductsThreePage;
