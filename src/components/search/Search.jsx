export default function Search({ activeTab, searchTerm, setSearchTerm }) {
  return (
    <>
      <div className="w-300 my-10 flex justify-center">
        <input
          type="text"
          className="border-2 border-gray-300 w-[70%] p-2 rounded-md outline-gray-400"
          placeholder={`Search ${activeTab}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
}
