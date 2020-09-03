export default function indexFinder(vetor, item) {
  const retorno = vetor.map((element) => element.id);
  return retorno.indexOf(item);
}
