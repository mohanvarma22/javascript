const form = document.querySelector('form')
//bayta height extract cheste empty values store aypotay so dont do it
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight=  parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please enter a valid height'
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please enter a valid weight'
    }

    else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        
        if(BMI<18.6) {
            results.innerHTML= `your bmi is ${BMI} you are underweight`
        }

        else if (18.6<BMI &&    BMI<24.9){
            results.innerHTML= `your bmi is ${BMI} you are normal`
        }

        else{
            results.innerHTML= `your bmi is ${BMI} you are overweight`
        }
    }

})