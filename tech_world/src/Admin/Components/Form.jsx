import React, { useState } from "react";
import {
  Box,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import "../../styles/Admin.css";

const initState = {
  brand: "",
  model: "",
  network_technology: "",
  bands_2G: "",
  bands_3G: "",
  bands_4G: "",
  network_speed: "",
  GPRS: "",
  EDGE: "",
  announced: "",
  status: "",
  dimentions: "",
  weight_g: "",
  weight_oz: "",
  SIM: "",
  display_type: "",
  display_resolution: "",
  display_size: "",
  OS: "",
  CPU: "",
  Chipset: "",
  GPU: "",
  memory_card: "",
  internal_memory: "",
  RAM: "",
  primary_camera: "",
  secondary_camera: "",
  loud_speaker: "",
  audio_jack: "",
  WLAN: "",
  bluetooth: "",
  GPS: "",
  NFC: "",
  radio: "",
  USB: "",
  sensors: "",
  battery: "",
  colors: "",
  approx_price_EUR: "",
  img_url: "",
};
const AddForm = () => {
  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(e.target.value)
  };
  // console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("data posted");
      })
      .catch((e) => console.log(e.message));

    setFormData(initState);
  };

  const {
    brand,
    model,
    network_technology,
    bands_2G,
    bands_3G,
    bands_4G,
    network_speed,
    GPRS,
    EDGE,
    announced,
    status,
    dimentions,
    weight_g,
    weight_oz,
    SIM,
    display_type,
    display_resolution,
    display_size,
    OS,
    CPU,
    Chipset,
    GPU,
    memory_card,
    internal_memory,
    RAM,
    primary_camera,
    secondary_camera,
    loud_speaker,
    audio_jack,
    WLAN,
    bluetooth,
    GPS,
    NFC,
    radio,
    USB,
    sensors,
    battery,
    colors,
    approx_price_EUR,
    img_url,
  } = formData;

  return (
    <Box className="admin" id="form">
      <Box m="auto" className="admin_out_box">
        <form onSubmit={handleSubmit}>
          <Heading
            size={{ base: "sm", sm: "sm", md: "md" }}
          >
            Add New Product
          </Heading>
          <Grid
            gridTemplateColumns={{
              base: "1fr",
              sm: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr",
            }}
          >
            {/* leftbox */}
            <Box p={{ base: "auto 10%", md: "10%" }}>
              <Stack spacing={3}>
                <Input
                  required
                  name="brand"
                  type="text"
                  value={brand}
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Brand"
                />
                <Input
                  required
                  value={model}
                  name="model"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Model Number"
                />
                <Input
                  required
                  value={network_technology}
                  name="network_technology"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Network Technology"
                />
                <Input
                  required
                  value={bands_2G}
                  name="bands_2G"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Enter 2G Bands"
                />
                <Input
                  required
                  value={bands_3G}
                  name="bands_3G"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Enter 3G Bands"
                />
                <Input
                  required
                  value={bands_4G}
                  name="bands_4G"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Enter 4G Bands"
                />
                <Input
                  required
                  value={network_speed}
                  name="network_speed"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Network Speed"
                />
                <Input
                  required
                  value={GPRS}
                  name="GPRS"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="GPRS"
                />
                <Input
                  required
                  value={EDGE}
                  name="EDGE"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="EDGE"
                />
                <Input
                  required
                  value={announced}
                  name="announced"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Launch Date"
                  type="date"
                />
                <Input
                  required
                  value={status}
                  name="status"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Status"
                />
                <Input
                  required
                  value={dimentions}
                  name="dimentions"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Dimentions"
                />
                <Input
                  required
                  value={weight_g}
                  name="weight_g"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Weight_g"
                />
                <Input
                  required
                  value={weight_oz}
                  name="weight_oz"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Weight_oz"
                />
                <Input
                  required
                  value={SIM}
                  name="SIM"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="SIM"
                />
                <Input
                  required
                  value={display_type}
                  name="display_type"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Display Type"
                />
                <Input
                  required
                  value={display_resolution}
                  name="display_resolution"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Display Resolution"
                />
                <Input
                  required
                  value={display_size}
                  name="display_size"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Display Size"
                />
                <Input
                  required
                  value={OS}
                  name="OS"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Enter OS "
                />
                <Input
                  required
                  value={CPU}
                  name="CPU"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="CPU"
                />
              </Stack>
            </Box>
            {/* right box */}
            <Box p={{ base: "auto 10%", md: "10%" }}>
              <Stack spacing={3}>
                <Input
                  required
                  value={Chipset}
                  onChange={handleChange}
                  name="Chipset"
                  variant="flushed"
                  placeholder="Chipset"
                />
                <Input
                  required
                  value={GPU}
                  onChange={handleChange}
                  name="GPU"
                  variant="flushed"
                  placeholder="GPU"
                />
                <Input
                  required
                  value={memory_card}
                  onChange={handleChange}
                  name="memory_card"
                  variant="flushed"
                  placeholder="Memory Card"
                />
                <Input
                  required
                  value={internal_memory}
                  onChange={handleChange}
                  name="internal_memory"
                  variant="flushed"
                  placeholder="Internal Memory"
                />
                <Input
                  required
                  value={RAM}
                  onChange={handleChange}
                  name="RAM"
                  variant="flushed"
                  placeholder="RAM"
                />
                <Input
                  required
                  value={primary_camera}
                  onChange={handleChange}
                  name="primary_camera"
                  variant="flushed"
                  placeholder="Primary Camera"
                />
                <Input
                  required
                  value={secondary_camera}
                  onChange={handleChange}
                  name="secondary_camera"
                  variant="flushed"
                  placeholder="Secondary Camera"
                />
                <Input
                  required
                  value={loud_speaker}
                  onChange={handleChange}
                  name="loud_speaker"
                  variant="flushed"
                  placeholder="Loud Speaker"
                />
                <Input
                  required
                  value={audio_jack}
                  onChange={handleChange}
                  name="audio_jack"
                  variant="flushed"
                  placeholder="Audio Jack"
                />
                <Input
                  required
                  value={WLAN}
                  onChange={handleChange}
                  name="WLAN"
                  variant="flushed"
                  placeholder="WLAN"
                />
                <Input
                  required
                  value={bluetooth}
                  onChange={handleChange}
                  name="bluetooth"
                  variant="flushed"
                  placeholder="bluetooth"
                />
                <Input
                  required
                  value={GPS}
                  onChange={handleChange}
                  name="GPS"
                  variant="flushed"
                  placeholder="GPS"
                />
                <Input
                  required
                  value={NFC}
                  onChange={handleChange}
                  name="NFC"
                  variant="flushed"
                  placeholder="NFC"
                />
                <Input
                  required
                  value={radio}
                  onChange={handleChange}
                  name="radio"
                  variant="flushed"
                  placeholder="Radio"
                />
                <Input
                  required
                  value={USB}
                  onChange={handleChange}
                  name="USB"
                  variant="flushed"
                  placeholder="USB"
                />
                <Input
                  required
                  value={sensors}
                  onChange={handleChange}
                  name="sensors"
                  variant="flushed"
                  placeholder="Sensors"
                />
                <Input
                  required
                  value={battery}
                  onChange={handleChange}
                  name="battery"
                  variant="flushed"
                  placeholder="Battery"
                />
                <Input
                  required
                  value={colors}
                  onChange={handleChange}
                  name="colors"
                  variant="flushed"
                  placeholder="Colors"
                />
                <Input
                  required
                  value={approx_price_EUR}
                  onChange={handleChange}
                  name="approx_price_EUR"
                  variant="flushed"
                  placeholder="approx price EUR"
                />
                <Input
                  required
                  value={img_url}
                  onChange={handleChange}
                  name="img_url"
                  variant="flushed"
                  placeholder="Image url"
                />
                <input
                  style={{
                    padding: "10px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  type="submit"
                  value="ADD Product"
                />
              </Stack>
            </Box>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default AddForm;
