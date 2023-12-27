import React from "react";

const sizeClasses = {
  txtSFProTextMedium24: "font-medium font-sfprotext",
  txtNunitoSansSemiBold24Black900: "font-nunitosans font-semibold",
  txtPoppinsBold16: "font-bold font-poppins",
  txtNunitoSansSemiBold24Gray500: "font-nunitosans font-semibold",
  txtBramptonSerifRegularDemo40: "font-bramptonserifregulardemo font-normal",
  txtNunitoSansBlack40: "font-black font-nunitosans",
  txtNunitoSansBold24WhiteA700: "font-bold font-nunitosans",
  txtNunitoSansSemiBold14Gray90001: "font-nunitosans font-semibold",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtNunitoSansSemiBold18Bluegray900: "font-nunitosans font-semibold",
  txtNunitoSansBlack36: "font-black font-nunitosans",
  txtSFProTextSemibold30: "font-semibold font-sfprotext",
  txtBramptonSerifRegularDemo88: "font-bramptonserifregulardemo font-normal",
  txtNunitoSansSemiBold16Gray50002: "font-nunitosans font-semibold",
  txtRobotoMedium12Bluegray800: "font-medium font-roboto",
  txtNunitoSansBold15: "font-bold font-nunitosans",
  txtSFProTextSemibold32: "font-semibold font-sfprotext",
  txtNunitoSansBold14: "font-bold font-nunitosans",
  txtNunitoSansSemiBold24: "font-nunitosans font-semibold",
  txtNunitoSansBold36: "font-bold font-nunitosans",
  txtNunitoSansSemiBold26: "font-nunitosans font-semibold",
  txtPoppinsBold28: "font-bold font-poppins",
  txtSFProTextMedium33: "font-medium font-sfprotext",
  txtNunitoSansBlack40Black900: "font-black font-nunitosans",
  txtSFProTextMedium32: "font-medium font-sfprotext",
  txtNunitoMedium24: "font-medium font-nunito",
  txtSFProTextRegular24: "font-normal font-sfprotext",
  txtPoppinsBold20: "font-bold font-poppins",
  txtNunitoSansRegular64: "font-normal font-nunitosans",
  txtNunitoSansBlack30: "font-black font-nunitosans",
  txtNunitoSansSemiBold16: "font-nunitosans font-semibold",
  txtNunitoSansBold20Gray700: "font-bold font-nunitosans",
  txtSFProTextMedium32Bluegray900: "font-medium font-sfprotext",
  txtNunitoSansBold24: "font-bold font-nunitosans",
  txtNunitoSansSemiBold18: "font-nunitosans font-semibold",
  txtNunitoSansBold20: "font-bold font-nunitosans",
  txtNunitoSansSemiBold30: "font-nunitosans font-semibold",
  txtRobotoMedium10: "font-medium font-roboto",
  txtNunitoSansBold14WhiteA700: "font-bold font-nunitosans",
  txtSFProTextSemibold24: "font-semibold font-sfprotext",
  txtRobotoBold13: "font-bold font-roboto",
  txtRobotoMedium12: "font-medium font-roboto",
  txtNunitoSansBold26: "font-bold font-nunitosans",
  txtNunitoSansSemiBold14: "font-nunitosans font-semibold",
  txtNunitoSansSemiBold15: "font-nunitosans font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
