const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const queryCity = process.argv[2]

const getCityWeather = async city => {
    geocode(city, (error, { coordinates, location }) => {
        if (error) {
            return console.log('[geocode] - ERROR:', error)
        }

        forecast(coordinates, (error, { data: forecastData }) => {
            if (error) {
                return console.log('[forecast] - ERROR:', error)
            }

            console.log('Location:', location)
            console.log('Forecast', forecastData)
        })
    })
}

if (!!queryCity && typeof queryCity === 'string') {
    getCityWeather(queryCity)
} else {
    console.log('Please add a valid query parameter')
}

