import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { useState } from "react";

const PricingSlider = () => {
    const [sliderValue, setSliderValue] = useState(5000)

    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }

    return (
        <Box pt={6} pb={2}>
            <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                <SliderMark value={5000} {...labelStyles}>
                    5000
                </SliderMark>
                <SliderMark value={20000} {...labelStyles}>
                    20,000
                </SliderMark>
                <SliderMark value={50000} {...labelStyles}>
                    50000
                </SliderMark>
                <SliderMark
                    value={sliderValue}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='-10'
                    ml='-5'
                    w='12'
                >
                    {sliderValue}
                </SliderMark>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
        </Box>
    )
}

export default PricingSlider;