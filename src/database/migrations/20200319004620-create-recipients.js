module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('recipients', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			adress_street: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			adress_number: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			adress_complement: {
				type: Sequelize.STRING,
			},
			adress_state: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			adress_city: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			adress_zip_code: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('recipients');
	},
};
