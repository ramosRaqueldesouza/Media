import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultMedia(props){
    const onShare = async () => {
    const result = await Share.share({
        message: "Minha média foi: " + props.resultMedia,
    })
    }
    return(
        <View style={styles.resultMedia}>
            
            <View style={styles.boxSharebutton}>
                {props.resultMedia != null ?
                <TouchableOpacity onPress={onShare} style={styles.shared}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>

            <Text style={styles.information}>{props.messageResultMedia}</Text>
            <Text style={styles.numberMedia}>{props.resultMedia}</Text>
            <Text>{props.comparation}</Text>
        </View>
    );
   
}
