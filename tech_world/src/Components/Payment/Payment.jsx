
import React, { useState } from "react";
import { Progress, Box, ButtonGroup, Button, Flex } from "@chakra-ui/react";


import { useToast } from "@chakra-ui/react";
import RazorPay from "./RazorPay";
import Form1 from "./Form1";
import Form2 from "./Form2";

export default function Payment({totalprice=10}) {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  
  const [data, setData] = useState({name:"",lastname:"",email:"",country:"",address:"",city:"",state:"",postal_code:""});


  const getFrom1Data = (form1Data) => {
    // console.log("form1Data: ", form1Data);
    setData({ ...data, ...form1Data });
  };

  const getFrom2Data = (form2Data) => {
    // console.log("form2Data: ", form2Data);
    setData({ ...data, ...form2Data });
  };

  

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1 getFrom1Data={getFrom1Data} />
        ) : (
          <Form2 getFrom2Data={getFrom2Data} />
        )}


        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>

          </Flex>
        </ButtonGroup>
      </Box>{

        <RazorPay details={data} totalprice={totalprice} />
      }
    </>
  );
}
