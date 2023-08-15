const useTime = (time) => {
  const date = new Date(time);

  const formattedDate = `${date.toISOString().split("T")[0]}`;
  const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const settingTime = formattedDate + " [" + formattedTime + "]";

  return [settingTime];
};

export default useTime;
