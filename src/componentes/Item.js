import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({ Products }) => {
    return (
        <>
            <Card className='conte-item'>
                <CardActionArea>
                    <CardContent>
                        <Link className='text-center' to={`/product/${Products.id}`}>
                            <CardMedia className='conte-item2'>
                                <img src={Products.image} className='ImageItenList' alt='producto-detalle' />
                            </CardMedia>
                            <CardContent className='conte-item2'>
                                <Typography gutterBottom variant="h5" component="div">
                                    <h2 className='letracard'>{Products.title}</h2>
                                </Typography>
                                <Typography >
                                    <p>{Products.price}</p>
                                </Typography>
                            </CardContent>
                        </Link>
                    </CardContent>

                </CardActionArea>
            </Card>
        </>
    )
}
export default Item