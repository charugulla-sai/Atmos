export default function Search() {
  return (
    <div className="w-[480px]">
      <form className="bg-[#ffffff2b] flex gap-0 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 bg-[#ffffff2b] text-gray-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          className=" placeholder-[#ffffffc6] p-2 w-full bg-[#ffffff2b] outline-none text-gray-50 "
          placeholder="Search for loacation"
        />
      </form>
    </div>
  );
}
