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
import data from '../../../enviroment'
const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}))
function useLoadResource() {
  const classes = useStyles()

  const [productos, setProductos] = useState([])

  const [limit, setLimit] = useState(25)
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch(`http://${data.number}/productos`)
      .then(response => response.json())
      .then(data => {
        setProductos(data)
      })
      .catch(error => console.log('Hubo un error ' + error))
  }, [])

  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <>

      <Card

      >

        <Box minWidth={1050}>
          <Table className="tabla_productos">

            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography>
                    <Box fontWeight="fontWeightBold">
                      Foto
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <Box fontWeight="fontWeightBold">
                      Nombre
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <Box fontWeight="fontWeightBold">
                      Precio
                    </Box>
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography>
                    <Box fontWeight="fontWeightBold">
                      Descartar
                    </Box>
                  </Typography>
                </TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {productos.slice(0, limit).map((producto) => (
                <TableRow
                  hover
                >
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={producto.source}
                      >
                      </Avatar>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textPrimary"
                      variant="body1"
                      className="interes">
                      {producto.nombre}
                    </Typography>
                  </TableCell>
                  <TableCell >
                    <Typography
                      color="textPrimary"
                      variant="body1"
                      className="interes">
                      {producto.precio}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <i className="far fa-trash-alt garbage"></i>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <TablePagination
          component="div"
          count={productos.length}
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

export default useLoadResource
