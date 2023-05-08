import { AbsoluteCenter,Image,Text, Box, Button, Divider, FormControl, FormHelperText, FormLabel, HStack, Input, Select, Spacer, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, VStack, useSteps } from '@chakra-ui/react'
import NavBarLİnk from '../Sidebar/NavBarLink';
const steps = [
  { title: "Client", description: "Contact Info" },
  { title: "Job", description: "Date & Time" },
  { title: "Engineer", description: "Select Rooms" },
  { title: "Descriptions", description: "Select Rooms" },
];
const AddJob = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  })
  
  return (
  <>
 

        <Box>
          <Box zIndex={'overlay'} bg="white" top={0} position={'absolute'} w={1000}>
            <Stepper bg="white"   backdropBlur={"2xl"}  m={10} index={activeStep}>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink="0">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </Box>


<VStack>
<AbsoluteCenter>
  <Box>


{ activeStep ==1 && (
  <>  <Box >

</Box>
  <FormControl py={10} w={'lg'}>
  <FormLabel>Client</FormLabel>
  <Select variant='outline' placeholder='Outline' />
  <FormHelperText>Choose the Client that ypu need to create job for.</FormHelperText>
</FormControl>

<FormControl w={'lg'}>
  <FormLabel>Site</FormLabel>
  <Select variant='outline' placeholder='Outline' />
  <FormHelperText>Choose the client site(Address).</FormHelperText>
</FormControl>
</>

)
}


 


{/* /////////////// job  */}
{ activeStep ==2 && (
  <> 
<FormControl pb={10} w={'lg'}>
  <FormLabel>Job Type</FormLabel>
  <Select variant='outline' placeholder='Outline' />
  <FormHelperText>Select the job type.</FormHelperText>
</FormControl>
<FormControl pb={10} w={'lg'}>
  <FormLabel>Sub Type</FormLabel>
  <Select variant='outline' placeholder='Outline' />
  <FormHelperText>Select the job sub-type.</FormHelperText>
</FormControl>
<FormControl pb={10} w={'lg'}>
  <FormLabel>Priority</FormLabel>
  <Select variant='outline' placeholder='Outline' />
  <FormHelperText>Select the job priority.</FormHelperText>
</FormControl>
</>

)
}
{/* /////////////// Engineer  */}
{ activeStep ==3 && (
  <> 
<FormControl pb={10} w={'lg'}>
  <FormLabel>Engineer</FormLabel>
  <Select variant='outline' placeholder='Outline' />
  <FormHelperText>Select the Engineer for this job.</FormHelperText>
</FormControl>

<FormControl pb={10} w={'lg'}>
  <FormLabel> Schedule Date</FormLabel>
  <Select variant='outline' placeholder='Outline' />
  <FormHelperText>Select the Engineer for this job.</FormHelperText>
</FormControl>
<FormControl pb={10} w={'lg'}>
  <FormLabel> Est. Duration</FormLabel>
  <Select variant='outline' placeholder='Outline' />
  <FormHelperText>Select the Engineer for this job.</FormHelperText>
</FormControl> 
</>
)
}
<Button onClick={()=>setActiveStep(activeStep+1)} colorScheme='blue' w={'full'} variant='outline' my={10}>Next</Button>

 </Box>


</AbsoluteCenter>

</VStack>

          

     
 
          
        
        </Box>
        

  </>
  )
}

export default AddJob