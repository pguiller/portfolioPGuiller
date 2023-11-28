import { Box, Button, Typography, useTheme } from '@mui/material';
import React from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import DataTable from 'src/components/UI/Datatable/DataTable';
import { GridCellParams } from '@mui/x-data-grid';
import CStatusPill from 'src/components/UI/CStatusPill/CStatusPill';

const DataTableCard: React.FC = () => {
  const theme = useTheme();

  const data = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Smith',
      age: 40,
      jobTitle: 'Dev',
      hasCar: true,
    },
    {
      id: 2,
      firstname: 'Mary',
      lastname: 'Jannet',
      age: 45,
      jobTitle: 'Data analyst',
      hasCar: false,
    },
    {
      id: 3,
      firstname: 'Sophie',
      lastname: 'Colin',
      age: 28,
      jobTitle: 'manager',
      hasCar: false,
    },
    {
      id: 4,
      firstname: 'Baptiste',
      lastname: 'Louis',
      age: 33,
      jobTitle: 'Officer',
      hasCar: true,
    },
    {
      id: 5,
      firstname: 'Camille',
      lastname: 'Perks',
      age: 32,
      jobTitle: 'Poduct owner',
      hasCar: true,
    },
  ];

  const columns1 = [
    {
      field: 'firstname',
      headerName: 'Firstname',
      type: 'string',
      valueGetter: (params: GridCellParams) => params.row.firstname,
      flex: 1,
    },
    {
      field: 'lastname',
      headerName: 'Lastname',
      type: 'string',
      valueGetter: (params: GridCellParams) => params.row.lastname,
      flex: 1,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'string',
      valueGetter: (params: GridCellParams) => params.row.age,
      flex: 1,
    },
    {
      field: 'jobTitle',
      headerName: 'Job title',
      type: 'string',
      valueGetter: (params: GridCellParams) => params.row.jobTitle,
      flex: 1,
    },
  ];

  const columns2 = [
    {
      field: 'firstname',
      headerName: 'Firstname',
      type: 'string',
      valueGetter: (params: GridCellParams) => params.row.firstname,
      flex: 1,
    },
    {
      field: 'lastname',
      headerName: 'Lastname',
      type: 'string',
      valueGetter: (params: GridCellParams) => params.row.lastname,
      flex: 1,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'string',
      valueGetter: (params: GridCellParams) => params.row.age,
      flex: 1,
    },
    {
      field: 'jobTitle',
      headerName: 'Job title',
      type: 'string',
      valueGetter: (params: GridCellParams) => params.row.jobTitle,
      flex: 1,
    },
    {
      field: 'hasCar',
      headerName: 'Has car',
      type: 'string',
      renderCell: (params: GridCellParams) => (
        <CStatusPill severity={params.row.hasCar ? 'success' : 'error'}>
          {params.row.hasCar ? 'Has car' : 'No car'}
        </CStatusPill>
      ),
      width: 150,
    },
  ];

  const customToolBar: React.ReactNode = (
    <>
      <Button color="primary" variant="contained">
        Submit
      </Button>
      <Button color="primary">Cancel</Button>
    </>
  );

  return (
    <CInfosTitleWrapper
      title={'DataTable'}
      documentation="https://mui.com/x/react-data-grid/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <DataTable columns={columns1} rows={data} />
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <DataTable columns={columns2} rows={data} />
          <Typography variant="body2">Render jsx</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <DataTable columns={columns2} rows={data} loading />
          <Typography variant="body2">Loading</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <DataTable columns={columns2} rows={data} title="DataTable" />
          <Typography variant="body2">Title</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <DataTable columns={columns2} rows={data} pageSize={2} />
          <Typography variant="body2">Pagination</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <DataTable
            columns={columns2}
            rows={data}
            isRowSelectable={() => true}
            hasCheckboxSelection
          />
          <Typography variant="body2">Selection</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <DataTable
            columns={columns2}
            rows={data}
            hasExport={false}
            hasFilter={false}
          />
          <Typography variant="body2">No filter nor selection</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <DataTable
            columns={columns2}
            rows={data}
            toolbarButtons={customToolBar}
          />
          <Typography variant="body2">Custom toolbar</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <DataTable columns={columns2} rows={[]} />
          <Typography variant="body2">No data</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default DataTableCard;
