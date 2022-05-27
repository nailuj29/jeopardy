import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import board from "../boards/test.json"; 

const { categories } = board;
const Board = () => {
    console.log(categories);
    const [answered, setAnswered] = useState([]);
    const [answering, setAnswering] = useState(false);
    const [question, setQuestion] = useState(null);
    if (!answering) {
        return (
            <Grid container spacing={0} style={{ width: "100vw", height: "100vh" }}>
                {Object.keys(categories).map(key => (
                    <Grid item xs={2} key={key}>
                        <Card disableElevation style={{ height: "100%" }}>
                            <CardContent>
                                <Typography variant="h2" style={{ textAlign: "center" }}>
                                    {key}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {[10, 20, 30, 40, 50].map(i => (
                    Object.keys(categories).map(key => (
                        <Grid item xs={2} key={key + i}>
                            <Button disableElevation variant="contained" color="success" style={{ 
                                padding: '15px 100px', 
                                width: "100%", 
                                height: "100%"
                            }}
                            onClick={() => {
                                setAnswering(true);
                                setQuestion([i, key]);
                            }}>
                                <Typography variant="text">
                                    {answered.includes([i, key].toString()) ? "" : i}
                                </Typography>
                            </Button>
                        </Grid>
                    ))
                ))}
            </Grid>
        );
    } else {
        const questionData = categories[question[1]][question[0]];
        return (
            <Container style={{ 
                width: "100vw", 
                height: "100vh", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center" 
            }}
            onClick={() => {
                setAnswering(false);
                setAnswered([...answered, question.toString()])
            }}>
                {questionData.type === "text" ? 
                    <Typography variant="h1" style={{ textAlign: "center" }}>
                        {questionData.text}
                    </Typography> :
                    <img src={questionData.img}/>}
                
            </Container>
        )
    }
};
export default Board