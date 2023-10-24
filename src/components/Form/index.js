import React, { useState} from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration, setErrorMessage} from "react-native";
import ResultMedia from "./ResultMedia";
import styles from "./style";


export default function Form(){

    //estado inicial dos objetos
    const [baixa1, setBaixa1] = useState(null);
    const [baixa2, setBaixa2] = useState(null);
    const [baixa3, setBaixa3] = useState(null);
    const [baixa4, setBaixa4] = useState(null);
    const [messageMedia, setMessageMedia] =useState ("Preencha as notas");
    const [comparation, setComparation] = useState (null);
    const [media, setMedia] =useState (null);
    const [textButton, setTextButton]=useState ("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

function mediaCalculator(){

    return setMedia((parseFloat(baixa1)+parseFloat(baixa2)+parseFloat(baixa3)+parseFloat(baixa4))/4)
}

function verificationMedia(){
    if(media == null){
        setErrorMessage("*Obrigatório")
        Vibration.vibrate()
    }
}

function comparacao(){
    if (media <= 5) {
        setComparation("Nossa, poucas notas vermelha, continue assim. excelente!")
    } else {
        setComparation("tá com muitas notas vermelhas, vamos melhorar para não ser um possível retidoª." + "\n" + "Se continuar assim vai ficar retidoª.")
    }
}

function validationMedia(){
    if (baixa1 != null && baixa2 != null && baixa3 != null && baixa4 != null){
        mediaCalculator()
        setBaixa1(null)
        setBaixa2(null)
        setBaixa3(null)
        setBaixa4(null)
        comparacao()
        setMessageMedia(" A média é:  ")
        setTextButton ("Calcular Novamente")
        setErrorMessage(null)
        return
    }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o número de baixas!")
        verificationMedia()
}


return(
    <View style={styles.formContext}>
        <View style={styles.form}>

        <Text style={styles.label}>Sessão 1:</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input}  onChangeText={setBaixa1} value={baixa1} placeholder="Ex: 8" keyboardType="numeric"/>

            <Text style={styles.label}>Sessão 2:</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} onChangeText={setBaixa2} value={baixa2} placeholder="Ex: 8" keyboardType="numeric"/>

            <Text style={styles.label}>Sessão 3:</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input}  onChangeText={setBaixa3} value={baixa3} placeholder="Ex: 8" keyboardType="numeric"/>

            <Text style={styles.label}>Sessão 4:</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} onChangeText={setBaixa4} value={baixa4} placeholder="Ex: 8" keyboardType="numeric"/>

            <ResultMedia messageResultMedia={messageMedia} resultMedia={media} comparation={comparation}/>

            <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationMedia()}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>


        </View>
        
    </View>  
    );
}