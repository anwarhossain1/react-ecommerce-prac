import React from 'react';
import {Card,CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';
const Product = ({product, onClickHandler}) => {

    const classes=useStyles();
    
    
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant='h5' >
                            {product.price.formatted_with_code}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{__html:product.description}} variant='body2' color="textSecondary"/>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="add to cart" onClick={()=>onClickHandler(product.id,1)}>
                        <AddShoppingCart/>

                    </IconButton>

                </CardActions>

            </Card>
            
        </div>
    )
}

export default Product;
