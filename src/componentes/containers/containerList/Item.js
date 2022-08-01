import React from 'react'
import { Link } from 'react-router-dom'
import '../../header/style.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({ Products }) => {
    return (
        <>
            <Card className='conte-item'>
                <CardActionArea>
                    <CardContent>
                        <Link className='text-center' to={`/product/${Products.id}`}>
                            <div className='bg-red h-56 w-44 flex justify-center items-center'>
                                <img src={Products.image} className='object-cover object-center w-full h-56' alt='producto-detalle' />
                            </div>
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