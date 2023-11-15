import conn from "../database.js";

export async function addUser(req, res) {
   const rows= await conn.query(
      `INSERT INTO akun VALUES (NULL,'${req.body.username}','${req.body.password}')`
    );
    res.send("pengguna telah ditambahkan.");

    if (rows.length > 0) {
      if (req.body.username === rows[0].username) {
        res.send("nama Pengguna sudah ada coba nama lain");
        }
      }
}