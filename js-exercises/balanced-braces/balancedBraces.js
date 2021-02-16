function balancedBraces(args) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (const arg of args) {
    const openParentheses = ['(', '{', '['];
    const closeParentheses = [')', '}', ']'];
    if (openParentheses.includes(arg)) {
      stack.push(arg);
    } else if (closeParentheses.includes(arg) && arg === map[stack[stack.length - 1]]) {
      stack.pop();
    }
  }
  return stack.length === 0;
}

export {
  balancedBraces,
};
