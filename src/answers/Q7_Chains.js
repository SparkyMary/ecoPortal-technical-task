function Chain(char) {
  const customToString = () => {
    return this ? this.toString() + char : char
  }

  const next = (nextChar) =>
    Chain.call(
      {
        ancestor: this,
        toString: customToString,
      },
      nextChar
    )

  next.ancestor = this
  next.toString = customToString

  return next
}

export default Chain
