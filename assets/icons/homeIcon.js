import Svg, { Path } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
    <Path {...props}
      d="M23 9.99V22a2.006 2.006 0 0 1-2 2h-6v-8h-5v8H4a2.006 2.006 0 0 1-2-2V9.99a1.999 1.999 0 0 1 .79-1.59L12.5 1l9.71 7.4A1.999 1.999 0 0 1 23 9.99z"
    />
  </Svg>
)

export default HomeIcon
