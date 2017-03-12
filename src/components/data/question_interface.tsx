interface IQuestion{
  id: string,
  img: string,
  question: string,
  color?: string,
  depth: number,
  tags: Array<Object>
}

export default IQuestion;
