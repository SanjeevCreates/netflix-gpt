import { useRef, useState } from "react";
import useGptSearch from "../hooks/useGptSearch";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const { handleGptSearchClick } = useGptSearch(searchText);
  const [loading, setLoading] = useState(false); // ✅ For better UX

  const onSearch = async () => {
    if (!searchText.current.value.trim()) return; // avoid empty search
    setLoading(true);
    await handleGptSearchClick();
    setLoading(false);
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="Funny Indian Retro Movies"
          className="p-3 my-4 ml-3 col-span-9 rounded-lg text-black"
        />
        <button
          type="button"
          className={`px-4 py-2 m-4 text-xl rounded-lg col-span-3 ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
          } text-white`}
          onClick={onSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
