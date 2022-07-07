const mongoose=require("mongoose");

//student model
const ReservationSchema=new mongoose.Schema({
    room_type: { type: String },
    from_date: { type: Date },
    to_date: { type: Date },
    breakfast: { type: String },
    air_conditioner: { type: String },
    wakeup_service: { type: String }
})
module.exports=mongoose.model("Reservation",ReservationSchema);