// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver()
{
  const array = drivers.push('Ralph');
}
function destructivelyPrependDriver()
{
  const array = drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver()
{
  const array = drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  const array = drivers.shift();
}

function appendDriver() {
  drivers.splice(3,0,'Broom');
}
