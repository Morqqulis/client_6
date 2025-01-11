import TracksTable from '@/components/sections/tranding-tracks/TracksTable'

const TracksPage = () => {
  return (
    <main>
      <section className={`py-10`}>
        <h1 className={`mb-8 text-center text-2xl font-bold uppercase text-custom-red lg:text-3xl`}>Trending Tracks</h1>
        <TracksTable />
      </section>
    </main>
  )
}

export default TracksPage
