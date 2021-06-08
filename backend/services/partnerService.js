import mongoose from 'mongoose';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

export const getPartnet = async (userId, cb = () => null, selectQuery = '') => {
    if (!mongoose.isValidObjectId(userId)) {
        throw new Error('Партнер не найден');
    }
    let partner;
    try {
        partner = await User.findById(userId)
            .select(selectQuery)
            .populate({
                path: 'Inviting_id',
                select: selectQuery,
            })
            .select(selectQuery);
    } catch (error) {
        console.log('Больше нет партнеров');
    }

    const firstLine = partner ? partner.Inviting_id : null;
    if (firstLine) {
        cb(firstLine);
    } else {
        return null;
    }
    firstLine.save();
    return firstLine._id;
};
