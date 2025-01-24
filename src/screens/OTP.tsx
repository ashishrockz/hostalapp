import { useContext, useEffect, useRef, useState } from "react";
import { Button, Dimensions, SafeAreaView, Text, TextInput, View } from "react-native";
import { UserContext } from "../hooks/context";
import { useNavigation } from "@react-navigation/native";

export default function OTP({route}) {
    console.log(route.params);
    const {setIsLoggedIn} = useContext(UserContext);
    const navigation = useNavigation();
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("");
    const [value6, setValue6] = useState("");
    const box1 = useRef();
    const box2 = useRef();
    const box3 = useRef();
    const box4 = useRef();
    const box5 = useRef();
    const box6 = useRef();
  
    const handleSubmit = () => {
      
      const otp = [
        value1,
        value2,
        value3,
        value4,
       value5,
    value6,
      ].join("");
      if(route.params.otp == otp){
        setIsLoggedIn(true);
        setSuccess(true)
        navigation.navigate("MainDrawer")
      }
      console.log("Submitted OTP:", otp); 
    };

    const [count, setCount] = useState(30);
    const [isSuccess, setSuccess] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
          if (count === 0 || isSuccess) {
            clearInterval(timer);
          } else {
            setCount((pre) => pre - 1);
          }
        }, 1000);
        return () => {
          clearInterval(timer);
        };
      }, [count, isSuccess]);
  
    return (
      <SafeAreaView style={{ flex: 1, padding: 10, width: Dimensions.get("screen").width }}>
        <Text>OTP Verification</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20 }}>
          <TextInput
            ref={box1}
            maxLength={1}
            keyboardType="number-pad"
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: "#ccc",
              textAlign: "center",
              fontSize: 18,
              borderRadius: 5,
            }}
            onChangeText={(text) => {
                setValue1(text);
              if (text.length >= 1) box2.current.focus();
            }}
          />
          <TextInput
            ref={box2}
            maxLength={1}
            keyboardType="number-pad"
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: "#ccc",
              textAlign: "center",
              fontSize: 18,
              borderRadius: 5,
            }}
            onChangeText={(text) => {
                setValue2(text)
              if (text.length >= 1) box3.current.focus();
              else if(text.length<1){
                box1.current.focus()
            }
            }}
          />
          <TextInput
            ref={box3}
            maxLength={1}
            keyboardType="number-pad"
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: "#ccc",
              textAlign: "center",
              fontSize: 18,
              borderRadius: 5,
            }}
            onChangeText={(text) => {
                setValue3(text)
              if (text.length >= 1) box4.current.focus();
              else if(text.length<1){
                box2.current.focus()
            }
            }}
          />
          <TextInput
            ref={box4}
            maxLength={1}
            keyboardType="number-pad"
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: "#ccc",
              textAlign: "center",
              fontSize: 18,
              borderRadius: 5,
            }}
            onChangeText={(text) => {
                setValue4(text)
              if (text.length >= 1) box5.current.focus();
              else if(text.length<1){
                box3.current.focus()
            }
            }}
          />
          <TextInput
            ref={box5}
            maxLength={1}
            keyboardType="number-pad"
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: "#ccc",
              textAlign: "center",
              fontSize: 18,
              borderRadius: 5,
            }}
            onChangeText={(text) => {
                setValue5(text)
              if (text.length >= 1) box6.current.focus();
              else if(text.length<1){
                box4.current.focus()
            }
            }
        }
          />
          <TextInput
            ref={box6}
            maxLength={1}
            keyboardType="number-pad"
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: "#ccc",
              textAlign: "center",
              fontSize: 18,
              borderRadius: 5,
            }}
            onChangeText={(text) => {
                setValue6(text)
                if (text.length >= 1) box6.current.focus();
                else if(text.length<1){
                    box5.current.focus()
                }
              }}
          />
        </View>
        <Button title="Submit" onPress={()=>(handleSubmit())}></Button>
        <Text>OTP expires in {count}</Text>
      </SafeAreaView>
    );
  }


