export default function addEntry(obj) {
  return {
    type: 'ADD_ENTRY',
    payload: obj,
  };
}