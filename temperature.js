const temperature = {
    temperature : 0,
    setTemperature : function(temperature){
        this.temperature = parseInt(temperature);
    },
    celciusToFarenheit: function(){
        return (this.temperature * 9/5) + 32
    },
    farenheitToCelcius: function(){
        return(this.temperature -32) * 5/9
    }
};

const convertTemp = temperature;
convertTemp.setTemperature(150);

console.log(convertTemp.celciusToFarenheit());