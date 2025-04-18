const filterInPlay = (data) => {
  let inPlay = [];
  if (data) {
    inPlay =
      Object.values(data).length > 0 &&
      Object.keys(data)
        .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
        .filter((key) => {
          return data[key]?.inPlay === 1 && data[key]?.visible === true;
        });
    return inPlay;
  }
};

export default filterInPlay;
