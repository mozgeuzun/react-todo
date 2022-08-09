import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
import {useState} from 'react';


function GoalInput(props){
    const [enteredGoalText,setEnteredGoalText] = useState('');   

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler (){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return(
        <Modal visible= {props.visible} animationType="fade">
            <View style={styles.inputContainer} >
                <Image style= {styles.image} source={require('../assets/images/bunny.jpg')}/>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Your Course Goal" 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}> 
                        <Button title="Add Goal" onPress={addGoalHandler} color="#311b6b"/> 
                    </View>
                    <View style={styles.button}> 
                        <Button title="Cancel" onPress={props.onCancel} color="#311b6b"/>
                    </View>
              
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 6,
        width: '100%',
        padding: 8,
    },
    buttonContainer:{
        marginTop: 16,
        flexDirection:'row',
    },
    button:{
        width: 100,
        marginHorizontal: 8,
    },

});