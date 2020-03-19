/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				adress_street: Sequelize.STRING,
				adress_number: Sequelize.INTEGER,
				adress_complement: Sequelize.STRING,
				adress_state: Sequelize.STRING,
				adress_city: Sequelize.STRING,
				adress_zip_code: Sequelize.STRING,
			},
			{
				sequelize,
			}
		);

		return this;
	}
}

export default Recipient;
