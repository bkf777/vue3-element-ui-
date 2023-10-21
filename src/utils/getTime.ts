export const getTime = () => {
  const date = new Date();
  const hour = date.getHours();
  let msg: string = "";
  if (hour < 6) {
    msg = "凌晨好";
  } else if (hour < 12) {
    msg = "上午好";
  } else if (hour < 14) {
    msg = "中午好";
  } else if (hour < 17) {
    msg = "下午好";
  } else {
    msg = "晚上好";
  }
  return msg;
};
