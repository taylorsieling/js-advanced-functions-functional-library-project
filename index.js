const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // iterate over collection
      // if collection is an object, callback's arguements will be value, key, collection
      // return orignal collection
      let array = []
      if (typeof collection === 'object') {
        array = (Object.values(collection))
      } else {
        array = collection
      }
      array.forEach(el => {
        return callback(el)
      })
      return collection
    },

    map: function(collection, callback) {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
