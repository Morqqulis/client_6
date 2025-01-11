export async function fetchChartData() {
  // In a real application, this would be an API call
  // For now, we'll return mock data
  return {
    artistBarChartData: [
      { name: 'Artist 1', value: 100 },
      { name: 'Artist 2', value: 80 },
      { name: 'Artist 3', value: 60 },
      { name: 'Artist 4', value: 40 },
      { name: 'Artist 5', value: 20 },
    ],
    genreBarChartData: [
      { name: 'Genre 1', value: 120 },
      { name: 'Genre 2', value: 90 },
      { name: 'Genre 3', value: 70 },
      { name: 'Genre 4', value: 50 },
      { name: 'Genre 5', value: 30 },
    ],
    songsPerYear: [
      { year: 2018, count: 50 },
      { year: 2019, count: 70 },
      { year: 2020, count: 90 },
      { year: 2021, count: 110 },
      { year: 2022, count: 130 },
    ],
    popularityDistribution: [
      { popularity: '0-20', count: 10 },
      { popularity: '21-40', count: 30 },
      { popularity: '41-60', count: 50 },
      { popularity: '61-80', count: 70 },
      { popularity: '81-100', count: 40 },
    ],
    musicalFeatures: [
      { feature: 'Danceability', value: 0.65 },
      { feature: 'Energy', value: 0.72 },
      { feature: 'Speechiness', value: 0.05 },
      { feature: 'Acousticness', value: 0.35 },
      { feature: 'Instrumentalness', value: 0.18 },
      { feature: 'Liveness', value: 0.16 },
      { feature: 'Valence', value: 0.45 },
    ],
  }
}
