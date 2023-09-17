import React from "react";
import Card from "../../components/Card";
import { AiOutlineSearch } from "react-icons/ai";
import {MdAdd} from 'react-icons/md'
import {BsFilter} from 'react-icons/bs'
import Button from "../../components/Button";
import UserTable from "./components/UserTable";

const Users = () => {
  const card = [
    { accountType: "Total Account", totalAmount: "3,048", percentage: 23 },
    { accountType: "Rejected Account", totalAmount: "1,642", percentage: 14 },
    { accountType: "Total Assets", totalAmount: "6,028", percentage: 22 },
    { accountType: "Active Account", totalAmount: "2,640", percentage: 12 },
  ];
  return (
    <>
      <div className=" text-2xl">
      <p className="text-[3em]  text-black font-semibold">User Management</p>
      <div className="py-[3em] grid  md:grid-cols-2 lg:grid-cols-4  gap-x-[2em] gap-y-[2em] ">
        {card.map((val) => (
          <Card
            accountType={val.accountType}
            totalAmount={val.totalAmount}
            percentage={val.percentage}
          />
        ))}
      </div>
      <div className=" ">
        <div className="w-full grid gap-y-10 md:flex md:justify-between   items-center">
          <div className="w-[100%] md:w-2/5 grid text-[1.5em] md:text-[1em] relative ">
            <input
              type="text"
              className="border border-[#989D9F]  rounded-md p-[10px] placeholder:text-[#989D9F] w-full "
              placeholder="Search name, email, location"
            />
            <div className="absolute top-[10px] right-[10px]">
              <AiOutlineSearch size="1.5em" />
            </div>
          </div>
          <div className=" w-full flex gap-5  lg:w-1/3 md:w-1/2 text-[1.5em] md:text-[1em] justify-end">
            <Button light={true} outline={true}>
                <div className="w-full flex gap-5 justify-between items-center">
                Filter by
                <BsFilter size='20px'/>
                </div>
                </Button>
            <Button >
                <div className="w-full flex gap-1 items-center text-white">
                    <MdAdd color='#fffff' size='30px'/>
                <p className="w-full">
                    
                    Add User</p>

                </div>
            </Button>
          </div>
        </div>
      </div>
      </div>
      <div className="overflow-x-auto mt-[3em]">
      <UserTable/>
      </div>
    </>
  );
};

export default Users;
