import { Avatar, CardHeader,CardMedia,CardContent,Button, Typography, CardActions,IconButton,} from '@mui/material';
import Card from '@mui/material/Card';
import per from '../assets/per.png'
import { useState } from 'react';

export const Cards = () =>{
    const [isDark, setIsDark] = useState(false);


    const Changer= () => {
        setIsDark(!isDark)
    }

    const cardStyle = {
        maxWidth: 350,
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
    }

    return (
        <Card sx ={cardStyle}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red'}} aria-label="recipe">
                        R
                    </Avatar>
                }
                 title="Рублев Николай Евгеньевич"
                 subheader="Сентрябрь 14, 2016"
            />
             <CardMedia
                component="img"
                height="194"
                image={per}
                alt="Paella dish"
            />

            <CardContent>
                <Typography variant="body2" sx={cardStyle}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
           </CardContent>
           
           <CardActions>
                <Button size="middle">Share</Button>
                <Button size="middle" onClick={Changer}>Theme</Button>
           </CardActions>
           
        </Card>
    )
}