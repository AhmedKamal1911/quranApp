import { ErrorElement, Loader } from ".";

const Loading = ({
  children,
  isFetching,
  error,
  errorElement = <ErrorElement error={error} />,
  loadingElement = <Loader />,
}) => {
  // REQUIRED FALLBACK ELEMENT
  if (isFetching) {
    return <div className="h-[80vh]">{loadingElement}</div>;
  }
  if (error) {
    return errorElement;
  }
  return children;
};

export default Loading;
