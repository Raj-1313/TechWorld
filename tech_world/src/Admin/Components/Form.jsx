import React, { useState } from "react";
import { Box, Grid, Heading, Input, Stack, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { PostData } from "../../Redux/AdminRedux/Admin_Action";

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
  const toast = useToast()
  const statuses = ['success', 'error', 'warning', 'info']
  const [formData, setFormData] = useState(initState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(PostData({ payload: formData }))   
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
          <Heading size={{ base: "sm", sm: "sm", md: "md" }}>
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
                  value={network_technology}
                  name="network_technology"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Network Technology"
                />
                <Input
                  value={bands_2G}
                  name="bands_2G"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Enter 2G Bands"
                />
                <Input
                  value={bands_3G}
                  name="bands_3G"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Enter 3G Bands"
                />
                <Input
                  value={bands_4G}
                  name="bands_4G"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Enter 4G Bands"
                />
                <Input
                  value={network_speed}
                  name="network_speed"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Network Speed"
                />
                <Input
                  value={GPRS}
                  name="GPRS"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="GPRS"
                />
                <Input
                  value={EDGE}
                  name="EDGE"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="EDGE"
                />
                <Input
                  value={announced}
                  name="announced"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Launch Date"
                  type="date"
                />
                <Input
                  value={status}
                  name="status"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Status"
                />
                <Input
                  value={dimentions}
                  name="dimentions"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Dimentions"
                />
                <Input
                  value={weight_g}
                  name="weight_g"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Weight_g"
                />
                <Input
                  value={weight_oz}
                  name="weight_oz"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Weight_oz"
                />
                <Input
                  value={SIM}
                  name="SIM"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="SIM"
                />
                <Input
                  value={display_type}
                  name="display_type"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Display Type"
                />
                <Input
                  value={display_resolution}
                  name="display_resolution"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Display Resolution"
                />
                <Input
                  value={display_size}
                  name="display_size"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Display Size"
                />
                <Input
                  value={OS}
                  name="OS"
                  onChange={handleChange}
                  variant="flushed"
                  placeholder="Enter OS "
                />
                <Input
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
                  value={Chipset}
                  onChange={handleChange}
                  name="Chipset"
                  variant="flushed"
                  placeholder="Chipset"
                />
                <Input
                  value={GPU}
                  onChange={handleChange}
                  name="GPU"
                  variant="flushed"
                  placeholder="GPU"
                />
                <Input
                  value={memory_card}
                  onChange={handleChange}
                  name="memory_card"
                  variant="flushed"
                  placeholder="Memory Card"
                />
                <Input
                  value={internal_memory}
                  onChange={handleChange}
                  name="internal_memory"
                  variant="flushed"
                  placeholder="Internal Memory"
                />
                <Input
                  value={RAM}
                  onChange={handleChange}
                  name="RAM"
                  variant="flushed"
                  placeholder="RAM"
                />
                <Input
                  value={primary_camera}
                  onChange={handleChange}
                  name="primary_camera"
                  variant="flushed"
                  placeholder="Primary Camera"
                />
                <Input
                  value={secondary_camera}
                  onChange={handleChange}
                  name="secondary_camera"
                  variant="flushed"
                  placeholder="Secondary Camera"
                />
                <Input
                  value={loud_speaker}
                  onChange={handleChange}
                  name="loud_speaker"
                  variant="flushed"
                  placeholder="Loud Speaker"
                />
                <Input
                  value={audio_jack}
                  onChange={handleChange}
                  name="audio_jack"
                  variant="flushed"
                  placeholder="Audio Jack"
                />
                <Input
                  value={WLAN}
                  onChange={handleChange}
                  name="WLAN"
                  variant="flushed"
                  placeholder="WLAN"
                />
                <Input
                  value={bluetooth}
                  onChange={handleChange}
                  name="bluetooth"
                  variant="flushed"
                  placeholder="bluetooth"
                />
                <Input
                  value={GPS}
                  onChange={handleChange}
                  name="GPS"
                  variant="flushed"
                  placeholder="GPS"
                />
                <Input
                  value={NFC}
                  onChange={handleChange}
                  name="NFC"
                  variant="flushed"
                  placeholder="NFC"
                />
                <Input
                  value={radio}
                  onChange={handleChange}
                  name="radio"
                  variant="flushed"
                  placeholder="Radio"
                />
                <Input
                  value={USB}
                  onChange={handleChange}
                  name="USB"
                  variant="flushed"
                  placeholder="USB"
                />
                <Input
                  value={sensors}
                  onChange={handleChange}
                  name="sensors"
                  variant="flushed"
                  placeholder="Sensors"
                />
                <Input
                  value={battery}
                  onChange={handleChange}
                  name="battery"
                  variant="flushed"
                  placeholder="Battery"
                />
                <Input
                  value={colors}
                  onChange={handleChange}
                  name="colors"
                  variant="flushed"
                  placeholder="Colors"
                />
                <Input
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
