const Header = () => {
  return (
    <nav className="flex items-center justify-between m-5 p-3">
      <div className=" text-3xl font-semibold">Bot</div>
      <div className=" flex items-center justify-center gap-2">
        <button className="w-20 h-10 rounded-xl bg-white text-black border border-black  text-sm hover:bg-[#dad7cd]">
          Go to chat
        </button>
        <button className="w-20 h-10 rounded-xl bg-[#023e8a] text-white text-sm hover:bg-[#0077b6]">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
