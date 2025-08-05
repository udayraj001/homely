import mysql from 'mysql2/promise';

// mysql.createConnection()
const db = mysql.createPool({
    host : "localhost",
    user :  "root",
    password : "uday",
    database : "homely"
});


try {
  const connection = await db.getConnection();
  console.log("Database Connected Successfully");
  connection.release();  
} catch (error) {
    console.error("Database Connection Failed");
    process.exit(1);
}
