import { Sequelize } from "sequelize";

async function connectToDB(dbURI) {
  console.log(`Connecting to DB: ${dbURI}`);

  const sequelize = new Sequelize(dbURI, {
    logging: false,
    define: {
      underscored: true,
      timestamps: true,
    },
    pool: {
      max: 20,
      min: 0,
      acquire: 1200000,
      idle: 10000,
    },
    password: "admin",
  });

  try {
    await sequelize.authenticate();
    console.log("Connected to DB successfully!");
  } catch (error) {
    console.error("Unable to connect to DB:", error);
  }

  return sequelize;
}

export default connectToDB;
