export function createSlug(username: string): string {
  return username
    .normalize('NFD') // decompõe caracteres especiais (ex: ç, ã)
    .replace(/[\u0300-\u036f]/g, '') // remove marcas diacríticas
    .replace(/[^a-zA-Z0-9\s]/g, '') // remove caracteres especiais, mantendo letras e números
    .replace(/\s+/g, '-') // substitui espaços por hifens
    .replace(/[^a-zA-Z0-9\-]/g, '') // remove caracteres especiais, exceto hífen
    .toLowerCase() // opcional: deixa tudo minúsculo
    .trim();
}
