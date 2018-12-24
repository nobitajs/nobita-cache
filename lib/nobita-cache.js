module.exports = (limit = 1000) => {
  let cache = {};
  let _store = [];
  return {
    get(key) {
      return cache[key];
    },
    set(key, value) {
      _store.push(key);
      cache[key] = value;
      if (_store.length > limit) {
        const delKey = _store[0];
        _store.shift();
        cache[delKey] = undefined;
      }
    },
    remove(key) {
      cache[key] = undefined;
    }
  }
}
