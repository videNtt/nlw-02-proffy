const database = require('./db')
const createProffy = require("./createProffy")

database.then(async (db) => {
  // Cria os dados
 proffyValue = {
    name: "Rodrigo Almeida",
    avatar: "https://avatars3.githubusercontent.com/u/55795498?s=400&u=466229f556ff1b57dfe014d32b0ef74c0c0dbcd6&v=4",
    whatsapp: "18991345145",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
  }

  classValue = {
    subject: 1,
    cost: "40"
  }

  classScheduleValues = [
    {
      weekday: 0,
      time_from: 720,
      time_to: 1200
    },
    {
      weekday: 1,
      time_from: 520,
      time_to: 1000
    }
  ]
  // Inseri os dados
  //await createProffy(db, {proffyValue, classValue, classScheduleValues})

  // Consulta os dados
  const selectProffys = await db.all("SELECT * FROM proffys")
  //console.log(selectProffys)

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM classes 
      INNER JOIN proffys ON proffys.id = classes.proffy_id
    WHERE classes.proffy_id = 1
  `)
  //console.log(selectClassesAndProffys)

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "720"
    AND class_schedule.time_to > "720"
  `)

  console.log(selectClassesSchedules)

})