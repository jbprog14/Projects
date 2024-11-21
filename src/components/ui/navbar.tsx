export default function Navbar() {
  return (
    <nav className="border-b-2 border-slate-600 min-w-[700px]">
      <div className="flex justify-between items-center p-4 ">
        <div className="flex space-x-5">
          <img
            src="\svgIcons\3BAR.svg"
            alt="3barIcon"
            className="w-[40px] object-cover cursor-pointer hover:-translate-y-0.5 transition duration-300"
          />

          <img
            src="\logos\F1M5_Logo.webp"
            alt="fun88"
            className="max-w-[300px] w-[200px] object-contain"
          />
        </div>

        <div className="flex space-x-5 items-center">
          <img
            src="\svgIcons\wallet.svg"
            alt="wallet"
            className="w-[50px] object-cover cursor-pointer"
          />
          <h1 className="text-sky-500 font-extrabold text-4xl">$ 1990.6</h1>
          <h1 className="h-10 w-0.5 bg-gradient-to-b from-transparent via-sky-500 to-transparent"></h1>
          <img
            src="\svgIcons\userhead.svg"
            alt="user"
            className="w-[50px] cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
}
