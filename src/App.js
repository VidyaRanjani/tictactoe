import react , {useState} from 'react';
import './App.css';
import MyButton from './components/button';

function App() {
 
  const [b_Val ,setb_Val] = useState([1,2,3,4,5,6,7,8,9])
  const [player ,setplayer] = useState("Player 1")
  const [game ,setgame ]  = useState(false)

  const  handclick = (i) => {

    let res = b_Val;
    let display = player;

    if(checkWinning(res)==true){
      display =  "  WINNER  "
    }
    else if((checkWinning(res)==false) && (res[i]==1 || res[i]==2 || res[i]==3 || res[i]==4 || res[i]==5 || res[i]==6 || res[i]==7 || res[i]==8 || res[i]==9) && display == "Player 1" ){
      res[i] = "X" 
      display  = "Player 2"
    }
 
    else if(checkWinning(res)==false && display == "Player 2"  ){
       res[i] = "O" 
       display  ="Player 1"
    }
     else if(res[i]== "X" || res[i]== "O" ){
       res[i] = res[i]
       
    }

    setb_Val(res);
    setplayer(display);

  } 

  const checkWinning = (res1) => {
    if((res1[0] == res1[1] && res1[1]==res1[2]) ||
    (res1[0] == res1[3] && res1[3]==res1[6]) ||
    (res1[1] == res1[4] && res1[4]==res1[5]) ||
    (res1[6] == res1[7] && res1[7]==res1[8]) ||
    (res1[1] == res1[4] && res1[4]==res1[7]) ||
    (res1[2] == res1[5] && res1[5]==res1[8]) ||
    (res1[0] == res1[4] && res1[4]==res1[8]) ||
    (res1[2] == res1[4] && res1[4]==res1[6])  )
    {
     return true
    }
    else
    {
      return false
    }
  }

  return (

    <div style = {{flex:1 ,backgroundColor:"grey",justifyContent :"center" ,margin:20,padding :10 ,border : "1px solid black",height : 500 ,width : 400}}>
       
          <div style = {{flex:1/5,backgroundColor:"black" ,height :100 ,width :350,color:'white' ,fontSize:50,textAlign:"center",padding:20}}>
            <p>
              {player}
            </p>

          </div>


          <div style = {{flex:4/5 ,flexDirection:"row" ,flexWrap:"wrap"}}>
            
            {
            b_Val.map( (val,i) => {
            return(
            <MyButton label = {val} onPress = {handclick} index = {i} highlight = {val === "X" || val === "O"} />
            
              )})

           
          }
            
          </div>

    </div>      
   
  );
}

export default App;
