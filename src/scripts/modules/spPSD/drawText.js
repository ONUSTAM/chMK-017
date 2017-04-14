import sp from './config'

export default function () {
  var names = _.reduce(sp.partsName, function(result, name, i){
    var key = Object.keys(name)

    result[key] = {
      Id   : key[0],
      text : name[key],
      label: key + '@2x.png, 50%' + key + '.png, 125%' + key + '@A.png'
    }

    return result
  },{})

  return names
}
