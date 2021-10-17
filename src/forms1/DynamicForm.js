import { Box, Container, Grid, IconButton, Paper, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const DynamicForm = () => {
    const userTemplate = { name: "", email: "", phone: "" }
    const [users, setusers] = useState([userTemplate])

    const adduser = ()=>{

        console.log("Called...")

        setusers([...users,userTemplate])
    }
    const removeUser =(index) =>{

        console.log("remove...")
        const filtersData = [...users]
        filtersData.splice(index,1)
        setusers(filtersData)
    }

    return (
        <Container>
            <Paper component={Box} p={4}>
                {
                    users.map((user, index) => (<Grid container spacing={3}>
                        <Grid item sm md={3}>
                            <TextField
                                label="Name"
                                placeholder="Enter your Name"
                                variant="outlined"
                                name="name"
                                fullWidth
                            />
                        </Grid>

                        <Grid item sm md={3}>
                            <TextField
                                label="Email"
                                placeholder="Enter your Email"
                                variant="outlined"
                                name="email"
                                fullWidth
                            />
                        </Grid>

                        <Grid item sm md={3}>
                            <TextField
                                label="Phone"
                                placeholder="Enter your Phone"
                                variant="outlined"
                                name="phone"
                                fullWidth
                            />
                        </Grid>
                        <Grid item sm md={3}>
                            <IconButton>
                                <DeleteIcon onClick = {removeUser}/>
                            </IconButton>
                        </Grid>

                    </Grid>))
                }
                <Grid item sm md={3}>
                    <IconButton>
                        <AddIcon onClick = {adduser}/>
                    </IconButton>
                </Grid>

            </Paper>
        </Container>
    )
}
