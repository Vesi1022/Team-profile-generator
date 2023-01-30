const { writeFile } = require('fs')
const inquirer = require('inquirer')
const managerQuestions = require('./src/managerQuestions')
const Manager = require('./lib/Manager')

const managerOutput = []

// functions to ask questions
function managerQuestions() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const managerObj = new Manager(managerAnswers.office, [
      managerAnswers.managerName,
      managerAnswers.managerID,
      managerAnswers.managerEmail,
      'Manager',
    ])

    // push object into array to parse later
    managerOutput.push(managerObj)

    chooseMenu()
  })
}
      // Write the html
      writeFile('./dist/index.html', compiledData, (err) => {
        if (err) {
          return err
        }
      })
    }
  })
}

function ask() {
  askManager()
}

// start the app
ask()