const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  // storage:{type:String,required:true,enum:["32","64","128","256"]},
  // category:{type:String,required:true,enum:["laptop","mobile","tablet"]},

  imgUrl: [],
  brand: { type: String },
  model: { type: String },
  network_technology: { type: String },
  bands_2G: { type: String },
  bands_3G: { type: String },
  bands_4G: { type: String },
  network_speed: { type: String },
  GPRS: { type: String },
  EDGE: { type: String },
  announced: { type: String },
  status: { type: String },
  dimentions: { type: String },
  weight_g: { type: Number },
  weight_oz: { type: Number },
  SIM: { type: String },
  display_type: { type: String },
  display_resolution: { type: String },
  display_size: { type: String },
  OS: { type: String },
  CPU: { type: String },
  Chipset: { type: String },
  GPU: { type: String },
  memory_card: { type: String },
  internal_memory: { type: String },
  RAM: { type: String },
  primary_camera: { type: String },
  secondary_camera: { type: String },
  loud_speaker: { type: String },
  audio_jack: { type: String },
  WLAN: { type: String },
  bluetooth: { type: String },
  GPS: { type: String },
  NFC: { type: String },
  radio: { type: String },
  USB: { type: String },
  sensors: { type: String },
  battery: { type: String },
  colors: { type: String },
  approx_price_EUR: { type: Number },
  img_url: { type: String },


});


const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
