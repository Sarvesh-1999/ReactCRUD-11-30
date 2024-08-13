const HOC = (WrappedComp) => {
  return function () {
    return <WrappedComp data="I AM COMING FROM HOC" />;
  };
};

export default HOC;
