/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'

import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}))

function LoadCustomers() {
  const classes = useStyles()

  const [customers, setCustomers] = useState([])

  const [limit, setLimit] = useState(25)
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch('http://localhost:4000/api/customers')
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data)
      })
      .catch((error) => console.log('Hubo un error ' + error))
  }, [])

  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <>
      <Card>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography>
                    <Box fontWeight="fontWeightBold">Foto</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <Box fontWeight="fontWeightBold">Nombre</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <Box fontWeight="fontWeightBold">Identificacion</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <Box fontWeight="fontWeightBold">Etapa</Box>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {customers.slice(0, limit).map((customer, i) => (
                <TableRow key={i} hover>
                  <TableCell>
                    <Box
                      alignItems="center" // deepscan-disable-line REACT_MISSING_KEY_PROP
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={customer.foto}
                      ></Avatar>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textPrimary"
                      variant="body1"
                      className="interes"
                    >
                      {customer.nombre}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textPrimary"
                      variant="body1"
                      className="interes"
                    >
                      {customer.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textPrimary"
                      variant="body1"
                      className="interes"
                    >
                      {customer.etapa}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <TablePagination
          component="div"
          count={customers.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[25, 50, 100]}
        />
      </Card>
    </>
  )
}

export default LoadCustomers
