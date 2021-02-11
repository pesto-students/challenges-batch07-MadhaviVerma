
function duplicateLetters(str) {
  const char=str.split('');
  const charMap = {}
  for(const char of str){
    if(!charMap[char]){
      charMap[char]=1;
    }
else{
  charMap[char]+=1;
}
  }
  const charcounts=object.values(charMap);
  const maxcount=Math.max(...charCounts);
  if(!maxcount||maxcount===1)
return false;
  return maxcount;
}

export {
  duplicateLetters,
};
