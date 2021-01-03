import React from 'react';
import {Typography, Button, Card, CardActions,CardContent, CardMedia} from '@material-ui/core';
import useStyles from './styles'

const Cartitem = ({item,onUpdateCartQty, onRemoveFromCart}) => {

    const classes=useStyles();
    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
    return (
        <div>
            <Card>
                <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h4">{item.name}</Typography>
                    <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions>
                <div className={classes.buttons}>
                        <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                        <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                        <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                        </div>
                        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)} >Remove</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Cartitem
