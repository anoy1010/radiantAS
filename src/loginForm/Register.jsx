import React from 'react'

import Register1 from './Register1'
import Register2 from './Register2'
import Register3 from './Register3'
import { FaCheckCircle } from 'react-icons/fa';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const steps = ['Personnal Data', 'Entreprise Data', 'Account Data'];

const Register = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  }; 
  return (
    <div>
      <div className='stepper flex  justify-center items-center'>
      <Box sx={{ width: '70%' }} className='flex flex-col justify-center '>
      <Stepper nonLinear activeStep={activeStep} className='bg-white my-4 p-4 border-1 shadow-lg shadow-slate-400'>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color= "inherit" sx={{ color:'#111047'}} onClick={handleStep(index)} >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography className='flex justify-center items-center gap-x-8 py-24' sx={{ mt: 2, mb: 1 }}>
              The inscription is correctly success  <FaCheckCircle size={50} color="green" />
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset} sx={{ mr: 1, color: 'white', background:'#ff9900', }} className='font-bold ring-firstColor ring-2 hover:text-firstColor  transition ease-in-out duration-300 '>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
            {activeStep === 0 && <Register1 />}
            {activeStep === 1 && <Register2 />}
            {activeStep === 2 && <Register3 />}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color='inherit'
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1,color:'white', background:'#ff9900', }} className='font-bold ring-firstColor ring-2 hover:text-firstColor  transition ease-in-out duration-300 '
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1, color: 'white', background:'#ff9900', }} className='font-bold ring-firstColor ring-2 hover:text-firstColor  transition ease-in-out duration-300 ' >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete} sx={{ mr: 1, color: 'white', background:'#ff9900', }} className='font-bold ring-firstColor ring-2 hover:text-firstColor  transition ease-in-out duration-300 '>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Inscription finish'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
      </div>
     

    </div>
  )
}

export default Register