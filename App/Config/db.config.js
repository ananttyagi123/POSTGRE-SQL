module.exports = {
  HOST:"localhost",
  USER:"postgres",
  PASSWORD:"9528777142",
  db:"maindatabase",
  dialect:"postgres",
  pool:{
    max:5,
    min:0,
    acquire:30000,
    idle:10000
  }
};