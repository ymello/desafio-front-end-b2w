import swapi from './configs/swapi'


export default {
    async getPlanet(planetId) {
        const response = await swapi.get(`/planets/${planetId}/`)
        return response
    }
}