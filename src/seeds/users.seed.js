const Users = require("../models/users.model")
const students = [
    {
        id: "1",
        matricule: "23A816FS",
        name: "Felix Warano",
        email: "carineteoi@gmail.com",
        faculty: "science",
        level: 3,
        sex: "M",
        birthdate: "2000-01-01",
        school: "University of ngaoundere"
    },
    {
        id: "2",
        matricule: "23A046FS",
        name: "Skylon",
        email: "mabouazareel@gmail.com",
        faculty: "science",
        level: 3,
        sex: "F",
        birthdate: "2000-01-01",
        school: "University of ngaoundere"
    },
]
async function SeedUsers() {
    try {
        for (const student of students) {
            await Users.create(student)
            console.log(`==============================\n > ${student.name} created successfully !`)
        }
        console.log("--------- All users has been insert  --------------")
    } catch (e) {
        console.log("error occured while trying to seed users ", e)
    }
}

module.exports = SeedUsers