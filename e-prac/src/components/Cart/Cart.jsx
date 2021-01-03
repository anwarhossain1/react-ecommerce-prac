import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles';
import Cartitem from './CartItem/Cartitem';
import { Link } from 'react-router-dom';


const Cart = ({cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart}) => {
    const classes=useStyles();

    const handleEmptyCart = () => onEmptyCart();

    const EmptyCart = () =>(
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link className={classes.link} to="/">start adding some</Link>!
        </Typography>
    )

    const FilledCart= () =>(
      
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item)=>(
                
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div><Cartitem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/></div>
                    </Grid>

            ))}

        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">
                Subtotal:{cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="secondary">Checkout</Button>
            </div>

        </div>
        </>
         
      
    )
    if(!cart.line_items) return 'loading';
  
     

    return (
       <Container>
           <div className={classes.toolbar}/>
           <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
           {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
       </Container>
    )
}

export default Cart;
