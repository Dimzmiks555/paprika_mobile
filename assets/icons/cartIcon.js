import Svg, { Path } from "react-native-svg"

const CartIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M8 3v4h13l-2 7H8v2h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1V4H4a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM6 20.5A1.5 1.5 0 1 0 7.5 19 1.5 1.5 0 0 0 6 20.5zm9 0a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0-1.5 1.5z" />
  </Svg>
)

export default CartIcon
