function formatPlayerTime(currentTime, duration) {
  const minutes = Math.floor(currentTime / 60)
      .toString()
      .padStart(2, '0'),
    seconds = Math.floor(currentTime - minutes * 60)
      .toString()
      .padStart(2, '0'),
    durationMinutes = Math.floor(duration / 60)
      .toString()
      .padStart(2, '0'),
    durationSeconds = Math.floor(duration - durationMinutes * 60)
      .toString()
      .padStart(2, '0')

  const time = `${minutes}:${seconds}`,
    dur = `${durationMinutes}:${durationSeconds}`

  return { time, dur }
}

function textValidator(comment) {
  const pattern = new RegExp(/^(?![\s.]*$).{3,}$/)

  return pattern.test(comment)
}

function urlValidator(image) {
  const pattern = new RegExp(
    /^$|^https?:\/\/(?:i\.)?imgur\.com\/\w+\.(?:jpg|jpeg)$/
  )

  return pattern.test(image)
}

const { format } = new Intl.NumberFormat('en-US')

export { formatPlayerTime, textValidator, urlValidator, format }
