const SearchModal = ({ search }) => {
  return (
    <>
      {search && (
        <div className="fixed top-0 left-0  w-full h-screen bg-black/70 flex justify-center pt-20 z-50">
          <div className="bg-white w-5/12 h-[40vh] rounded-md p-5"></div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
