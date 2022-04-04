const Match = (string, pattern, callback) => {
  if (!string) {
    callback("Please provide a string!", undefined);
  }
  if (!pattern) {
    callback("Please provide a pattern!", undefined);
  }
  const myRe = pattern;
  const result = string.match(myRe);
  callback(undefined, result);
};

const MatchAll = (string, pattern, callback) => {
  if (!string) {
    callback("Please provide a string!", undefined);
  }
  if (!pattern) {
    callback("Please provide a pattern!", undefined);
  }
  const myRe = pattern;
  const result = string.matchAll(myRe);
  callback(undefined, Array.from(result));
};

const Search = (string, pattern, callback) => {
  if (!string) {
    callback("Please provide a string!", undefined);
  }
  if (!pattern) {
    callback("Please provide a pattern!", undefined);
  }
  const myRe = pattern;
  const result = string.search(myRe);
  callback(undefined, result);
};

const Replace = (string, pattern, replace, callback) => {
  if (!string) {
    callback("Please provide a string!", undefined);
  }
  if (!pattern) {
    callback("Please provide a pattern!", undefined);
  }
  const myRe = pattern;
  const result = string.replace(myRe, replace);
  callback(undefined, result);
};

const Split = (string, pattern, callback) => {
  if (!string) {
    callback("Please provide a string!", undefined);
  }
  if (!pattern) {
    callback("Please provide a pattern!", undefined);
  }
  const myRe = pattern;
  const result = string.split(myRe);
  callback(undefined, result);
};

const Exec = (string, pattern, callback) => {
  if (!string) {
    callback("Please provide a string!", undefined);
  }
  if (!pattern) {
    callback("Please provide a pattern!", undefined);
  }
  const myRe = pattern;
  const result = myRe.exec(string);
  callback(undefined, result);
};

const Test = (string, pattern, callback) => {
  if (!string) {
    callback("Please provide a string!", undefined);
  }
  if (!pattern) {
    callback("Please provide a pattern!", undefined);
  }
  const myRe = pattern;
  const result = myRe.test(string);
  callback(undefined, result);
};

module.exports = {
  Match,
  MatchAll,
  Search,
  Replace,
  Split,
  Exec,
  Test,
};
