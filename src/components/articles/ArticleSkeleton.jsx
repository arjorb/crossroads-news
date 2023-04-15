const ArticleSkeleton = () => {
  return (
    <div role="status" className="rounded-md relative flex gap-x-12 flex-wrap animate-pulse">
      <div className="relative mt-16 w-[295px] h-52 rounded-md bg-gray-200">
        <div className="bg-gray-300 absolute bottom-0 w-full rounded-md px-2 text-sm">
          <div className="h-2.5 bg-gray-200 rounded-md w-full my-5"></div>
          <div className="h-2 bg-gray-200 rounded-md w-full mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
