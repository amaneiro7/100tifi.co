import getData from '@/utils/getData'
import getHash from '@/utils/getHash'

const Characters = async () => {
  const id = getHash()
  const { name, image, status, species, gender, episode, origin, location } = await getData(id)
  return `<div class="Characters-inner">
        <article class="Characters-card">
            <img src="${image}" alt="${name}">
            <h2>${name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodes: ${episode.length}</h3>
            <h3>Status: ${status}</h3>
            <h3>Species: ${species}</h3>
            <h3>Gender: ${gender}</h3>
            <h3>Origin: ${origin.name}</h3>
            <h3>Last Location: ${location.name}</h3>
        </article>
    </div>`
}

export default Characters
