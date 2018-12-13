const fs = require('fs')
const path = require('path')
const SVGO = require('svgo')
const svgo = new SVGO({})

main()

async function main () {
  const symbolsDirectory = makePath(process.argv[2] || 'src/icons')
  const iconsDirectory = makePath(process.argv[3] || 'src/icons/icons')

  const icons = fs.readdirSync(iconsDirectory)
  const symbols = fs.openSync(path.join(symbolsDirectory, 'symbols.svg'), 'a')
  fs.truncateSync(symbols, 0)

  let count = 0

  const results = await Promise.all(icons.map(async file => {
    if (!file.match(/.*\.svg$/)) {
      throw new Error('invalid file type in directory')
    }

    const filepath = path.resolve(iconsDirectory, file)
    const data = fs.readFileSync(filepath, { encoding: 'utf8' })

    const result = await svgo.optimize(data)
    const cleanedData = result.data.replace(/<svg .*? (viewBox=".*?")>(.*?)<\/svg>/g, function (match, p1, p2) {
      const content = p2
        .replace(/<g.*?>/g, '')
        .replace(/<\/g>/g, '')
        .replace(/ *strok.*?=".*?"/g, '')
        .replace(/ *fill=".*?"/g, '')

      return '<symbol id="' + file.replace('.svg', '') + '" ' + p1 + '>' +
        '\n' +
        '  ' +
        content +
        '\n' +
      '</symbol>'
    })

    count++
    console.log('.')
    return cleanedData
  }))

  fs.writeSync(symbols, parse(results.join('\n')))
  console.log(`Done. Imported ${count} icons.`)
}

function makePath (_path) {
  if (!_path) throw new Error('missing path')
  return path.resolve(__dirname, '..', _path)
}

function parse (data) {
  return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
    '\n\n' +
    data +
    '\n\n' +
    '</svg>'
}
