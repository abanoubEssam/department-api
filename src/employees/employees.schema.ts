import { Schema } from 'mongoose';
import { DepartmentModelName } from '../utils/constants/models';


export const EmployeesSchema: Schema = new Schema({

	name: {
		type: String,
		required: true
	},
	department: {
		type: String,
		required: true,
		ref: DepartmentModelName
	}

}, { timestamps: true });



EmployeesSchema.set('toJSON', {
	transform: function (doc, ret, options) {
		ret.id = ret._id;
		delete ret.deleted;
		delete ret._id;
		delete ret.__v;
	},
});
