import React from "react";

const date = new Date();
const day = ["Null","Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7","Chủ "];
const month = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "NTháng 12",
];

const Header = () => {
  return (
    <header
      className="bg-todo-header-day bg-cover bg-center border-b-1 border-gray-300 px-4 py-6"
      style={{
        backgroundColor: "pink",
      }}
    >
      <h1 className="text-2xl text-white" >
        {day[date.getDay()]}-Ngày {date.getDate()}
      </h1>
      <p className="pt-1 text-lg text-gray-100" >
        {month[date.getMonth()]}
      </p>
    </header>
  );
};
export default Header;
