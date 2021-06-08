import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            default: '',
        },
        country: {
            type: String,
            country: '',
        },
        status: { type: String, default: 'Новичек' },
        phone_number: { type: String },
        Inviting_id: {
            type: String,
            default: '',
        },
        referral_link: {
            type: String,
            default: '',
        },
        referralLinkCounter: {
            type: Number,
            default: 0,
        },
        partners: {
            first: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
            ],
            second: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
            ],
            third: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
            ],
            additional_lines: { type: Boolean, default: false },
            fourth: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
            ],
            fifth: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
            ],
        },
        programs: {
            mrx: [
                {
                    _id: false,
                    start_time: {
                        type: Date,
                        default: Date.now(),
                    },
                    ending_time: {
                        type: Date,
                        required: true,
                    },
                    program: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Programs',
                    },
                },
            ],
        },
        wallets: {
            start_account: {
                type: Number,
                default: 0,
            },
            bonus_account: {
                type: Number,
                default: 0,
            },
            operating_account: {
                type: Number,
                default: 0,
            },
        },
        total_investment: {
            type: Number,
            default: 0,
        },
        referral_income_of_partners: {
            type: Number,
            default: 0,
        },
        configUser: {
            linear_premium: {
                firstLine: { type: Number, default: 0.04 },
                sekondLine: { type: Number, default: 0.03 },
                thirddLine: { type: Number, default: 0.02 },
                fourthdLine: { type: Number, default: 0.01 },
            },
        },
    },
    {
        timestamps: true,
    }
);
userSchema.methods.matchPassword = async function (plainPassword) {
    //TODO УБРАТЬ КОМЕНТАРИЙ

    // return await bcrypt.compare(plainPassword, this.password);
    return plainPassword === this.password;
};
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    //TODO Убрать коментарий
    //this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
