angular.module('albion-server').factory('$localstorage', [function(){
  let set = (key, value) => {
    localStorage.setItem(key, value);
  }

  let get = key => {
    return localStorage.getItem(key);
  }

  let setObj = (key, obj) => {
    let strObj = JSON.stringify(obj);
    localStorage.setItem(key, strObj);
  }

  let getObj = key => {
    let strObj = localStorage.getItem(key);
    return JSON.parse(strObj);
  }

  return { set, get, setObj, getObj }
}]);
