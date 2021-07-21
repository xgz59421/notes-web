export default store => next => action => {
  console.log('logger中间件:', action, store);
  next(action);
}