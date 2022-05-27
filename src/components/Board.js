import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { categories } from "../boards/test.json"; 

export default () => {
    console.log(categories);

    return (
        <Grid container spacing={7}>
            {Object.keys(categories).map(key => (
                <Grid item xs={2.2} key={key}>
                    <Card>
                        <CardContent>
                            <Typography variant="h2">
                                {key}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            {[10,20,30,40,50].map(i => (
                Object.keys(categories).map(key => (
                    <Grid item xs={2.2} key={key + i}>
                        <Button variant="contained" style={{padding: '15px 100px'}}>
                            <Typography variant="text">
                                {i}
                            </Typography>
                        </Button>
                    </Grid>
                ))
            ))}
        </Grid>
    )
}