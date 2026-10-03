function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);

  if (hours > 22) {
    return `${hours - 12}:${minutes} pm`;
  }
  else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }
    else if (hours === 12) {
    return `12:${minutes} pm`;
  }

 else if (hours > 9){
    return `${hours}:${minutes} am`
  } 
else if (hours < 1) {
  return `12:${minutes} am`;
}
  return `${hours}:${minutes} am`;
}


export {formatAs12HourClock};
