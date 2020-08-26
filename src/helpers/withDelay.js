export default function withDelay (timer) {
  return new Promise(res => {
    setTimeout(() => {
      return res();
    }, timer);
  }); 
}
