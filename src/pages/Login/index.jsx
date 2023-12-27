import React from "react";

import { Button, Img, Input, Text } from "components";

const LoginPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-bramptonserifregulardemo items-center justify-start mx-auto p-[61px] md:px-10 sm:px-5 w-full">
        <div className="sm:bg-colors bg-gray-100 flex flex-col sm:gap-[] sm:gap-x-[] sm:gap-y-[] sm:h-[] items-center justify-start sm:m-[] max-w-7xl sm:min-w-[300px] mx-auto sm:my-px p-2.5 sm:p-[] md:p-[] md:px-5 sm:py-0 md:py-1.5 rounded-[25px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between sm:m-[] sm:mb-px my-[81px] w-[98%] md:w-full">
            <div className="flex flex-col gap-9 items-end justify-start md:mt-0 mt-[9px] md:p-[] md:pb-[] md:pl-[] md:pr-[] md:pt-[] w-[35%] md:w-full">
              <Text
                className="block flex-row md:m-auto sm:text-5xl text-[68px] text-center text-gray-900"
                size="txtBramptonSerifRegularDemo88"
              >
                Yani Lanka
              </Text>
              <div className="flex flex-col font-nunitosans gap-7 items-start justify-start w-[89%] md:w-full">
                <Text
                  className="sm:hidden m-auto md:text-5xl text-[54px] text-black-900 text-center"
                  size="txtNunitoSansRegular64"
                >
                  Welcome!
                </Text>
                <Img
                  className="h-[334px] md:h-auto md:m-auto object-cover sm:w-[250px] w-[334px]"
                  src="images/img_treeplanting.png"
                  alt="treeplanting"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[88px] items-center justify-center mb-[38px] p-[62px] sm:p-[] md:px-10 sm:px-5 sm:py-1.5 rounded-[21px] shadow-bs1 w-[52%] md:w-full">
              <div className="flex flex-col font-gilroy md:gap-[27px] items-center justify-start mt-[50px] w-[96%] md:w-full">
                <div className="h-[85px] relative w-full">
                  <Text
                    className="absolute bg-colors1 font-medium left-[-20px] mb-[-13.76px] ml-14 text-2xl md:text-[22px] text-light_green-A700 sm:text-xl top-[-20px] z-[1]"
                    size="txtGilroyMedium24"
                  >
                    Username
                  </Text>
                  <Input
                    name="username"
                    placeholder="Enter Your Username"
                    className="leading-[normal] p-0 placeholder:text-black-900_7f text-base text-left w-full"
                    wrapClassName="border border-light_green-A700 border-solid h-[50px] mb-[undefinedpx] mx-auto pt-2.5 px-2.5 w-full z-[1]"
                    type="text"
                  ></Input>
                </div>
                <div className="md:h-[69px] h-[82px] relative w-full">
                  <Input
                    name="password"
                    placeholder="Enter Your Password"
                    className="leading-[normal] p-0 placeholder:text-black-900_7f sm:top-[-px] text-base text-left w-full"
                    wrapClassName="absolute border border-light_green-A700 border-solid bottom-[0] h-[50px] inset-x-[0] mx-auto pt-2.5 px-2.5 sm:top-[-px] w-full"
                    type="password"
                  ></Input>
                  <Text
                    className="absolute bg-colors1 left-10 text-2xl md:text-[22px] text-light_green-A700 sm:text-xl sm:top-[-0px] top-[15px]"
                    size="txtGilroyMedium24"
                  >
                    Password
                  </Text>
                </div>
              </div>
              <Button className="cursor-pointer font-semibold font-sfprotext leading-[normal] mb-[45px] min-w-[427px] sm:min-w-full rounded-[20px] text-2xl md:text-[22px] text-center sm:text-xl">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
