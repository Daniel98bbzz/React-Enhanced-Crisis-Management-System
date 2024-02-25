import { useContext } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { SessionContext } from "../context/SessionContext";

const columns = [
  // { field: "_id", headerName: "ID", width: 200 },
  { field: "clientName", headerName: "Client Name", width: 200 },
  {
    field: "date",
    headerName: "Date",
    width: 200,
    renderCell: (params) => {
      const date = new Date(params.value);
      return date.toLocaleDateString();
    },
  },
  { field: "time", headerName: "Time", width: 200 },
  { field: "topic", headerName: "Topic", width: 200 },
  { field: "notes", headerName: "Notes", width: 200 },
];

const Table = () => {
  const { state, dispatch } = useContext(SessionContext);
  const rows = state?.sessions || [];

  return (
    <Box sx={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        onRowClick={(row) => {
          dispatch({ type: "SELECT", payload: row.row });
        }}
      />
    </Box>
  );
};
export default Table;
