import mongoose from 'mongoose';

const programModel = mongoose.Schema(
    {
        name: { type: String },
        b_award: { type: Number },
        validity: { type: Number },
        premium: { type: Number },
        line_count: { type: Number },
        price: {
            type: Number,
            virtual: true,
            get() {
                return Number(this.name);
            },
        },
    },
    {
        timestamps: true,
    }
);

const Program = mongoose.model('Programs', programModel);

export default Program;
