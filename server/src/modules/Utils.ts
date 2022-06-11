// object안에 함수로 선언

const Utils = {
  success: (status: number, message: string, data?: any) => {
    return {
      status,
      message,
      data,
    };
  },
  fail: (status: number, message: string) => {
    return {
      status,
      message,
      success: false,
    };
  },
};

export default Utils;
