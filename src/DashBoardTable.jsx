import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  IconButton,
} from '@mui/material';
import { samplejson } from './Dummy';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControl from '@mui/material/FormControl';

const columnTypes = ['serial', 'int', 'float', 'object'];

const DashBoardTable = () => {
  // const handleTypeChange = (column, value) => {
  //   // 
  // };

  // const handleDeleteColumn = (column) => {
  //   // Logic to delete a column if needed
  // };

  const jsonData = samplejson;

  return (
    <TableContainer component={Paper} sx={{ width: '900px' }}>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              'td, th': { borderRight: '1px solid #E3E4E5' },

              th: {
                backgroundColor: '#F4F6FC',
                borderTop: '1px solid #E3E4E5',
                padding: '0px',
              },
            }}
          >
            {jsonData?.table_headers.map((column, index) => (
              <TableCell key={index}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1px 0px 1px 10px',
                    fontWeight: '700',
                    fontSize: '13px',
                    borderBottom: '1px solid #E3E4E5',
                    fontFamily: '"Noto Sans", sans-serif',
                  }}
                >
                  <label>{column?.name}</label>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    padding: '5px 20px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <FormControl
                    sx={{
                      m: 1,
                      minWidth: 120,
                      textTransform: 'capitalize',
                    }}
                    size="small"
                  >
                    <Select
                      value={column?.type}
                      // onChange={(e) => handleTypeChange(column, e.target.value)}
                      sx={{
                        fontSize: '12px',
                        fontWeight: '600',
                        fontFamily: '"Noto Sans", sans-serif',
                      }}
                    >
                      {columnTypes.map((type, i) => (
                        <MenuItem
                          key={i}
                          value={type}
                          sx={{ textTransform: 'capitalize', fontSize: '12px' }}
                        >
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {jsonData?.table_data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                'td, th': {
                  borderRight: '1px solid #E3E4E5',
                  borderTop: '1px solid #E3E4E5',
                  padding: '7px 10px',
                  fontWeight: '600',
                  fontFamily: '"Noto Sans", sans-serif',
                  fontSize: '12px',
                },
              }}
            >
              {row.map((columnVal, colIndex) => (
                <TableCell key={colIndex}>{columnVal}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashBoardTable;
