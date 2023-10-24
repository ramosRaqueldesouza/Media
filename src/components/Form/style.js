import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    formContext:{ //nome do estilo p/ conseguir identificar em outro lugar
        width:"100%", // altura altomatica
        height:"auto", // largura automatica
        bottom:0,
        backgroundColor: "#9163A6",
        alignItems:"center", //alinhar os objetos no centro
        borderTopLeftRadius: 30, //curva da borda superior esquerda (individual)
        borderTopRightRadius:30, //curva da borda superior direita
        borderBottomRightRadius:30, //curva da borda inferior direita
        borderBottomLeftRadius:30, //curva da borda inferior esquerda
        marginTop: 10, //margem do topo
    },
    form:{
        width:"auto",
        height:"auto",
        marginTop: 20,
        padding:25, // tamanho do preenchemento do form
    },
    label:{
        color:"#D6B2F5", // cor da letra
        fontSize:18, // tamanho da fonte
        paddingLeft: 20,
    },
    input:{
        width:"auto",
        borderRadius:20, //curvatura da borda (junto)
        backgroundColor:"#D491F2",
        height: 40,
        margin:12,
        paddingLeft:10,
    },

    buttonCalculator:{
        height:"auto",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center", //alinhamento do texto
        backgroundColor: "#DEC6F5",
        paddingTop:14, //preencemento de cima
        paddingBottom:14, //preenchemento de baixo
        marginLeft: 12,
        margin:30,
    },
    textButtonCalculator:{
    fontSize:20,
    color: "#5C5366",
    fontWeight:"bold", //italico, negrito e etc.
    },
    errorMessage:{
        fontSize:12,
        color:"#F5605B",
        fontWeight:"bold",
        paddingLeft:10,
    },
    

})

export default styles