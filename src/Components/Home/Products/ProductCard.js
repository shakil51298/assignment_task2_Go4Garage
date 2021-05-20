import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 240,
    },
    media: {
        minHeight:0,
    },
});

const ProductCard = (props) => {

    const classes = useStyles();

    const { _id, title, Desc, price } = props.products;
    return (
        <div className="col-md-3 mt-4">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{Desc}</Typography>
                    <h3>{price}</h3>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default ProductCard; <h1>this si pro</h1>