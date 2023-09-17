import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ReactPaginate from "react-paginate";

const TableComponent = ({
  headers,
  tableBanner,
  children,
  data,
  setCurrentPage,
  itemsPerPage
}) => {
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const checkingDataLength = data.length > itemsPerPage;

  return (
    <div className="overflow-x-auto">
      <div className="bg-white rounded-md   my-[20px] shadow-lg max-w-full overflow-x-auto ">
        

        <TableContainer className={`lg:w-full  `}>
          <Table>
            <TableHead>
              <TableRow
                className={` w-full  items-center border-b-[2px] border-b-[#B9BCC0] font-light flex text-[1.3em]  text-left  px-[20px] space-x-[60px]`}
              >
                {headers?.map((header) => (
                  <th className={`text-[#B9BCC0] text-left  pl-[20px] py-[10px] `}>
                    {header.toUpperCase()}
                  </th>
                ))}
              </TableRow>
            </TableHead>

            <TableBody >{children}</TableBody>
          </Table>

          <div className="min-w-full flex flex-wrap gap-5 justify-between items-center px-5 py-10 bg-white rounded-b-[8px] text-[1.5em]">
            <p className="text-[#505050]">
              Showing 1-{checkingDataLength ? itemsPerPage : data.length} of{" "}
              {data.length}
            </p>
            <div className="w-fit">
              <ReactPaginate
                className="flex justify-center gap-3 text-[#BCBCBC] items-center"
                activeLinkClassName="bg-[#0F2218] rounded-[4.5px] px-5 py-2 text-white"
                previousLabel={"Prev"}
                nextLabel={"Next"}
                nextClassName="text-[#505050]"
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </TableContainer>
      </div>
    </div>
  );
};

export default TableComponent;
