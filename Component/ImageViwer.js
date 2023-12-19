import { StyleSheet , Image } from "react-native";

export default function ImageViwer({placeholderImageSource}) {
  return(
    <Image source={placeholderImageSource} style={style.container}/>
  );  
}

const style = StyleSheet.create(
  {
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  }
);