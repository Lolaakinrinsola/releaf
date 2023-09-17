import React from "react";
import TableComponent from "../../../components/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useState } from "react";
import { headers, rowHeader } from "./TableDetails";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const UserTable = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 8;
  const offset = currentPage * itemsPerPage;
  const currentPageData = rowHeader.slice(offset, offset + itemsPerPage);
  return (
    <TableComponent
      headers={headers}
      data={rowHeader}
      setCurrentPage={setCurrentPage}
      itemsPerPage={itemsPerPage}
    >
      {currentPageData?.map((val, index) => (
        <TableRow
          key={index}
          className="flex items-center border-b-[1px]  justify-between space-x-[6em]  text-left px-[2em] py-[2em] text-[#021F2C] min-w-full hover:bg-[#6FFC2D] hover:cursor-pointer "
        >
          <TableCell>
            <div className="flex gap-5 items-center w-full">
              <div className="rounded-full bg-black text-white p-[1em] grid justify-center h-fit w-fit">
                <p className="text-[1.5em] font-semibold">
                  {val.initial.toUpperCase()}
                </p>
              </div>
              <p className="text-[1.5em]">{val.name}</p>
            </div>
          </TableCell>
          <TableCell>
            <p className="text-[1.5em]">{val.email}</p>
          </TableCell>
          <TableCell>
            <p className="text-[1.5em]">{val.accNo}</p>
          </TableCell>

          <TableCell>
            <div className="flex gap-3 items-center">
            <div
              className={`p-[.4em] rounded-full w-fit h-fit ${
                val.status === "Active" && "bg-[#347EF7]"
              } ${
                val.status === "Blocked" && "bg-[#F58D40]"
              } ${
                val.status === "Rejected" && "bg-[#F7444D]"
              } ${
                val.status === "Inactive" && "bg-[#E8AA00]"
              }`}
            >
            </div>
              <p className="text-[1.5em]">{val.status}</p>

            </div>
          </TableCell>
          <TableCell>
            <p className="text-[1.5em]">{val.balance}</p>
          </TableCell>
          <TableCell>
            <p className="text-[1.5em]">{val.plan}</p>
          </TableCell>

          <TableCell className="  text-center ">
            <p className="text-[1.5em]">{val.location}</p>
          </TableCell>
          <TableCell className="  text-center ">
            <p className="text-[2em]">
              <BiDotsHorizontalRounded />
            </p>
          </TableCell>
        </TableRow>
      ))}
    </TableComponent>
  );
};

export default UserTable;
