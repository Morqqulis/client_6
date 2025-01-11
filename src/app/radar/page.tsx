import RadarFilters from '@/components/sections/radar/RadarFilters'

const RadarPage = () => {
  return (
    <main>
      <section className={`px-5 py-10`}>
        <div className={`rounded-lg border border-gray-700 py-10`}>
          <h1 className={`mb-8 text-center text-2xl font-bold uppercase text-custom-red lg:text-3xl`}>Target Market</h1>

          <RadarFilters />
        </div>
      </section>
    </main>
  )
}

export default RadarPage
