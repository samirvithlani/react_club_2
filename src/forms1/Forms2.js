import { Button, Card, CardContent, Grid, Input, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { formInputs } from './FormElements'

export const Forms2 = () => {
    return (
        <div>

            <form>
                <Typography>
                    DYNAMIC FORM
                </Typography>
                <Card style={{ maxWidth: 450 }}>
                    <CardContent>
                        <Grid container spacing={1}>
                            {
                                formInputs.map(input => <Grid xs={12} sm={6}>
                                    <TextField {...input}/>
                                </Grid>

                                )
                            }
                            <Grid xs={12} >
                                <Button variant="outlined" color="primary" >SUBMIT</Button>
                            </Grid>



                        </Grid>
                    </CardContent>

                </Card>
            </form>
        </div>
    )
}
