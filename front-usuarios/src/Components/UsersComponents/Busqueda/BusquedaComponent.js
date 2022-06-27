import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { Container, Grid, makeStyles } from '@material-ui/core'
import '../../../css/buscador.css'
import CategoriaComponent from '../navBar/CategoriaComponent'
import Paginate from '../Pagination/Paginate'
import Box from '@material-ui/core/Box'
import data from '../../../enviroment'
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}))

const useLoadResource = ({ categoria }) => {
  console.log(categoria)
  const classes = useStyles()
  const urlParams = new URLSearchParams(window.location.search)
  const [productos, setProductos] = useState([])
  const [load, setLoad] = useState(false)
  useEffect(() => {
    if (!load) {
      if (urlParams.get('search') !== null) {
        fetch(`http://${data.number}/productos/nombre/${urlParams.get('search')}`)
          .then(response => response.json())
          .then(data => {
            setProductos(data)
          })
          .catch(error => console.log('Hubo un error ' + error))
      } else {
        fetch(`${categoria ? `http://${data.number}/productos/categoria/${categoria}` : `http://${data.number}/productos`}`)
          .then(response => response.json())
          .then(data => {
            setProductos(data)
          })
          .catch(error => console.log('Hubo un error ' + error))
      }
      setLoad(true)
    }
  }, [urlParams, load])

  return (
    <>
      <CategoriaComponent></CategoriaComponent>
      <Container maxWidth="lg">

        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >

          {Array.isArray(productos)
            ? productos.map((producto, id) => (<a key={id} className="tarjeta" href={`http://${window.location.host}/productdetail/${producto.id}/${producto.idVendedor}`}>
            <Grid
              item
              xs={3}
            >
              <Box flexGrow={1}>
                <Card className={classes.root} id="card-products">

                  <CardMedia
                    className={classes.media}
                    image={producto.source}
                    title={producto.nombre}
                  />
                  <CardHeader id="name_product"

                    title={producto.nombre}
                    subheader={'$' + producto.precio}
                  />

                </Card>
              </Box>
            </Grid>
          </a>
            ))
            : <></>}
        </Grid>
        <Paginate></Paginate>
      </Container>
    </>
  )
}

export default useLoadResource
