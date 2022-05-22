let door = true;
const onDoorOpen = () => {
  door = true;
};

const onDoorClose = () => {
  door = false;
};

console.log(door);
onDoorOpen();
console.log(door);
onDoorClose();
console.log(door);
