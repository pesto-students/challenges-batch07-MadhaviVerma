import { debounce } from "./debounce.js";

let debouncedFn = debounce(() => console.log("hello"), 5000);
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();


