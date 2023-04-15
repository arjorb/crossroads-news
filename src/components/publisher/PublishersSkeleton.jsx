const PublishersSkeleton = () => {
  return (
    <div className="flex gap-4 animate-pulse">
      <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="h-8 bg-gray-200 rounded-md w-20 mb-4"></div>
        ))}
      <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
    </div>
  );
};

export default PublishersSkeleton;
