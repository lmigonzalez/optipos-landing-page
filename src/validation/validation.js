import * as yup from 'yup'

export const contactFormSchema = yup.object().shape({
	name: yup.string().min(3).max(64).required(),
	email: yup.string().email().min(10).max(64).required(),
	phone: yup.string().min(10).required(),
	description: yup.string().max(3000),
})