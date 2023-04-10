import getData from '@/utils/getData'

const Home = async () => {
  const { results } = await getData()
  return `<div class="Characters">
            ${results.map(character => {
                const { id, name, image } = character
                return `<article class="Characters-item">
                            <a href="#/${id}/">
                                <img src="${image}" alt="${name}">
                                <h2>${name}</h2>
                            </a>
                        </article>`
            }).join('')}
        </div>`
}

export default Home
