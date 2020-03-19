import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			adress_street: Yup.string().required(),
			adress_number: Yup.number()
				.required()
				.integer(),
			adress_complement: Yup.string(),
			adress_state: Yup.string().required(),
			adress_city: Yup.string().required(),
			adress_zip_code: Yup.string().required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails' });
		}

		const {
			id,
			name,
			adress_street,
			adress_number,
			adress_complement,
			adress_state,
			adress_city,
			adress_zip_code,
			admin,
		} = await Recipient.create(req.body);

		return res.json({
			id,
			name,
			adress_street,
			adress_number,
			adress_complement,
			adress_state,
			adress_city,
			adress_zip_code,
			admin,
		});
	}
}

export default new RecipientController();
