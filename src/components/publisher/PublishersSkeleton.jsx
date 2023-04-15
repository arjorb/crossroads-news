const PublishersSkeleton = () => {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div role="status" className=" max-w-full animate-pulse">
            <div className="h-8 bg-gray-200 rounded-md dark:bg-gray-200 w-20 mb-4"></div>
          </div>
        ))}
    </>
  );
};

export default PublishersSkeleton;
