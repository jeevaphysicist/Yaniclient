import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const EditBillPage = () => {
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
      <div className="bg-gray-100 flex flex-col font-bramptonserifregulardemo items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[27px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[356px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto rounded-br-[24px] rounded-tr-[24px] shadow-bs1 top-[0]" />
          <div className="flex flex-1 flex-col font-nunitosans gap-[18px] items-start justify-start md:mt-0 mt-[111px] w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 tracking-[-0.24px]"
              size="txtNunitoSansBlack40"
            >
              Edit Bill
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-[25px] shadow-bs1 w-full">
              <div className="flex flex-col items-start justify-start mb-[3px] w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-1 md:ml-[0] w-[96%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start md:mt-0 mt-1 w-[38%] md:w-full">
                    <Text
                      className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansBold24"
                    >
                      Date
                    </Text>
                    <div className="bg-gray-600_1e border border-blue_gray-100 border-solid flex flex-col items-end justify-start p-[13px] rounded-[12px] w-full">
                      <Img
                        className="h-[33px] my-0.5 w-[33px]"
                        src="images/img_iconjamicons_gray_900_02.svg"
                        alt="iconjamicons"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start mb-1 w-[42%] md:w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansBold24"
                    >
                      Order no:
                    </Text>
                    <div className="bg-gray-600_1e border border-blue_gray-100 border-solid h-[63px] rounded-[12px] w-full"></div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[27px] w-[93%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start md:mt-0 mt-0.5 w-2/5 md:w-full">
                    <Text
                      className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansBold24"
                    >
                      GRN/RGN
                    </Text>
                    <div className="bg-gray-600_1e border border-gray-300_01 border-solid flex flex-col items-end justify-start p-[18px] rounded-[12px] w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconionicons_gray_900_02.svg"
                        alt="iconionicons_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-0.5 w-[39%] md:w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                        size="txtNunitoSansBold24"
                      >
                        Item Code
                      </Text>
                      <div className="bg-gray-600_1e border border-gray-300_01 border-solid flex flex-col items-end justify-start p-[15px] rounded-[12px] w-full">
                        <Img
                          className="h-6 mb-[3px] mt-1.5 w-6"
                          src="images/img_iconionicons_gray_900_02.svg"
                          alt="iconionicons_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[26px] w-[90%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-[49%] md:w-full">
                    <Text
                      className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansBold24"
                    >
                      Product Name
                    </Text>
                    <div className="bg-gray-600_1e border border-gray-300_01 border-solid flex flex-col items-end justify-start p-[18px] rounded-[12px] w-full">
                      <Img
                        className="h-6 mb-[3px] mr-[5px] w-6"
                        src="images/img_iconionicons_gray_900_02.svg"
                        alt="iconionicons_Three"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[37%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start mb-[7px] w-[84%]">
                          <Text
                            className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                            size="txtNunitoSansBold24"
                          >
                            Quantity
                          </Text>
                          <div className="bg-gray-600_1e border border-gray-300_01 border-solid h-[63px] mt-1 rounded-[12px] w-full"></div>
                        </div>
                        <div className="font-sfprotext md:h-[106px] h-[77px] mt-[30px] relative w-[10%]">
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[57%]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[-0.24px]"
                                size="txtSFProTextMedium32"
                              >
                                +
                              </Text>
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[-0.24px]"
                                size="txtSFProTextMedium32"
                              >
                                -
                              </Text>
                            </div>
                          </div>
                          <div className="absolute border border-gray-400 border-solid flex flex-col h-max inset-[0] items-center justify-center m-auto py-[31px] rounded-md w-full">
                            <Line className="bg-gray-500_01 h-px mt-0.5 w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[26px] w-[97%] md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-[46%] md:w-full">
                    <Text
                      className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansBold24"
                    >
                      Price in LKR
                    </Text>
                    <div className="bg-gray-600_1e border border-gray-300_01 border-solid h-[63px] rounded-[12px] w-full"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[41%] md:w-full">
                    <Text
                      className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansBold24"
                    >
                      Enter Cheque Number
                    </Text>
                    <div className="bg-gray-600_1e border border-gray-300_01 border-solid h-[63px] mt-1 rounded-[12px] w-full"></div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[29px] w-full">
                  <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[45%] md:w-full">
                    <Text
                      className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansBold24"
                    >
                      Check Amount
                    </Text>
                    <div className="bg-gray-600_1e border border-gray-300_01 border-solid h-[63px] rounded-[12px] w-full"></div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-[45%] md:w-full">
                    <Text
                      className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl tracking-[-0.24px]"
                      size="txtNunitoSansBold24"
                    >
                      Bank in Date
                    </Text>
                    <div className="bg-gray-600_1e border border-gray-300_01 border-solid flex flex-col items-end justify-end p-[13px] rounded-[12px] w-full">
                      <Img
                        className="h-[33px] mr-[5px] mt-1 w-[33px]"
                        src="images/img_iconjamicons_gray_900_02.svg"
                        alt="iconjamicons_One"
                      />
                    </div>
                  </div>
                </div>
                <Button className="cursor-pointer font-bold leading-[normal] min-w-[274px] md:ml-[0] ml-[339px] mt-10 rounded-[34px] md:text-3xl sm:text-[28px] text-[32px] text-center tracking-[-0.24px]">
                  Edit the Bill
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBillPage;
