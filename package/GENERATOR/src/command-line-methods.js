import chalk from 'chalk';
import { forEach } from 'lodash';
import { readSourceFile } from './utils';

const stateInit = (source) => {
  const markdown = readSourceFile(source);
  // @TODO should we move out state from this file?

  const stateObject = {
    content: markdown,
    previewText: '',
    warnings: {
      images: 0,
    },
    errors: {
      previewText: false,
      sponsorshipTop: false,
      sponsorshipBottom: false,
    },

    innerCheckErrors() {
      checkErrors(this.errors);
    },
    innerWarnings(){
      checkWarnings(this.warnings);
    }
  };

  return stateObject;
};

function checkWarnings(warnings) {
  forEach(warnings, (index, element) => {
    if (index) {
      const message = `WARNING source.md has ${index} ${element}. Replace it with memes`;
      // console.log(chalk.yellow(message));
      printMessage(message, 'yellow');
    }
  });
}

function checkErrors(errors) {
  if (Object.values(errors).includes(false)) {
    // @TODO replace with lodash
    forEach(errors, (_, error) => {
      if (!errors[error]) {
        const message = `ERROR source.md doesn't have ${error}`;

        printMessage(message, 'red');
        // console.log(chalk.red(message));
      }
    });

    const message = 'The full template has not been parsed!';
    printMessage(message, 'red2');
    // console.log(chalk.red.bold(message));

    return true;
  }
  return false;
}

function displayCLIErrors(errors, warnings) {
  if (checkErrors(errors)) {
    // there should be something in here
  } else {
    checkWarnings(warnings);
  }
}

function checkHtml(content) {
  const searchPattern = new RegExp('(<table|<tr>|<td|<tbody>)', 'i');
  let ind; let
    tempStr = '';

  if (process.env.noAdv) {
    ind = content.indexOf('<h1 class="mc-toc-title"');
  } else {
    ind = content.indexOf('</table></span></span></div>');
  }

  // hmm, it can be a problem
  for (let i = ind; i < ind + 5000; i++) {
    tempStr += content[i];
  }

  // we can extend these checks and add more  
  
  if (searchPattern.test(tempStr)) {
    printMessage('Content has correct html!!!', 'green');
  } else {
    printMessage('Content has not correct html!!!', 'yellow');
  }
}

const printMessage = ({ message, type }) => {
  if (!message) return;

  if (type == 'yellow') {
    console.log(chalk.yellow(message));
  }

  if (type == 'red') {
    console.log(chalk.red(message));
  }

  if (type == 'red2') {
    console.log(chalk.red.bold(message));
  }

  if (type == 'green1') {
    console.log(chalk.green(message));
  }
  if (type == 'green2') {
    console.log(chalk.green.bold(message));
  }
};




export {
  displayCLIErrors,
  checkErrors,
  checkWarnings,
  checkHtml,

  printMessage,
  stateInit
};