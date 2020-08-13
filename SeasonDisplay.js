import React from 'react';
import './SeasonDisplay.css';

const seasonConfig={
    summer:{
        text:'Lets hit the beach',
        iconName: 'sun'
},
   winter:{
    text: 'Burr it is Chilly',
    iconName: 'snowflake'
   }
};
const getSeason = (lat, month)=>{
    if(month > 2 && month <9){ //if we are in the summer months and in the northern hemi return summer else winter
      return  lat > 0 ? 'summer': 'winter';//(ternary expression) if lat is greater than 0 we must be in the northern hemisphere 
                                            // if we are in thr northern hemisphere return summer else winter
    }else{
        return lat >0 ? 'winter' : 'summer';// this handles the winter months
        // return winter if the if statement is valied if not return summer
    }
}
const SeasonDisplay =(props)=>{
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    // const text = season === 'winter' ? 'Burr it is Chilly': 'Lets hit the beach' ;
    // // if statement if season = winter print the text else its summer print the other text
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
     return(
        <div className={`season-display ${season}`}>
            <i className ={`icon-left massive ${iconName} icon`}/>
           <h1>{text}</h1>
           <i className ={`icon-right massive ${iconName} icon`}/>
        </div>
    )
        
}
export default SeasonDisplay