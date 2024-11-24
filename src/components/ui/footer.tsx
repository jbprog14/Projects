export default function Footer() {
  return (
    <div className="flex bg-white items-center justify-between mt-16 mb-5">
      <div className="group items-center cursor-pointer">
        <img src="\svgIcons\SPORTS.svg" alt="" className="w-10 h-10 mx-auto" />
        <h1 className="text-gray-500 text-xl font-medium  hover:text-sky-500">
          SPORTS
        </h1>
      </div>
      <div className="group items-center cursor-pointer">
        <img src="\svgIcons\FAVE.svg" alt="" className="w-10 h-10 mx-auto" />
        <h1 className="text-gray-500 text-xl font-medium  hover:text-sky-500">
          FAVORITES
        </h1>
      </div>
      <div className="group items-center cursor-pointer">
        <img src="\svgIcons\INVITE.svg" alt="" className="w-10 h-10 mx-auto" />
        <h1 className="text-gray-500 text-xl font-medium  hover:text-sky-500">
          INVITE
        </h1>
      </div>
      <div className="group items-center cursor-pointer">
        <img src="\svgIcons\LIVE.svg" alt="" className="w-10 h-10 mx-auto" />
        <h1 className="text-gray-500 text-xl font-medium  hover:text-sky-500">
          CASINO LIVE
        </h1>
      </div>
      <div className="group items-center cursor-pointer">
        <img src="\svgIcons\CASHIER.svg" alt="" className="w-10 h-10 mx-auto" />
        <h1 className="text-gray-500 text-xl font-medium  hover:text-sky-500">
          CASHIER
        </h1>
      </div>
    </div>
  );
}
