import { Schema } from 'mongoose';


export const DepartmentSchema: Schema = new Schema({

	name: {
		type: String,
		required: true
	},

}, { timestamps: true });



DepartmentSchema.set('toJSON', {
	transform: function (doc, ret, options) {
		ret.id = ret._id;
		delete ret.deleted;
		delete ret._id;
		delete ret.__v;
	},
});
