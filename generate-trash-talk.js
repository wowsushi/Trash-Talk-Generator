function sample (arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function generateTrashTalk (options) {
  if (!options.job) return '點擊 "產生幹話" 產生幹話'

  const job = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }
  const phrase = ['很簡單','很容易','很快','很正常']

  const sentence = `身為一個${ job[options.job] }，${ sample(task[options.job]) }，${ sample(phrase) }吧！`

  return sentence
}

module.exports = generateTrashTalk

