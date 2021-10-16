import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export const Forms = () => {
    return (
        <div>

            <form>
                <Typography>
                    STATIC FORM
                </Typography>
                <Card style={{ maxWidth: 450 }}>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6}>
                                <TextField label="First name" placeholder="ENter first name" variant="outlined" fullWidth />
                            </Grid>
                            <Grid xs={12} sm={6}>
                                <TextField label="Last name" placeholder="ENter Last name" variant="outlined" fullWidth />
                            </Grid>
                            <Grid xs={12}>
                                <TextField label="EMAIL" placeholder="ENter email" variant="outlined" fullWidth />
                            </Grid>
                            <Grid xs={12} >
                                <Button variant="outlined" color = "primary" >SUBMIT</Button>

                            </Grid>



                        </Grid>
                    </CardContent>

                </Card>
            </form>
        </div>
    )
}
