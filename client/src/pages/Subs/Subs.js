import React,{ useState,useEffect }  from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { InputGroup } from 'react-bootstrap';
import {Form} from 'react-bootstrap'
import styles from './frame1.css'
import DatePicker, {DateObject}from "react-multi-date-picker";
import SubTypeModal from '../../components/SubTypeModal/SubTypeModal'
import Button from "react-bootstrap/Button";
import {SiAddthis} from 'react-icons/si'
import {AiOutlineClose} from 'react-icons/ai'
import { toastmessage } from "../../components/ToastMessage/toast";
import moment from 'moment';
import axios from 'axios';
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const Subs = () => {
    
    const [multiDate, setMultiDate] = useState([]);
    const [startDate, setStartDate] = useState();
    const [clientId, setclientId] = useState("");
    const [protein, setProtein] = useState("");
    const [calorie, setCalorie] = useState("");
    const [finalWednesdayObject,setWednesdayObject]=useState({date:"",categories:[],targetProtien:"",targetCaloriess:""});
    const [finalThursdayObject,setThursdayObject]=useState({date:"",categories:[],targetProtien:"",targetCaloriess:""})
    const [finalFridayObject,setFridayObject]=useState({date:"",categories:[],targetProtien:"",targetCaloriess:""})
    const [finalSatursdayObject,setSatursdayObject]=useState({date:"",categories:[],targetProtien:"",targetCaloriess:""})
    const [finalSundayObject,setSundayObject]=useState({date:"",categories:[],targetProtien:"",targetCaloriess:""})
    const [finalMondayObject,setMondayObject]=useState({date:"",categories:[],targetProtien:"",targetCaloriess:""})
    const [finalTuesdayObject,setTuesdayObject]=useState({date:"",categories:[],targetProtien:"",targetCaloriess:""})
    const [subDay, setSubDay] = useState(1);
    const [menuButton, setMenuButton]=useState("");
    const [mondayMeal, setMondayMeal]=useState([]);
    const [tuesdayMeal, setTuesdayMeal]=useState([]);
    const [wednesdayMeal, setWednesdayMeal]=useState([]);
    const [thursdayMeal, setThursdayMeal]=useState([]);
    const [fridayMeal, setFridayMeal]=useState([]);
    const [satursdayMeal, setSatursdayMeal]=useState([]);
    const [sundayMeal, setSundayMeal]=useState([]);
    const [sumChicken, setSumChicken]=useState(0);
    const [sumBeef, setSumBeef]=useState(0);
    const [sumBreakfast, setSumBreakfast]=useState(0);
    const [counter, setCount]=useState(0);
    const [carbs, setCarbs] = useState([]);
    const [id, setId] = useState("");
    const [carbsChecked, setCarbsChecked] = useState(false);
    const [addCarbMeal, setAddCarbMeal] = useState(false);
    const [addedMeal, setAddedMeal] = useState([]);
    const format = "YYYY-MM-DD";
    const [dates, setDates] = useState([
      
    ]);


// console.log(protein)
// console.log(calorie)

// console.log( typeof(menuInput))
// console.log(menuInput)

// console.log(sundayMealObject);
// console.log(multiDate)
// const handleDateSelection = date => {
//   setSelectedDates([...selectedDates, date]);
// };
// const handleMultiDateSkip=(date)=>{
//   var convertDate=moment(date).format("YYYY-DD-MM");
//   console.log("Converted Date",convertDate)
//     setMultiDate([...multiDate,convertDate])
// }

// console.log(startDate);
// console.log(dates[0].format())

const  handleSundayState = (id)=>(event)=> {
    setSundayMeal((inputs) =>
    
    inputs.map((input) =>
      input.id === id
        ? {
            ...input,
            inputValue: parseInt(event.target.value)
          }
        : input
    )
  );
}

const  handleMondayState = (id)=>(event)=> {
    setMondayMeal((inputs) =>
    
    inputs.map((input) =>
      input.id === id
        ? {
            ...input,
            inputValue: parseInt(event.target.value)
          }
        : input
    )
  );
}
const  handleTuesdayState = (id)=>(event)=> {
    setTuesdayMeal((inputs) =>
    
    inputs.map((input) =>
      input.id === id
        ? {
            ...input,
            inputValue: parseInt(event.target.value)
          }
        : input
    )
  );
}
const  handleWednesdayState = (id)=>(event)=> {
    setWednesdayMeal((inputs) =>
    
    inputs.map((input) =>
      input.id === id
        ? {
            ...input,
            inputValue: parseInt(event.target.value)
          }
        : input
    )
  );
}
const  handleThursdayState = (id)=>(event)=> {
    setThursdayMeal((inputs) =>
    
    inputs.map((input) =>
      input.id === id
        ? {
            ...input,
            inputValue: parseInt(event.target.value)
          }
        : input
    )
  );
}
const  handleFridayState = (id)=>(event)=> {
    setFridayMeal((inputs) =>
    
    inputs.map((input) =>
      input.id === id
        ? {
            ...input,
            inputValue: parseInt(event.target.value)
          }
        : input
    )
  );
}
const  handleSatursdayState = (id)=>(event)=> {
    setSatursdayMeal((inputs) =>
    
    inputs.map((input) =>
      input.id === id
        ? {
            ...input,
            inputValue: parseInt(event.target.value)
          }
        : input
    )
  );
}


const getValues=()=>{
const chickenSunday=sundayMeal.filter(({ mealName }) => mealName == 'Chicken');
const chickenMonday=mondayMeal.filter(({ mealName }) => mealName == 'Chicken');
const chickenTuesday=tuesdayMeal.filter(({ mealName }) => mealName == 'Chicken');
const chickenWednesday=wednesdayMeal.filter(({ mealName }) => mealName == 'Chicken');
const chickenThursday=thursdayMeal.filter(({ mealName }) => mealName == 'Chicken');
const chickenFriday=fridayMeal.filter(({ mealName }) => mealName == 'Chicken');
const chickenSatursday=satursdayMeal.filter(({ mealName }) => mealName == 'Chicken');

const sumChickenSunday =  chickenSunday.length === 0 ? 0 : chickenSunday[0].inputValue;
const sumChickenMonday =  chickenMonday.length === 0 ? 0 : chickenMonday[0].inputValue;
const sumChickenTuesday =  chickenTuesday.length === 0 ? 0 : chickenTuesday[0].inputValue;
const sumChickenWednesday =  chickenWednesday.length === 0 ? 0 : chickenWednesday[0].inputValue;
const sumChickenThursday =  chickenThursday.length === 0 ? 0 : chickenThursday[0].inputValue;
const sumChickenFriday =  chickenFriday.length === 0 ? 0 : chickenFriday[0].inputValue;
const sumChickenSatursday =  chickenSatursday.length === 0 ? 0 : chickenSatursday[0].inputValue;

const totalChicken= sumChickenSunday+sumChickenMonday+sumChickenTuesday+sumChickenWednesday+sumChickenThursday+sumChickenFriday+sumChickenSatursday;
setSumChicken(totalChicken);

const beefSunday=sundayMeal.filter(({ mealName }) => mealName == 'Beef');
const beefMonday=mondayMeal.filter(({ mealName }) => mealName == 'Beef');
const beefTuesday=tuesdayMeal.filter(({ mealName }) => mealName == 'Beef');
const beefWednesday=wednesdayMeal.filter(({ mealName }) => mealName == 'Beef');
const beefThursday=thursdayMeal.filter(({ mealName }) => mealName == 'Beef');
const beefFriday=fridayMeal.filter(({ mealName }) => mealName == 'Beef');
const beefSatursday=satursdayMeal.filter(({ mealName }) => mealName == 'Beef');

const sumBeefSunday =  beefSunday.length === 0 ? 0 : beefSunday[0].inputValue;
const sumBeefMonday =  beefMonday.length === 0 ? 0 : beefMonday[0].inputValue;
const sumBeefTuesday =  beefTuesday.length === 0 ? 0 : beefTuesday[0].inputValue;
const sumBeefWednesday =  beefWednesday.length === 0 ? 0 : beefWednesday[0].inputValue;
const sumBeefThursday =  beefThursday.length === 0 ? 0 : beefThursday[0].inputValue;
const sumBeefFriday =  beefFriday.length === 0 ? 0 : beefFriday[0].inputValue;
const sumBeefSatursday =  beefSatursday.length === 0 ? 0 : beefSatursday[0].inputValue;

const totalBeef= sumBeefSunday+sumBeefMonday+sumBeefTuesday+sumBeefWednesday+sumBeefThursday+sumBeefFriday+sumBeefSatursday;
setSumBeef(totalBeef);
const breakSunday=sundayMeal.filter(({ mealName }) => mealName == 'Breakfast');
const breakMonday=mondayMeal.filter(({ mealName }) => mealName == 'Breakfast');
const breakTuesday=tuesdayMeal.filter(({ mealName }) => mealName == 'Breakfast');
const breakWednesday=wednesdayMeal.filter(({ mealName }) => mealName == 'Breakfast');
const breakThursday=thursdayMeal.filter(({ mealName }) => mealName == 'Breakfast');
const breakFriday=fridayMeal.filter(({ mealName }) => mealName == 'Breakfast');
const breakSatursday=satursdayMeal.filter(({ mealName }) => mealName == 'Breakfast');

const sumBreakSunday =  breakSunday.length === 0 ? 0 : breakSunday[0].inputValue;
const sumBreakMonday =  breakMonday.length === 0 ? 0 : breakMonday[0].inputValue;
const sumBreakTuesday =  breakTuesday.length === 0 ? 0 : breakTuesday[0].inputValue;
const sumBreakWednesday =  breakWednesday.length === 0 ? 0 : breakWednesday[0].inputValue;
const sumBreakThursday =  breakThursday.length === 0 ? 0 : breakThursday[0].inputValue;
const sumBreakFriday =  breakFriday.length === 0 ? 0 : breakFriday[0].inputValue;
const sumBreakSatursday =  breakSatursday.length === 0 ? 0 : breakSatursday[0].inputValue;

const totalBreakFast= sumBreakSunday+sumBreakMonday+sumBreakTuesday+sumBreakWednesday+sumBreakThursday+sumBreakFriday+sumBreakSatursday;
setSumBreakfast(totalBreakFast);

}

console.log("Sunday Meal",sundayMeal)
console.log("Monday Meal" ,mondayMeal)
console.log("Tuesday Meal", tuesdayMeal)
console.log("Wednesday mEAL",wednesdayMeal)
console.log("Thursday Meal",thursdayMeal)
console.log("Friday Meal",fridayMeal)
console.log("Satursday Meal",satursdayMeal)
console.log("Sunday Meal",sundayMeal)


const removeMondayMenu = (index) => {
    const newMenu = mondayMeal.filter((_, i) => i !== index);
    setMondayMeal(newMenu);
  };
  const removeTuesdayMenu = (index) => {
    const newMenu = tuesdayMeal.filter((_, i) => i !== index);
    setTuesdayMeal(newMenu);
  };
  const removeWednesdayMenu = (index) => {
    const newMenu = wednesdayMeal.filter((_, i) => i !== index);
    setWednesdayMeal(newMenu);
  };
  const removeThursdayMenu = (index) => {
    const newMenu = thursdayMeal.filter((_, i) => i !== index);
    setThursdayMeal(newMenu);
  };
  const removeFridayMenu = (index) => {
    const newMenu = fridayMeal.filter((_, i) => i !== index);
    setFridayMeal(newMenu);
  };
  const removeSatursdayMenu = (index) => {
    const newMenu = satursdayMeal.filter((_, i) => i !== index);
    setSatursdayMeal(newMenu);
  };
  const removeSundayMenu = (index) => {
    const newMenu = sundayMeal.filter((_, i) => i !== index);
    setSundayMeal(newMenu);
  };
const HandleCarbMeal = (data) => {
    setAddedMeal(data);
    setCarbs(data)
    setAddCarbMeal(false)
  };
  const HandleAddMeal = () => {
    setAddCarbMeal(true);
  };
    const requestedNewClientId=parseInt(clientId);
    console.log(sundayMeal)
    const sundayMealObject = sundayMeal.map((item) => {
        return { categoryName: item.mealName };
      });
      console.log(sundayMealObject)
      const mondayMealObject = mondayMeal.map((item) => {
        return { categoryName: item.mealName };
      });
      const tuesdayMealObject = tuesdayMeal.map((item) => {
        return { categoryName: item.mealName };
      });
      const wednesdayMealObject = wednesdayMeal.map((item) => {
        return { categoryName: item.mealName };
      });
      const thursdayMealObject = thursdayMeal.map((item) => {
        return { categoryName: item.mealName };
      });
      const fridayMealObject = fridayMeal.map((item) => {
        return { categoryName: item.mealName };
      });
      const satursdayMealObject = satursdayMeal.map((item) => {
        return { categoryName: item.mealName };
      });
    
      // const setAllStates =()=>{
      //   setThursdayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:thursdayMealObject,targetProtien:protein,targetCalories:calorie})
      //  setFridayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:fridayMealObject,targetProtien:protein,targetCalories:calorie})
      //  setSatursdayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:satursdayMealObject,targetProtien:protein,targetCalories:calorie})
      //  setSundayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:sundayMealObject,targetProtien:protein,targetCalories:calorie})
      //  setMondayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:mondayMealObject,targetProtien:protein,targetCalories:calorie})
      //  setTuesdayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:tuesdayMealObject,targetProtien:protein,targetCalories:calorie})
      //  setWednesdayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:wednesdayMealObject,targetProtien:protein,targetCalories:calorie});
      // }

      console.log("Sunday Meal Object ",sundayMealObject)
      console.log("Monday Meal Object " ,mondayMealObject)
      console.log("Tuesday Meal Object ", tuesdayMealObject)
      console.log("Wednesday mEAL Object ",wednesdayMealObject)
      console.log("Thursday Meal Object ",thursdayMealObject)
      console.log("Friday Meal Object ",fridayMealObject)
      console.log("Satursday Meal Object ",satursdayMealObject)
      console.log("Sunday Meal Object ",sundayMealObject)
    // console.log(days)
    // const mealObject = [...sundayMealObject,...mondayMealObject,...tuesdayMealObject,...wednesdayMealObject,...thursdayMealObject,...fridayMealObject,...satursdayMealObject];
    // console.log(mealObject)
    console.log("Before Sunday Meal Object",sundayMealObject)
  const AddSubscriptions = async () => {
      // setAllStates()
      // ADDING DAYS BASED ON SUBSCRIPTION
      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      console.log(startDate)
      let day = weekday[startDate];
      const date  = moment(startDate);
      const currentday = date.day();
      const currentWeekDay = weekday[currentday];
      console.log(weekday[currentday]);
  
      //Get Next 7 DAYS
      let days = [];
      let daysRequired = 7
  
      for (let i = 1; i <= daysRequired; i++) {
      days.push( moment(startDate).add(i, 'days').format('YYYY-MM-DD') )
      }
      
      console.log("Meals Starts")
      console.log(days);
    
      console.log("Meals Ends")
      
       console.log(finalWednesdayObject)
       console.log(finalThursdayObject)
       console.log(finalFridayObject)
       console.log(finalSatursdayObject)
       console.log(finalSundayObject)
       console.log(finalMondayObject)
       console.log(finalTuesdayObject)
       //MULTIPLE OBJECTS ADDITION OPEN
       sundayMeal.map((item)=>{
        if(item.inputValue == 2){
          sundayMealObject.push({categoryName:item.mealName});
        }
        if(item.inputValue == 3){
          sundayMealObject.push({categoryName:item.mealName},{categoryName:item.mealName});
        }
        if(item.inputValue == 4){
          sundayMealObject.push({categoryName:item.mealName},{categoryName:item.mealName},{categoryName:item.mealName});
        }

       });
       mondayMeal.map((item)=>{
        if(item.inputValue == 2){
          mondayMealObject.push({categoryName:item.mealName});
        }
        if(item.inputValue == 3){
          mondayMealObject.push({categoryName:item.mealName},{categoryName:item.mealName});
        }
        if(item.inputValue == 4){
          mondayMealObject.push(...mondayMealObject,...mondayMealObject,{categoryName:item.mealName});
        }

       });
       tuesdayMeal.map((item)=>{
        if(item.inputValue == 2){
          tuesdayMealObject.push({categoryName:item.mealName});
        }
        if(item.inputValue == 3){
          tuesdayMealObject.push({categoryName:item.mealName},{categoryName:item.mealName});
        }
        if(item.inputValue == 4){
          tuesdayMealObject.push(...tuesdayMealObject,...tuesdayMealObject,{categoryName:item.mealName});
        }

       });
       wednesdayMeal.map((item)=>{
        if(item.inputValue == 2){
          wednesdayMeal.push({categoryName:item.mealName});
        }
        if(item.inputValue == 3){
          wednesdayMealObject.push({categoryName:item.mealName},{categoryName:item.mealName});
        }
        if(item.inputValue == 4){
          wednesdayMealObject.push(...wednesdayMealObject,...wednesdayMealObject,{categoryName:item.mealName});
        }

       });
       thursdayMeal.map((item)=>{
        if(item.inputValue == 2){
          thursdayMealObject.push({categoryName:item.mealName});
        }
        if(item.inputValue == 3){
          thursdayMealObject.push({categoryName:item.mealName},{categoryName:item.mealName});
        }
        if(item.inputValue == 4){
          thursdayMealObject.push(...thursdayMealObject,...thursdayMealObject,{categoryName:item.mealName});
        }

       });
       fridayMeal.map((item)=>{
        if(item.inputValue == 2){
          fridayMealObject.push({categoryName:item.mealName});
        }
        if(item.inputValue == 3){
          fridayMealObject.push({categoryName:item.mealName},{categoryName:item.mealName});
        }
        if(item.inputValue == 4){
          fridayMealObject.push(...fridayMealObject,...fridayMealObject,{categoryName:item.mealName});
        }

       });
       satursdayMeal.map((item)=>{
        if(item.inputValue == 2){
          satursdayMealObject.push({categoryName:item.mealName});
        }
        if(item.inputValue == 3){
          satursdayMealObject.push({categoryName:item.mealName},{categoryName:item.mealName});
        }
        if(item.inputValue == 4){
          satursdayMealObject.push(...satursdayMealObject,...satursdayMealObject,{categoryName:item.mealName});
        }

       });
       sundayMealObject.map((item)=>{
        if(item.inputValue == 2){
          sundayMealObject.push({categoryName:item.mealName});
        }
        if(item.inputValue == 3){
          sundayMealObject.push({categoryName:item.mealName},{categoryName:item.mealName});
        }
        if(item.inputValue == 4){
          sundayMealObject.push(...sundayMealObject,...sundayMealObject,{categoryName:item.mealName});
        }

       });
       console.log("NEW SUNDAY MEAL OBJECT",sundayMealObject);
       console.log("NEW Monday MEAL OBJECT",mondayMealObject);
       console.log("NEW tuesday MEAL OBJECT",tuesdayMealObject);
       console.log("NEW wednesday MEAL OBJECT",wednesdayMealObject);
       console.log("NEW thursday MEAL OBJECT",thursdayMealObject);
       console.log("NEW friday MEAL OBJECT",fridayMealObject);
       console.log("NEW satursday MEAL OBJECT",satursdayMealObject);

      // if(currentWeekDay == 'Thursday'){
      //     console.log(startDate);

          
      //     if(thursdayMealObject.length != 0  && finalWednesdayObject.categories.length == 0 && counter != subDay){

      //         setThursdayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:thursdayMealObject,targetProtien:protein,targetCalories:calorie})
      //         console.log(thursdayMealObject)
      //         console.log(finalThursdayObject)
      //         console.log("set thuesday")
      //         setCount(count => count+1);
      //     }
      //     if(fridayMealObject.length != 0 && finalFridayObject.categories.length == 0 && counter != subDay){
      //        setFridayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:fridayMealObject,targetProtien:protein,targetCalories:calorie})
      //        setCount(count => count+1);

      //    }
      //     if(satursdayMealObject.length != 0 && finalSatursdayObject.categories.length == 0 && counter != subDay){
      //        setSatursdayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:satursdayMealObject,targetProtien:protein,targetCalories:calorie})
      //        setCount(count => count+1);

      //    }
      //     if(sundayMealObject.length != 0 && finalSundayObject.categories.length == 0 && counter != subDay){
      //        setSundayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:sundayMealObject,targetProtien:protein,targetCalories:calorie})
      //        setCount(count => count+1);

      //    }
      //     if(mondayMealObject.length != 0 && finalMondayObject.categories.length == 0 && counter != subDay){
      //       setMondayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:mondayMealObject,targetProtien:protein,targetCalories:calorie})
      //       setCount(count => count+1);

      //    }
      //     if(tuesdayMealObject.length != 0 && finalTuesdayObject.categories.length == 0 && counter != subDay){
      //       setTuesdayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:tuesdayMealObject,targetProtien:protein,targetCalories:calorie})
      //       setCount(count => count+1);
      //    }
      //    if(wednesdayMealObject.length != 0 && finalWednesdayObject.categories.length == 0 && counter != subDay){
      //           setWednesdayObject({date:moment(startDate).format("YYYY-DD-MM"),categories:wednesdayMealObject,targetProtien:protein,targetCalories:calorie});
      //         console.log("set wednesday")
      //         setCount(count => count+1);
      //     }
           
      // }
      const arr=[];
// console.log(mondayMealObject);
if(currentWeekDay == 'Monday'){
  var count=0;
  if(mondayMealObject.length != 0  && finalMondayObject.categories.length == 0 && count != subDay){
    arr.push({date:startDate,categories:mondayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("monday meal object added")
    count=count+1;
  }
  if(tuesdayMealObject.length != 0  && finalTuesdayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[0],categories:tuesdayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("tuesday meal object added")
    count=count+1;
  }
  if(wednesdayMealObject.length != 0  && finalWednesdayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[1],categories:wednesdayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("wednesday meal object added")
    count=count+1;
  }
  if(thursdayMealObject.length != 0 && finalThursdayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[2],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("thursday meal object added")
    count = count+1;
  }
  if(fridayMealObject.length != 0  && finalFridayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[3],categories:fridayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("friday meal object added")
    count=count+1;
  }
  if(satursdayMealObject.length != 0  && finalSatursdayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[4],categories:satursdayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("satursday meal object added")
    count=count+1;
  }
  if(sundayMealObject.length != 0  && finalSundayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[5],categories:sundayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("sunday meal object added")
    count=count+1;
  }
  
  
  
}
  if(currentWeekDay == 'Tuesday'){
  var count=0;
  if(tuesdayMealObject.length != 0  && finalTuesdayObject.categories.length == 0 && count != subDay){
    arr.push({date:startDate,categories:tuesdayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("tuesday meal object added")
    count=count+1;
  }
  if(wednesdayMealObject.length != 0  && finalWednesdayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[0],categories:wednesdayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("wednesday meal object added")
    count=count+1;
  }
  if(thursdayMealObject.length != 0 && finalThursdayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[1],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("thursday meal object added")
    count = count+1;
  }
  if(fridayMealObject.length != 0  && finalFridayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[2],categories:fridayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("friday meal object added")
    count=count+1;
  }
  if(satursdayMealObject.length != 0  && finalSatursdayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[3],categories:satursdayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("satursday meal object added")
    count=count+1;
  }
  if(sundayMealObject.length != 0  && finalSundayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[4],categories:sundayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("sunday meal object added")
    count=count+1;
  }
  if(mondayMealObject.length != 0  && finalMondayObject.categories.length == 0 && count != subDay){
    arr.push({date:days[5],categories:mondayMealObject,targetProtien: protein,targetCalories:calorie});
    console.log("monday meal object added")
    count=count+1;
  }
  
  
}
    if(currentWeekDay == 'Wednesday'){
      var count=0;
      if(wednesdayMealObject.length != 0  && finalWednesdayObject.categories.length == 0 && count != subDay){
        arr.push({date:startDate,categories:wednesdayMealObject,targetProtien: protein,targetCalories:calorie});
        console.log("wednesday meal object added")
        count=count+1;
      }
      if(thursdayMealObject.length != 0 && finalThursdayObject.categories.length == 0 && count != subDay){
        arr.push({date:days[0],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
        console.log("thursday meal object added")
        count = count+1;
      }
      if(fridayMealObject.length != 0  && finalFridayObject.categories.length == 0 && count != subDay){
        arr.push({date:days[1],categories:fridayMealObject,targetProtien: protein,targetCalories:calorie});
        console.log("friday meal object added")
        count=count+1;
      }
      if(satursdayMealObject.length != 0  && finalSatursdayObject.categories.length == 0 && count != subDay){
        arr.push({date:days[2],categories:satursdayMealObject,targetProtien: protein,targetCalories:calorie});
        console.log("satursday meal object added")
        count=count+1;
      }
      if(sundayMealObject.length != 0  && finalSundayObject.categories.length == 0 && count != subDay){
        arr.push({date:days[3],categories:sundayMealObject,targetProtien: protein,targetCalories:calorie});
        console.log("sunday meal object added")
        count=count+1;
      }
      if(mondayMealObject.length != 0  && finalMondayObject.categories.length == 0 && count != subDay){
        arr.push({date:days[4],categories:mondayMealObject,targetProtien: protein,targetCalories:calorie});
        console.log("monday meal object added")
        count=count+1;
      }
      if(tuesdayMealObject.length != 0  && finalTuesdayObject.categories.length == 0 && count != subDay){
        arr.push({date:days[5],categories:tuesdayMealObject,targetProtien: protein,targetCalories:calorie});
        console.log("tuesday meal object added")
        count=count+1;
      }
      
}
        if(currentWeekDay == 'Thursday'){
          var count=0;
              if(thursdayMealObject.length != 0 && finalThursdayObject.categories.length == 0 && count != subDay){
                arr.push({date:startDate,categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("thursday meal object added")
                count = count+1;
              }
              if(fridayMealObject.length != 0  && finalThursdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[0],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("friday meal object added")
                count=count+1;
              }
              if(satursdayMealObject.length != 0  && finalSatursdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[1],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("satursday meal object added")
                count=count+1;
              }
              if(sundayMealObject.length != 0  && finalSundayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[2],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("sunday meal object added")
                count=count+1;
              }
              if(mondayMealObject.length != 0  && finalMondayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[3],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("monday meal object added")
                count=count+1;
              }
              if(tuesdayMealObject.length != 0  && finalTuesdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[4],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("tuesday meal object added")
                count=count+1;
              }
              if(wednesdayMealObject.length != 0  && finalWednesdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[5],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("wednesday meal object added")
                count=count+1;
              }
        }
        if(currentWeekDay == 'Friday'){
          var count=0;
          if(fridayMealObject.length != 0  && finalFridayObject.categories.length == 0 && count != subDay){
            arr.push({date:startDate,categories:fridayMealObject,targetProtien: protein,targetCalories:calorie});
            console.log("friday meal object added")
            count=count+1;
          }
              if(satursdayMealObject.length != 0  && finalSatursdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[0],categories:satursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("satursday meal object added")
                count=count+1;
              }
              if(sundayMealObject.length != 0  && finalSundayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[1],categories:sundayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("sunday meal object added")
                count=count+1;
              }
              if(mondayMealObject.length != 0  && finalMondayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[2],categories:mondayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("monday meal object added")
                count=count+1;
              }
              if(tuesdayMealObject.length != 0  && finalTuesdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[3],categories:tuesdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("tuesday meal object added")
                count=count+1;
              }
              if(wednesdayMealObject.length != 0  && finalWednesdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[4],categories:wednesdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("wednesday meal object added")
                count=count+1;
              }
              if(thursdayMealObject.length != 0 && finalThursdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[5],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("thursday meal object added")
                count = count+1;
              }
        }
        if(currentWeekDay == 'Saturday'){
          var count=0;
              
              if(satursdayMealObject.length != 0  && finalSatursdayObject.categories.length == 0 && count != subDay){
                arr.push({date:startDate,categories:satursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("satursday meal object added")
                count=count+1;
              }
              if(sundayMealObject.length != 0  && finalSundayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[0],categories:sundayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("sunday meal object added")
                count=count+1;
              }
              if(mondayMealObject.length != 0  && finalMondayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[1],categories:mondayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("monday meal object added")
                count=count+1;
              }
              if(tuesdayMealObject.length != 0  && finalTuesdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[2],categories:tuesdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("tuesday meal object added")
                count=count+1;
              }
              if(wednesdayMealObject.length != 0  && finalWednesdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[3],categories:wednesdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("wednesday meal object added")
                count=count+1;
              }
              if(thursdayMealObject.length != 0 && finalThursdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[4],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("thursday meal object added")
                count = count+1;
              }
              if(fridayMealObject.length != 0  && finalFridayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[5],categories:fridayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("friday meal object added")
                count=count+1;
              }
        }
        if(currentWeekDay == 'Sunday'){
          var count=0;
              
              if(sundayMealObject.length != 0  && finalSundayObject.categories.length == 0 && count != subDay){
                arr.push({date:startDate,categories:sundayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("sunday meal object added")
                count=count+1;
              }
              if(mondayMealObject.length != 0  && finalMondayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[0],categories:mondayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("monday meal object added")
                count=count+1;
              }
              if(tuesdayMealObject.length != 0  && finalTuesdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[1],categories:tuesdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("tuesday meal object added")
                count=count+1;
              }
              if(wednesdayMealObject.length != 0  && finalWednesdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[2],categories:wednesdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("wednesday meal object added")
                count=count+1;
              }
              if(thursdayMealObject.length != 0 && finalThursdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[3],categories:thursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("thursday meal object added")
                count = count+1;
              }
              if(fridayMealObject.length != 0  && finalFridayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[4],categories:fridayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("friday meal object added")
                count=count+1;
              }
              if(satursdayMealObject.length != 0  && finalSatursdayObject.categories.length == 0 && count != subDay){
                arr.push({date:days[5],categories:satursdayMealObject,targetProtien: protein,targetCalories:calorie});
                console.log("satursday meal object added")
                count=count+1;
              }
        }
        if(dates.length != 0){
          var j=0;
          for(var i=0;i<arr.length;i++)
              {
                if(dates[j] != undefined){
                  var skipdate= dates[j].format();
                  console.log("Skip date",skipdate)
                  if(skipdate == arr[i].date)
                  {
                      arr.splice(i,1);
                      j=j+1;
                  }
                  console.log(j)
                  }
                  else{
                    break;
                  }
                }
                
              
        }
    
      console.log(arr);
      

    const addSubs = {
        requestedClientId: requestedNewClientId,
        subscriptions:arr
      };
      console.log(addSubs);
      const header = { "Content-Type": "application/json" };

    await axios.post("http://localhost:8001/api/subscriptions/addbulksubscriptions",addSubs).then((res) => {
        toastmessage("New Subscription is Created!", "success");
      })
      .catch((err) => {
        toastmessage(err.response.data.error, "error");
      });
  };
  return (
    <div className='backgroundColor'>
       
    <Row >
        <Col className="column">
        <Row>
          <h6>Enter Client ID</h6>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Client Id"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={clientId}
          onChange={(e) => {
            setclientId(e.target.value);
          }}
        />
        </InputGroup>
        </Row>
        <Row>
        <h6>Enter Start Date</h6>

        {/* <DatePicker  onChange={date => setStartDate(moment(date).format("YYYY-MM-DD"))} placeholder="Select Start Date" /> */}
        <input type="date" onChange={e=> setStartDate(e.target.value)} style={{width: '92%',marginLeft: '12px',height:'32px'}}/>
        </Row>
        <Row className='datePicker' style={{paddingTop:'10px'}}> 
        <h6>Enter Skip Dates</h6>
        
        {/* <DatePicker value={multiDate} onChange={handleMultiDateSkip}  placeholder="Select Skip Dates" /> */}
        <DatePicker
          value={dates}
          onChange={setDates}
          multiple
          sort
          format={format}
          calendarPosition="bottom-center"
          plugins={[<DatePanel />]}
        />
        </Row>
        <Row style={{paddingTop:'20px'}}>
          <h6>Enter Target Protein</h6>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Target Protein"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={protein}
          onChange={(e) => {
            setProtein(e.target.value);
          }}
        />
        </InputGroup>
        </Row>
        <Row>
          <h6>Enter Target Calories</h6>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Target Calories"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={calorie}
          onChange={(e) => {
            setCalorie(e.target.value);
          }}
        />
        </InputGroup>
        </Row>
        
        <Row>
        <h6>Number of Subscription Days</h6>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Number of Subscription Days"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={subDay}
          onChange={(e) => {
            setSubDay(e.target.value);
          }}
        />
        </InputGroup>
        </Row>
       
        <Row style={{paddingBottom: '20px',marginLeft:'3px'}}>
            Last Subscriptions date: 
            
        </Row>
        <Row>
            <Col>
            Total Chicken:
            </Col>
            <Col>
            {sumChicken}
            </Col>
        </Row>
        <Row>
        <Col>
            Total Beef:
            </Col>
            <Col>
            {sumBeef}
            </Col>
        </Row>
        <Row>
        <Col>
            Total Breakfast:
            </Col>
            <Col>
            {sumBreakfast}
            </Col>
        </Row>
        <Col>
            <Button onClick={getValues} variant="success">Calculate</Button>
        </Col>
        </Col>
        {/* <Col className='column-2'>
        
        </Col> */}
        <Col className='column-3'>
        <Row className='meals'>
        <Col > 
            Sunday Meals
            </Col>
            <Col md="4">
                <div onClick={()=> setMenuButton("Sunday")}>

                 <SiAddthis onClick={HandleAddMeal} color='red' />
                </div>

            </Col>
            <Row>
                {sundayMeal.map((data,index)=> {
                    return(
                    <div key={data.id}>
                    <input style={{width: '50px'}} key={index} value={data.inputValue} type="number" onChange={handleSundayState(data.id)}></input>
                    <span style={{paddingLeft: '20px',paddingRight:'30px'}}>{data.mealName}</span>
                    <AiOutlineClose color='red' onClick={()=> removeSundayMenu(index)}/>

                    </div>

                    )
                })}
            </Row>
        </Row>
        <Row className='meals'>
            <Col>
            Monday Meals
            </Col>
            <Col md="4">
                <div onClick={()=> setMenuButton("Monday")}>
                <SiAddthis onClick={HandleAddMeal} color='red'/>

                </div>
            </Col>
            <Row>
                {mondayMeal.map((data,index)=> {
                    return(
                    <div key={data.id}>
                    <input style={{width: '50px'}} key={index} value={data.inputValue} onChange={handleMondayState(data.id)} type="number"></input>
                    <span style={{paddingLeft: '20px',paddingRight:'30px'}}>{data.mealName}</span>
                    <AiOutlineClose color='red' onClick={()=> removeMondayMenu(index)}/>

                    </div>

                    )
                })}
            </Row>
        </Row>
        <Row>
            <Col>
            Tuesday Meals
            </Col>
            <Col md="4">
                <div onClick={()=> setMenuButton("Tuesday")}>
                 <SiAddthis onClick={HandleAddMeal} color='red'/>

                </div>
            </Col>
            <Row>
                {tuesdayMeal.map((data,index)=> {
                    return(
                    <div key={data.id}>
                    <input style={{width: '50px'}} key={index} value={data.inputValue} type="number" onChange={handleTuesdayState(data.id)}></input>
                    <span style={{paddingLeft: '20px',paddingRight:'30px'}}>{data.mealName}</span>
                    <AiOutlineClose color='red' onClick={()=> removeTuesdayMenu(index)}/>

                    </div>

                    )
                })}
            </Row>
        </Row> 
        
        </Col>
        <Col className='column-4'>
        <Row className='meals'>
        <Col > 
            Wednesday Meals
            </Col>
            <Col md="4">
                <div onClick={()=> setMenuButton("Wednesday")}>
                 <SiAddthis onClick={HandleAddMeal} color='red'/>

                </div>
            </Col>
            <Row>
                {wednesdayMeal.map((data,index)=> {
                    return(
                    <div key={data.id}>
                    <input style={{width: '50px'}} key={index} value={data.inputValue} type="number" onChange={handleWednesdayState(data.id)}></input>
                    <span style={{paddingLeft: '20px',paddingRight:'30px'}}>{data.mealName}</span>
                    <AiOutlineClose color='red' onClick={()=> removeWednesdayMenu(index)}/>

                    </div>

                    )
                })}
            </Row>
        </Row>
        <Row className='meals'>
        <Col > 
            Thursday Meals
            </Col>
            <Col md="4">
                <div onClick={()=> setMenuButton("Thursday")}>
                 <SiAddthis onClick={HandleAddMeal} color='red'/>

                </div>
            </Col>
            <Row>
                {thursdayMeal.map((data,index)=> {
                    return(
                    <div key={data.id}>
                    <input style={{width: '50px'}} key={index} value={data.inputValue} type="number"onChange={handleThursdayState(data.id)}></input>
                    <span style={{paddingLeft: '20px',paddingRight:'30px'}}>{data.mealName}</span>
                    <AiOutlineClose color='red' onClick={()=> removeThursdayMenu(index)}/>

                    </div>

                    )
                })}
            </Row>
        </Row>
        <Row className='meals'>
        <Col > 
            Friday Meals
            </Col>
            <Col md="4">
                <div onClick={()=> setMenuButton("Friday")}>
                 <SiAddthis onClick={HandleAddMeal} color='red'/>

                </div>
            </Col>
            <Row>
                {fridayMeal.map((data,index)=> {
                    return(
                    <div key={data.id}>
                    <input style={{width: '50px'}} key={index} value={data.inputValue} type="number" onChange={handleFridayState(data.id)}></input>
                    <span style={{paddingLeft: '20px',paddingRight:'30px'}}>{data.mealName}</span>
                    <AiOutlineClose color='red' onClick={()=> removeFridayMenu(index)}/>

                    </div>

                    )
                })}
            </Row>
        </Row>
        <Row md="3" className='submitButton'>
        <Button onClick={()=> {AddSubscriptions()}}>Submit</Button>

        </Row>
        </Col>
         <Col className='column-5'>
         <Row className='meals'>
        <Col > 
            Satursday Meals
            </Col>
            <Col md="4">
                <div onClick={()=> setMenuButton("Satursday")}>
                <SiAddthis onClick={HandleAddMeal} color='red'/>
                </div>
                 
            </Col>
            <Row>
                {satursdayMeal.map((data,index)=> {
                    return(
                    <div key={data.id}>
                    <input style={{width: '50px'}} key={index} value={data.inputValue} type="number" onChange={handleSatursdayState(data.id)}></input>
                    <span style={{paddingLeft: '20px',paddingRight:'30px'}}>{data.mealName}</span>
                    <AiOutlineClose color='red' onClick={()=> removeSatursdayMenu(index)}/>

                    </div>

                    )
                })}
            </Row>
        </Row>
        
        </Col>
       
       
    </Row>
            <SubTypeModal 
            carbs={addCarbMeal}
            setNewCarbMeal={HandleCarbMeal}
            closeModal={()=>{
              setAddCarbMeal(false)
            }}
            addedMeal={addedMeal}
            setAddedMeal={setAddedMeal}
            menuButton={menuButton}
            setMondayMeal={setMondayMeal}
            setTuesdayMeal={setTuesdayMeal}
            setWednesdayMeal={setWednesdayMeal}
            setThursdayMeal={setThursdayMeal}
            setFridayMeal={setFridayMeal}
            setSatursdayMeal={setSatursdayMeal}
            setSundayMeal={setSundayMeal}

            />
             
     
    </div>
  )
}

export default Subs
