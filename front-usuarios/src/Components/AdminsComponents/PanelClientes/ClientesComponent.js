import React from 'react'
import NavbarAdmins from '../navBar/navBarPC'
import ToggleMenuAdmins from '../navBar/TogglemenuAdmins'
import LoadCustomers from './LoadCustomers'
import filtroproducto from './FilterTable'
import { Redirect } from 'react-router-dom'
import {
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  TextField
} from '@material-ui/core'

function PanelProducts() {
  if ((localStorage.getItem('auth') === 'false')) {
    return <Redirect to='/login'/>
  } else {
    return (
        <>
        <NavbarAdmins />
        <Container maxWidth="lg">
            <Grid container direction="row" justify="flex-end" spacing={10}>
                <Grid item lg={2} md={2} xs={0}>
                    <ToggleMenuAdmins/>
                </Grid>
                <Grid item lg={10} md={10} xs={12}>

                <Box mt={3}>
                    <Card>
                    <CardContent>
                        <Box maxWidth={500}>
                        <TextField onKeyUp={filtroproducto}
                            fullWidth
                            placeholder="Buscar cliente"
                            variant="outlined"
                            id="Input"
                        />
                        </Box>
                    </CardContent>
                    </Card>
                </Box>

                    <LoadCustomers/>

                </Grid>
            </Grid>
        </Container>
        </>
    )
  }
}

export default PanelProducts
