/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import I18n from 'i18n-js';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { CartContext } from './Context/cartContext';
import axiosInstance from './axiosInstance';

class Cart extends Component {
    state={
      cart: [],
      error: null,
    }

    async componentDidMount() {
      try {
        const res = await axiosInstance.get('cart');
        this.setState({
          cart: res,
        });
      } catch (error) {
        this.setState({
          error,
        });
      }
    }

    render() {
      const { cart } = this.state;
      return (
        cart.map((item) => (
          <Card key={item.title} sx={{ display: 'flex', margin: 2, minHeight: 200 }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={item.image}
              alt={item.title}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

              <CardContent sx={{ flex: '1 0 auto' }}>
                
                <Box
                  component="div"
                  overflow="hidden"
                  whiteSpace="pre-line"
                  textOverflow="ellipsis"
                  height={30}
                >
                  <Typography component="div" variant="h5">
                    {item.title}
                  </Typography>
                </Box>
                <Box
                  component="div"
                  overflow="hidden"
                  whiteSpace="pre-line"
                  textOverflow="ellipsis"
                  height={60}
                >
                  <Typography
                    sx={{
                      overflow: 'hidden',
                    }}
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Rating
                  name="read-only"
                  value={item.rating.rate}
                  precision={0.5}
                  readOnly
                />
                <Typography
                  variant="h6"
                  color="text.secondary"
                  component="div"
                >
                  {I18n.toCurrency(item.price)}
                </Typography>
                <Box
                  component="div"
                  overflow="hidden"
                  whiteSpace="pre-line"
                  textOverflow="ellipsis"
                  height={30}
                >
                  <Typography component="div" variant="h5">
                    Quantity-{item.quantity}
                  </Typography>
                </Box>
              </CardContent>
            </Box>

          </Card>
        ))
      );
      // return (
      //   <CartContext.Consumer>
      //     {({
      //       addToCart, updateCart, deleteItem,
      //     }) => (
      //       <div>
      //         {cart.map((item) => {
      //           const cartItem = cart.find((x) => x.id === item.id);
      //           return (
      //             <Card key={item.title} sx={{ display: 'flex', margin: 2, minHeight: 200 }}>
      //               <CardMedia
      //                 component="img"
      //                 sx={{ width: 151 }}
      //                 image={item.image}
      //                 alt={item.title}
      //               />
      //               <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      //                 <CardContent sx={{ flex: '1 0 auto' }}>
      //                   <Box
      //             component="div"
      //             overflow="hidden"
      //             whiteSpace="pre-line"
      //             textOverflow="ellipsis"
      //             height={30}
      //           >
      //             <Typography component="div" variant="h5">
      //                   {item.title}
      //                 </Typography>
      //           </Box>
      //                   <Box
      //             component="div"
      //             overflow="hidden"
      //             whiteSpace="pre-line"
      //             textOverflow="ellipsis"
      //             height={60}
      //           >
      //             <Typography
      //                   sx={{
      //                     overflow: 'hidden',
      //                   }}
      //                   variant="subtitle1"
      //                   color="text.secondary"
      //                   component="div"
      //                 >
      //                   {item.description}
      //                 </Typography>
      //           </Box>
      //                   <Rating
      //             name="read-only"
      //             value={item.rating.rate}
      //             precision={0.5}
      //             readOnly
      //           />
      //                   <Typography
      //             variant="h6"
      //             color="text.secondary"
      //             component="div"
      //           >
      //             {I18n.toCurrency(item.price)}
      //           </Typography>
      //                   {cartItem && (
      //           <Box sx={{ display: 'flex', alignItems: 'center' }}>
      //                 {cartItem.quantity <= 1 ? (
      //                   <IconButton
      //                     size="large"
      //                     edge="start"
      //                     color="inherit"
      //                     aria-label="menu"
      //                     sx={{ mr: 2 }}
      //                     onClick={() => deleteItem(cartItem)}
      //                   >
      //                     <DeleteIcon />
      //                   </IconButton>
      //                 ) : (
      //                   <IconButton
      //                     size="large"
      //                     edge="start"
      //                     color="inherit"
      //                     aria-label="menu"
      //                     sx={{ mr: 2 }}
      //                     onClick={() => updateCart({
      //                       ...cartItem,
      //                       quantity: cartItem.quantity - 1,
      //                     })}
      //                   >
      //                     <RemoveIcon />
      //                   </IconButton>
      //                 )}
      //                 <Typography component="div" variant="h5">
      //                   {cartItem.quantity}
      //                 </Typography>
      //                 <IconButton
      //                   size="large"
      //                   edge="start"
      //                   color="inherit"
      //                   aria-label="menu"
      //                   sx={{ ml: 2 }}
      //                   onClick={() => updateCart({
      //                     ...cartItem,
      //                     quantity: cartItem.quantity + 1,
      //                   })}
      //                 >
      //                   <AddIcon />
      //                 </IconButton>
      //               </Box>
      //           )}
      //                   {!cartItem && (
      //           <Button
      //                 disabled={status.some(
      //                   (x) => x.id === item.id && x.status === 'Loading',
      //                 )}
      //                 variant="contained"
      //                 onClick={() => addToCart(item)}
      //               >
      //                 Add To Cart
      //               </Button>
      //           )}
      //                 </CardContent>
      //               </Box>
      //             </Card>
      //           );
      //         })}
      //       </div>
      //     )}
      //   </CartContext.Consumer>
      // );
    }
}

export default Cart;
