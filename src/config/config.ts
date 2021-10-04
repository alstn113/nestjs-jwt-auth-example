export const config = () => ({
  port: parseInt(process.env.SERVER_PORT, 10),
  database: {
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT, 10),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  },
});
