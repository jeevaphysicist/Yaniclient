import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const AddProducedProductsPage = () => {
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
          className="h-[33px] mb-1.5 mt-0.5 w-[33px]"
          src="images/img_television_blue_gray_900.svg"
          alt="television_One"
        />
      ),
      label: (
        <Text className="mb-2 md:text-[22px] sm:text-xl tracking-[-0.24px]">
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
          <Line className="bg-light_green-A700 h-[39px] mt-[3px] rotate-[-90deg] w-2" />
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
          <div className="flex flex-1 flex-col font-nunitosans gap-[18px] items-start justify-start w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.24px]"
              size="txtNunitoSansBlack40Black900"
            >
              Add Products
            </Text>
            <div className="bg-white-A700 flex flex-col items-start justify-start p-[29px] sm:px-5 rounded-[25px] w-full">
              <div className="flex flex-col md:gap-10 gap-[61px] justify-start mb-[74px] md:ml-[0] ml-[3px] w-[82%] md:w-full">
                <div className="bg-gray-600_1e md:h-[46px] h-[52px] md:ml-[0] ml-[194px] mr-[30px] p-[3px] relative rounded-lg w-[72%] sm:w-full">
                  <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto pt-1 px-1 right-[6%]">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center tracking-[-0.24px]"
                      size="txtNunitoSansSemiBold30"
                    >
                      Inventory
                    </Text>
                  </div>
                  <Text
                    className="absolute bg-white-A700 h-max inset-y-[0] justify-center left-[6%] my-auto outline outline-[1px] outline-black-900_0a sm:px-5 px-7 py-0.5 rounded-md text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center text-shadow-ts tracking-[-0.24px] w-[292px]"
                    size="txtNunitoSansSemiBold30"
                  >
                    Create Purchases
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                    size="txtNunitoSansBold24"
                  >
                    Product Name
                  </Text>
                  <div className="bg-gray-600_1e border border-gray-300_01 border-solid flex flex-col items-end justify-start mt-1.5 p-[22px] sm:px-5 rounded-[12px] w-[95%] md:w-full">
                    <Img
                      className="h-2.5 mb-[5px] mt-0.5"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                  </div>
                  <Text
                    className="ml-0.5 md:ml-[0] mt-[27px] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                    size="txtNunitoSansBold24"
                  >
                    Product Quantity
                  </Text>
                  <div className="flex md:flex-col flex-row font-sfprotext gap-[11px] items-start justify-between w-full">
                    <div className="bg-gray-600_1e border border-gray-300_01 border-solid h-[63px] mb-[5px] md:mt-0 mt-0.5 rounded-[12px] w-[95%]"></div>
                    <div className="h-[71px] relative w-[4%] md:w-full">
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[57%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center tracking-[-0.24px]"
                            size="txtSFProTextMedium32Bluegray900"
                          >
                            +
                          </Text>
                          <Text
                            className="sm:text-[29px] md:text-[31px] text-[33px] text-blue_gray-900 text-center tracking-[-0.24px]"
                            size="txtSFProTextMedium33"
                          >
                            -
                          </Text>
                        </div>
                      </div>
                      <div className="absolute border border-gray-400 border-solid flex flex-col h-max inset-[0] items-center justify-center m-auto py-[29px] rounded-md w-full">
                        <Line className="bg-gray-500_01 h-px mt-1.5 w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row font-nunitosans sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[19px] w-4/5 md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansBold24"
                    >
                      Item Code
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansBold24"
                    >
                      Current Price In LKR
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[47px] items-center justify-between mt-1.5 w-[97%] md:w-full">
                    <div className="bg-gray-600_1e border border-gray-300_01 border-solid h-[63px] rounded-[12px] w-[47%]"></div>
                    <div className="bg-gray-600_1e border border-gray-300_01 border-solid h-[63px] rounded-[12px] w-[47%]"></div>
                  </div>
                  <Button className="cursor-pointer font-bold leading-[normal] min-w-[197px] ml-0.5 md:ml-[0] mt-24 rounded-[29px] md:text-2xl sm:text-[22px] text-[26px] text-center tracking-[-0.24px]">
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducedProductsPage;
